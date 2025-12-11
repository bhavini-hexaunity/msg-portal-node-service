import prisma from "../config/prisma";

export async function queryByDateRange(
  table: string,
  start: string,
  end: string,
  columns: string[] = ["*"]
) {
  const colStr = columns.join(", ");

  return prisma.$queryRawUnsafe(`
      SELECT ${colStr}
      FROM ${table}
      WHERE STR_TO_DATE(date, '%m/%d/%Y')
        BETWEEN STR_TO_DATE('${start}', '%m/%d/%Y')
        AND STR_TO_DATE('${end}', '%m/%d/%Y')
      ORDER BY STR_TO_DATE(date, '%m/%d/%Y');
  `);
}

export function formatByDate<
  T extends Record<string, any>,
  M extends Record<string, keyof T>
>(
  rows: T[],
  fieldMap: M,
  extraMapper?: (store: Record<string, any>, row: T) => void
): Record<string, Record<string, any>> {

  const output: Record<string, Record<string, any>> = {};

  for (const row of rows) {
    const date = row.date as string;

    // Ensure date bucket exists
    if (!output[date]) {
      output[date] = {};
    }

    const store = output[date];

    // Apply mapped fields safely
    for (const key in fieldMap) {
      const dbField = fieldMap[key];

      // Guaranteed safe now
      store[key] = row[dbField as keyof T];
    }

    // Apply extra mapper (guest counts, schedule, etc.)
    if (extraMapper) {
      extraMapper(store, row);
    }
  }

  return output;
}

