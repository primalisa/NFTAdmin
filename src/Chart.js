import React from "react";

import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  CommonAxisSettings,
  Grid,
  
  Legend,
  Margin,
  Tooltip,
  Label,
  Format,
 
} from "devextreme-react/chart";
import { architectureSources, sharingStatisticsInfo } from "./data.js";

class SLchart extends React.Component {
  constructor(props) {
    super(props);
    let a = this.props.types;
    this.state = {
      type: a,
    };
    this.types = ["spline", "stackedspline", "fullstackedspline"];
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Chart
          className="chart"
          palette="Dark Moon"
          dataSource={sharingStatisticsInfo}
          // title="Architecture Share Over Time (Count)"
        >
          {/* <Size height={300} width={800}  /> */}
          <CommonSeriesSettings argumentField="year" type={this.state.type} />
          <CommonAxisSettings>
            <Grid visible={true} />
          </CommonAxisSettings>
          {architectureSources.map((item) => (
            <Series key={item.value} valueField={item.value} name={item.name} />
          ))}
          <Margin bottom={20} />
          {/* <ZoomAndPan
                    argumentAxis="both"
                    valueAxis="both"
                />
           <ScrollBar 
                    visible={true}
                /> */}
          <ArgumentAxis allowDecimals={false} axisDivisionFactor={60}>
            <Label>
              <Format type="decimal" />
            </Label>
          </ArgumentAxis>
          <Legend verticalAlignment="top" horizontalAlignment="right" />
          {/* <Export enabled={true} /> */}
          <Tooltip enabled={true} />
        </Chart>
      </React.Fragment>
    );
  }

  handleChange(e) {
    this.setState({ type: e.value });
  }
}

export default SLchart;
