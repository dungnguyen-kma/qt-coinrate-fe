import { GridColDef } from "@mui/x-data-grid";

const createColumn = (
  field: string,
  headerName: string,
  minWidth: number = 70,
  align: "left" | "right" = "right"
): GridColDef => ({
  field,
  headerAlign: align,
  align,
  flex: 1,
  minWidth,
  type: field === "token" ? "string" : "number",
  disableColumnMenu: true,
  sortable: false,
  renderHeader: () => (
    <span className="text-[10px] md:text-base">{headerName}</span>
  ),
  renderCell: (params) => (
    <span className="text-[10px] md:text-base">{params.value}</span>
  ),
});

export const columns: GridColDef[] = [
  createColumn("token", "Token", 50, "left"),
  createColumn("bnb", "BNB"),
  createColumn("upbit", "Upbit"),
  createColumn("bithumb", "Bithumb"),
  createColumn("upbit_rate", "Upbit rate"),
  createColumn("bithumb_rate", "Bithumb rate"),
];