import React, { useMemo } from "react";
import { useTable } from "react-table/dist/react-table.development";
import MOCK_DATA from "./MOCK_DATA2.json";
import { COLUMNS } from "./featuredcollectioncolumn";
import closebtn from './images/closebtn.png';
import Sidebar from "./Sidebar";
import './table.css'
import './App.css'
import Buttons from "./Button";
import Navbar from "./Navbar"
export const FeaturedCollection = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });


  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
    function Closediv()
    {
      
      let spinner = document.querySelector(".ViewdivFeaturedCollection")
     
      if (spinner.classList.contains("blurred")) {
        spinner.classList.remove("blurred");
      } else {
      spinner.classList.add("blurred")
      }
    }
  return (
    <div>
    <div className="ViewdivFeaturedCollection">
      <div className="View1">
        <div class="backgroundimage">
        <img onClick={Closediv} src={closebtn} alt="" />
        </div>
        <h4>Mona lisa painting</h4>

      </div>

    </div>
    <Navbar></Navbar>
    <section>
    <div className="sidepanel">
      <Sidebar></Sidebar>

    </div>
  <div className="FeaturedUsers">
    <div className="container">
    <div className="firstrow">
      <h2>Featured Collection</h2>
      <Buttons to={'/FeaturedCollection/AddUsers'}></Buttons>

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
