// src/utils/helper.ts

/**
 * Convert MM/DD/YYYY → JS Date
 * Accepts undefined safely
 */
export function parseMMDDYYYY(dateStr: string | undefined): Date {
    if (!dateStr) return new Date(""); // Invalid date

    const [mm, dd, yyyy] = dateStr.split("/");

    if (!mm || !dd || !yyyy) return new Date("");

    return new Date(`${yyyy}-${mm}-${dd}`);
}

/**
 * Convert JS Date → MM/DD/YYYY string
 */
export function toMMDDYYYY(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) return "";
    const mm = (date.getMonth() + 1).toString().padStart(2, "0");
    const dd = date.getDate().toString().padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
}

/**
 * Get day name from MM/DD/YYYY or Date
 * Safe for undefined
 */
export function getDayName(input: string | Date | undefined): string {
    if (!input) return ""; // SAFE fallback

    const date =
        typeof input === "string"
            ? parseMMDDYYYY(input)
            : input instanceof Date
                ? input
                : new Date("");

    const WEEKDAYS = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    if (isNaN(date.getTime())) return "";

    return WEEKDAYS[date.getDay()] ?? "";
}

/**
 * Get start-of-week (Sunday) & end-of-week (Saturday)
 * Safe for undefined dateStr
 */
export function getWeekRange(dateStr: string | undefined) {
    const jsDate = parseMMDDYYYY(dateStr);

    const start = new Date(jsDate);
    if (!isNaN(jsDate.getTime())) {
        start.setDate(start.getDate() - start.getDay());
    }

    const end = new Date(start);
    if (!isNaN(start.getTime())) {
        end.setDate(start.getDate() + 6);
    }

    return { start, end };
}

/**
 * Generate week_id → YYYY-MM-DD_week
 * Safe for invalid dates
 */
export function generateWeekId(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) return "invalid_week";
    return date.toISOString().split("T")[0] + "_week";
}


export function normalizeValue(field: string, value: any) {
  if (value === "" || value === null || value === undefined) {
    return null;
  }

  // Trim string values
  if (typeof value === "string" && value.trim() === "") {
    return null;
  }
  return value;
}