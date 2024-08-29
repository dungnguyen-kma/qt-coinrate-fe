import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./TableColumn";
import { DataTableType } from "../assets/dataTableType";


// const inintState: DataTableType = {
//   id: 0,
//   token: "",
//   bnb: 0,
//   upbit: 0,
//   bithumb: 0,
//   upbit_rate: 0,
//   bithumb_rate: 0,
// };

export default function TableData() {
  
  const rows: DataTableType[] = [
    {
      id: 1,
      token: "XRP",
      bnb: 0.5,
      upbit: 0.5,
      bithumb: 0.5,
      upbit_rate: 0.5,
      bithumb_rate: 0.5,
    },
    {
      id: 2,
      token: "XRP",
      bnb: 0.5,
      upbit: 0.5,
      bithumb: 0.5,
      upbit_rate: 0.5,
      bithumb_rate: 0.5,
    },
    {
      id: 3,
      token: "XRP",
      bnb: 0.5,
      upbit: 0.5,
      bithumb: 0.5,
      upbit_rate: 0.5,
      bithumb_rate: 0.5,
    },
    {
      id: 4,
      token: "XRP",
      bnb: 0.5,
      upbit: 0.5,
      bithumb: 0.5,
      upbit_rate: 0.5,
      bithumb_rate: 0.5,
    },
    {
      id: 5,
      token: "XRP",
      bnb: 0.5,
      upbit: 0.5,
      bithumb: 0.5,
      upbit_rate: 0.5,
      bithumb_rate: 0.5,
    },
  ];

  return (
    <>
      <DataGrid
        columns={columns}
        rows={rows}
        hideFooter={true}
        disableColumnResize={true}
      ></DataGrid>
    </>
  );
}
