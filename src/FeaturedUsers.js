import React, { useMemo } from "react";
import { useTable } from "react-table/dist/react-table.development";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./column";
import './table.css';
import closebtn from './images/closebtn.png';
import userimage from './images/userimage.png'
import './App.css'
import Buttons from "./Button";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"
export const FeaturedUsers = () => {
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
      
      let spinner = document.querySelector(".ViewdivFeaturedUsers")
     
      if (spinner.classList.contains("blurred")) {
        spinner.classList.remove("blurred");
      } else {
      spinner.classList.add("blurred")
      }
    }
  return (

  <div>
    <div className="ViewdivFeaturedUsers">
      <div className="View">
     
        <img onClick={Closediv} src={closebtn} alt="" />
        <div>
          <img  src={userimage}   alt="" />
          <h4>Alex</h4>
          <p>James@gmail.com</p>

        </div>
        

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
      <h2>Featured Users</h2>
     
      <Buttons to={'/FeaturedUsers/AddUsers'}></Buttons>
    

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
