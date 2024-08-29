import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./TableColumn";
import { DataTableType } from "../assets/dataTableType";
import { useQuery } from "@tanstack/react-query";
import { getAllCoin, getRate } from "../api/api";

export default function TableData() {
  const coins = useQuery({
    queryKey: ["coins"],
    queryFn: () => getAllCoin(),
  });

  const rates = useQuery({
    queryKey: ["rates"],
    queryFn: () => getRate(),
  });

  const renderCell = (params: any) => {
    if (rates?.data?.krw_vnd_rate > params.value) {
      return (
        <span className="text-[10px] md:text-base text-red-500">
          {params.value}
        </span>
      );
    } else {
      return (
        <span className="text-[10px] md:text-base text-blue-600">
          {params.value}
        </span>
      );
    }
  };

  const updatedColumns = columns.map((col) => {
    if (col.field === "upbit_rate" || col.field === "bithumb_rate") {
      return {
        ...col,
        renderCell: (params: any) => renderCell(params),
      };
    }
    return { ...col };
  });

  const coinData = coins?.data?.message;
  const listToken = coinData ? Object.keys(coinData) : [];

  const rows = listToken?.map((item) => {
    const rows: DataTableType = {
      token: coinData[item]?.coin_symbol,
      bnb: coinData[item]?.price_at_binance,
      upbit: coinData[item]?.price_at_upbit,
      bithumb: coinData[item]?.price_at_bithump,
      upbit_rate: Number(coinData[item]?.upbit_rate.toFixed(3)),
      bithumb_rate: Number(coinData[item]?.bithumb_rate.toFixed(3)),
    };
    return rows;
  });

  return (
    <>
      <DataGrid
        columns={updatedColumns}
        rows={rows}
        hideFooter={true}
        disableColumnResize={true}
        getRowId={(row) => row.token}
      ></DataGrid>
    </>
  );
}
