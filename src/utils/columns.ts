export const TOPLINE_COLUMNS = [
    "date",
    "day_name",
    "mod_name",
    "total_sales",
    "lunch_sales",
    "dinner_sales",
    "total_forecast",
    "forecast_lunch",
    "forecast_dinner",
    "comp_total",
    "void_total",
    "guest_count",
    "training_hours"
];
export const PROFIT_COLUMNS = [
    "date",
    "main_room_sales",
    "patio_sales",
    "third_party_sales",
    "togo_sales",
    "catering",
    "alcohol_sales",
    "na_bev_sales",
    "foh_reg_hours",
    "foh_reg_wages",
    "foh_ot_hours",
    "foh_ot_wages",
    "boh_reg_hours",
    "boh_reg_wages",
    "boh_ot_hours",
    "boh_ot_wages",
    "comments"
];
export const DEPOSIT_COLUMNS = [
    "date",
    "actual",
    "amount_due"
];
export const PEOPLE_COLUMNS = [
    "date",
    "total_staff_scheduled",
    "shoutouts",
    "staffing_issues"
];
export const OPERATIONS_COLUMNS = [
    "date",
    "was_there_wait",
    "wait_start",
    "wait_end",
    "avg_wait_time",
    "total_guest_count",
    "comments"
];
export const SALES_HOUR_COLUMNS = [
    "date",
    "hour",
    "amount"
];
export const FOOD_COST_COLUMNS = [
    "date",
    "vendor",
    "amount"
];
export const SCHEDULE_COLUMNS = [
    "date",
    "role",
    "shift",
    "count"
];
export const GUEST_COUNT_COLUMNS = [
    "date",
    "hour",
    "count"
];

export const TOPLINE_FIELD_MAP = {
    total_sales: "total_sales",
    lunch_sales: "lunch_sales",
    dinner_sales: "dinner_sales",

    total_forecast: "total_forecast",
    forecast_lunch: "forecast_lunch",
    forecast_dinner: "forecast_dinner",

    comp_total: "comp_total",
    void_total: "void_total",

    guest_count: "guest_count",
    training_hours: "training_hours"
} as const;

export const PROFIT_FIELD_MAP = {
    main_room_sales: "main_room_sales",
    patio_sales: "patio_sales",
    third_party_sales: "third_party_sales",
    third_party_fees: "third_party_fees",
    togo_sales: "togo_sales",
    catering: "catering",

    alcohol_sales: "alcohol_sales",
    na_bev_sales: "na_bev_sales",

    foh_reg_hours: "foh_reg_hours",
    foh_reg_wages: "foh_reg_wages",
    foh_ot_hours: "foh_ot_hours",
    foh_ot_wages: "foh_ot_wages",

    boh_reg_hours: "boh_reg_hours",
    boh_reg_wages: "boh_reg_wages",
    boh_ot_hours: "boh_ot_hours",
    boh_ot_wages: "boh_ot_wages",

    comments: "comments"
} as const;

export const DEPOSIT_FIELD_MAP = {
    actual: "actual",
    amount_due: "amount_due"
} as const;

export const PEOPLE_FIELD_MAP = {
    total_staff_scheduled: "total_staff_scheduled",
    shoutouts: "shoutouts",
    staffing_issues: "staffing_issues"
} as const;

export const OPERATIONS_FIELD_MAP = {
    was_there_wait: "was_there_wait",
    wait_start: "wait_start",
    wait_end: "wait_end",
    avg_wait_time: "avg_wait_time",

    total_guest_count: "total_guest_count",
    comments: "comments"
} as const;

export function mapGuestField(hour: string): string {
    return "guest_" + hour.replace("-", "_"); // "11-12" → "guest_11_12"
}

export function mapSalesField(hour: string): string {
    return  hour.replace("-", "_"); // "11-12" → "sales_11_12"
}
export function mapScheduleField(role: string, shift: "AM" | "PM"): string {
  return `${role}_${shift}`;
}
