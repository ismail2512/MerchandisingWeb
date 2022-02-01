import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const OSA = () => {
  const [options, setOptions] = useState({
    chart: {
      //type: 'bar',
      id: 'apexchart-example',
      toolbar: {
        show: false,
      },
    },
    //colors: ['#6495ED'],
    colors: ['#f50057'],
    grid: {
      show: true,
    },
    plotOptions: {
      bar: {
        columnWidth: 35,
        dataLabels: {
          position: 'top',
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#333'],
        },
        offsetX: 30,
        formatter: (val) => {
          return `${val}%`;
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + '%';
        },
      },
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
      name: 'OSA',
      data: ['93', '90', '69', '89', '70'],
    },
  ]);
  return (
    <div>
      <Chart
        options={options}
        series={series}
        width={'100%'}
        height={400}
        type="bar"
      />
    </div>
  );
};

export default OSA;
