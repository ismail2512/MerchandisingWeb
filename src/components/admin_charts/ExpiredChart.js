import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const ExpiredChart = () => {
  const [options, setOptions] = useState({
    chart: {
      //type: 'bar',
      id: 'apexchart-example',
      toolbar: {
        show: false,
      },
    },
    colors: ['#F9A602'],
    grid: {
      show: false,
    },
    xaxis: {
      categories: ['Baja', 'Halawani', 'Riyadh Food', 'Abisco', 'Dr Schar'],
      tooltip: {
        enabled: false,
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'Expired',
      data: [10, 20, 30, 15, 50],
    },
  ]);
  return (
    <div>
      <Chart
        options={options}
        series={series}
        width={'100%'}
        height={150}
        type="line"
      />
    </div>
  );
};

export default ExpiredChart;
