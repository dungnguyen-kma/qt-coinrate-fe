import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "token",
    headerAlign: "left",
    flex: 1,
    type: "string",
    disableColumnMenu: true,
    sortable: false,
    renderHeader: () => <span className="text-[10px] md:text-base">Token</span>,
  },
  {
    field: "bnb",
    headerAlign: "right",
    flex: 1,
    type: "number",
    disableColumnMenu: true,
    sortable: false,
    renderHeader: () => (
      <span className="text-[10px] md:text-base">BNB(1)</span>
    ),
  },
  {
    field: "upbit",
    headerAlign: "right",
    flex: 1,
    type: "number",
    disableColumnMenu: true,
    sortable: false,
    renderHeader: () => (
      <span className="text-[10px] md:text-base">Upbit(2)</span>
    ),
  },
  {
    field: "bithumb",
    headerAlign: "right",
    flex: 1,
    type: "number",
    disableColumnMenu: true,
    sortable: false,
    renderHeader: () => (
      <span className="text-[10px] md:text-base">Bithumb(3)</span>
    ),

  },
  {
    field: "upbit_rate",
    headerAlign: "right",
    flex: 1,
    type: "number",
    disableColumnMenu: true,
    sortable: false,
    renderHeader: () => (
      <span className="text-[10px] md:text-base">Upbit rate</span>
    ),

  },
  {
    field: "bithumb_rate",
    headerAlign: "right",
    flex: 1,
    type: "number",
    disableColumnMenu: true,
    sortable: false,
    renderHeader: () => (
      <span className="text-[10px] md:text-base">Bithumb rate</span>
    ),

  },
];
