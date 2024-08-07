import React from "react";
import { useTable } from "react-table";
import nodata from "./nodata.jpg";

const RestaurantTable = ({ data, onEdit, onDelete }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Description", accessor: "description" },
      { Header: "Location", accessor: "location" },
      // { Header: "Payment", accessor: "Payment" },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <>
            <button onClick={() => onEdit(row.original)}>Edit</button>
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => onDelete(row.original.id)}
            >
              Delete
            </button>
          </>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      {rows && rows.length > 0 ? (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                style={{ backgroundColor: "cornflowerblue", color: "white" }}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <>
          <img src={nodata} alt="nodata" />
          <h4>
            Sorry, there are no restaurants available at the moment. Please add
            one.
          </h4>
        </>
      )}
    </>
  );
};

export default RestaurantTable;
