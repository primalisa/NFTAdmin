// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { Doughnut} from "react-chartjs-2";
// import "./App.css"
// // import {
// //   Chart,
// //   ChartLegend,
// //   ChartSeries,
// //   ChartSeriesItem,
// //   ChartSeriesLabels,
// // } from "@progress/kendo-react-charts";
// // import "hammerjs";
// // import data from "./power-distribution-data.json";

// // const labelContent = (e) => e.category;

// // const Donut = () => (
// //   <Chart class="chart">
// //     <ChartSeries>
// //       <ChartSeriesItem
// //         type="donut"
// //         data={data}
// //         // categoryField="kind"
// //         field="share" 
// //       >
        
// //         {/* <ChartSeriesLabels
// //           color="Blue"
// //           background="none"
// //           content={labelContent}
// //         /> */}
// //       </ChartSeriesItem>
// //     </ChartSeries>
// //     <ChartLegend visible={false} />
// //   </Chart>
// // );




// export default Donut;


// import { useEffect, useState } from 'react';
// import './App.css';
// import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
// ChartJs.register(
//   Tooltip, Title, ArcElement, Legend
// );


// const data = {
//     datasets: [{
//         data: [10, 20, 30],
//         backgroundColor:[
//           '#00FFC6',
//           '#8479E1',
//           '#F24A72',
//           '#FFF56D'
//         ]
//     },
//   ],
//   // These labels appear in the legend and in the tooltips when hovering different arcs
//   labels: [
//     'Sold',
//     'Unsold',
//     'In-active',
//     'Active'
//   ], 
// };
// function Donut() {
//   const [data, setData] = useState({
//     datasets: [{
//         data: [20, 20, 25,35],
//         backgroundColor:[
//           '#00FFC6',
//           '#8479E1',
//           '#F24A72',
//           '#FFF56D',
//         ]
//     },
//   ],
//   labels: [
//     'Sold',
//     'Unsold',
//     'In-active',
//     'Active'
//   ], 
  
//   options: {
//     plugins: {
//        legend: {
//           align:'right'
       
//        }
//     }
//  }
// });
//   // useEffect(()=> {
//   //   const fetchData = () =>  {
//   //     fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
//   //       const res = data.json();
//   //       return res
//   //     }).then((res) => {
//   //       console.log("resss", res)
//   //       const label = [];
//   //       const data = [];
//   //       for(var i of res) {
//   //           label.push(i.name);
//   //           data.push(i.id)
//   //       }
//   //       setData(
//   //         {
//   //           datasets: [{
//   //               data:data,
//   //               backgroundColor:[
//   //                 'red',
//   //                 'blue',
//   //                 'yellow'
//   //               ]
//   //           },
//   //         ],
//   //         labels:label, 
//   //       }
//   //       )

//   //     }).catch(e => {
//   //       console.log("error", e)
//   //     }) 
//   //   }
//   // fetchData();
//   // }, [])
  
//   return (
//     <div className="chartbox">
//       <Doughnut data={data}/>
//     </div>
//   );
// }

// export default Donut;


import React from 'react';

import PieChart, {
  Legend,
  Series,

  HoverStyle,
  Size,
} from 'devextreme-react/pie-chart';

import { olympicMedals } from './donutdata.js';

class Donut extends React.Component {
  render() {
    return (
      <PieChart 
        
        id="pie"
        type="doughnut"
        // title="Olympic Medals in 2008"
        palette="Material"
        dataSource={olympicMedals}
        onPointClick={this.pointClickHandler}
      >
        	<Size
                    height={290}
                    width={290}
                />
        <Series argumentField="country" valueField="medals">
          <HoverStyle color="#ffd700" />
        </Series>
        {/* <Export enabled={true} /> */}
        <Legend
          margin={0}
          horizontalAlignment="right"
          verticalAlignment="top"
        />
      </PieChart>
    );
  }

  pointClickHandler(arg) {
    arg.target.select();
  }
}

export default Donut;
