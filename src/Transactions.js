import React, { useMemo } from "react";
import { useTable } from "react-table/dist/react-table.development";
import MOCK_DATA from "./MOCK_DATA.json";
import IconCalender from "./images/Icon-calendar.png";
import { COLUMNS } from "./transanctionscolumn";
import { IconContext } from "react-icons";
import "./table.css";
import { FaAngleUp } from "react-icons/fa";
import "./App.css";
import DatePick from "./DatePicker";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"

function Toggler()
{
  

  const latest = document.querySelector('.Latest')
  const oldest = document.querySelector('.Oldest')

  if (oldest.style.display !=="block") {
     oldest.style.display="block";
     latest.style.borderBottomRightRadius = "0";
     latest.style.borderBottomLeftRadius = "0";
  
    
  } else {
    oldest.style.display="none";
    latest.style.borderBottomRightRadius = "10px";
     latest.style.borderBottomLeftRadius = "10px";
  }

}
export const Transactions = () => {
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
            <h2>Transactions</h2>
            <div className="Date">
              <img src={IconCalender} alt="Icon" />
              <DatePick />
              <div>
                <p>To</p>
              </div>
              <DatePick />
            </div>
            <div className="LatestOldest">
              <div className="Latest">
                <p>Latest</p>
                <span onClick={Toggler}>
                <IconContext.Provider value={{ color: "#DA0037", size: 25 }}>
                  <FaAngleUp />
                </IconContext.Provider>
                </span>

                </div>
                <div className="Oldest">
                <p>Oldest</p>

                </div>
              </div>
              
           

            <button class="search">Search</button>
          </div>

          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((columns) => (
                    <th {...columns.getHeaderProps()}>
                      {columns.render("Header")}
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
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
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

