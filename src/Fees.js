import React, { useMemo } from "react";
import { useTable } from "react-table/dist/react-table.development";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./feescolumn";
import './table.css'
import './App.css'
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"

export const Fees = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div><Navbar></Navbar>
    <section>
    <div className="sidepanel">
     <Sidebar></Sidebar>
    </div>
  <div className="FeaturedUsers">
    <div className="container">
    <div className="firstrow">
      <h2>Fees</h2>
     

    </div>

  
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((columns) => (
              <th {...columns.getHeaderProps()}>{columns.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) =>{
                return  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
             
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    </div>
    </section>
    </div>
  );
};
