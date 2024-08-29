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
    renderCell: (params) => (
      <span className="text-[10px] md:text-base ">{params.value}</span>
    ),
  },
  {
    field: "bnb",
    headerAlign: "right",
    flex: 1,
    type: "number",
    disableColumnMenu: true,
    sortable: false,
    renderHeader: () => (
      <span className="text-[10px] md:text-base">BNB</span>
    ),
    renderCell: (params) => (
      <span className="text-[10px] md:text-base ">{params.value}</span>
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
      <span className="text-[10px] md:text-base">Upbit</span>
    ),
    renderCell: (params) => (
      <span className="text-[10px] md:text-base ">{params.value}</span>
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
      <span className="text-[10px] md:text-base">Bithumb</span>
    ),
    renderCell: (params) => (
      <span className="text-[10px] md:text-base ">{params.value}</span>
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
    renderCell: (params) => (
      <span className="text-[10px] md:text-base ">{params.value}</span>
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
    renderCell: (params) => (
      <span className="text-[10px] md:text-base ">{params.value}</span>
    ),
  },
];
