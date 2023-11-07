import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "OrderName", headerName: "Order Name", width: 130 },
  { field: "OrderDate", headerName: "Order Date", width: 130 },
  {
    field: "OrderStatus",
    headerName: "OrderStatus",
    width: 90,
  },
];

const rows = [
  { id: 1, OrderDate: "Snow", OrderName: "Jon", OrderStatus: 35 },
  { id: 2, OrderDate: "Lannister", OrderName: "Cersei", OrderStatus: 42 },
  { id: 3, OrderDate: "Lannister", OrderName: "Jaime", OrderStatus: 45 },
  { id: 4, OrderDate: "Stark", OrderName: "Arya", OrderStatus: 16 },
  { id: 5, OrderDate: "Targaryen", OrderName: "Daenerys", OrderStatus: null },
  { id: 6, OrderDate: "Melisandre", OrderName: null, OrderStatus: 150 },
  { id: 7, OrderDate: "Clifford", OrderName: "Ferrara", OrderStatus: 44 },
  { id: 8, OrderDate: "Frances", OrderName: "Rossini", OrderStatus: 36 },
  { id: 9, OrderDate: "Roxie", OrderName: "Harvey", OrderStatus: 65 },
];

export default function Orders() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pOrderStatus: 0, pOrderStatusSize: 5 },
          },
        }}
        pOrderStatusSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
