import React from 'react';
import Chart from "react-google-charts";

export default class CalendarSampleView extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <div>
      <Chart
        width={1000}
        height={350}
        chartType="Calendar"
        loader={<div>Loading Chart</div>}
        data={[
          [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
          [new Date(2012, 3, 13), 37032],
          [new Date(2012, 3, 14), 38024],
          [new Date(2012, 3, 15), 38024],
          [new Date(2012, 3, 16), 38108],
          [new Date(2012, 3, 17), 38229],
          [new Date(2013, 1, 4), 38177],
          [new Date(2013, 1, 5), 38705],
          [new Date(2013, 1, 12), 38210],
          [new Date(2013, 1, 13), 38029],
          [new Date(2013, 1, 19), 38823],
          [new Date(2013, 1, 23), 38345],
          [new Date(2013, 1, 24), 38436],
          [new Date(2013, 2, 10), 38447],
        ]}
        options={{
        title: 'Red Sox Attendance',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
      <br/>
      <Chart
        width={1000}
        height={200}
        chartType="Calendar"
        loader={<div>Loading Chart</div>}
        data={[
          [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
          [new Date(2013, 2, 4), 10],
          [new Date(2013, 2, 5), 3],
          [new Date(2013, 2, 7), -1],
          [new Date(2013, 2, 8), 2],
          [new Date(2013, 2, 12), -1],
          [new Date(2013, 2, 13), 1],
          [new Date(2013, 2, 15), 1],
          [new Date(2013, 2, 16), -4],
          [new Date(2013, 1, 4), 10],
          [new Date(2013, 1, 5), 3],
          [new Date(2013, 1, 7), -1],
          [new Date(2013, 1, 8), 2],
          [new Date(2013, 1, 12), -1],
          [new Date(2013, 1, 13), 1],
          [new Date(2013, 1, 15), 1],
          [new Date(2013, 1, 16), -4],
        ]}
        options={{
          title: 'Red Sox Attendance',
        }}
        rootProps={{ 'data-testid': '2' }}
      />
      </div>
    );
  }
}