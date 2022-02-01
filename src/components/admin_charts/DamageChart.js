import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const DamageChart = () => {
  const [options, setOptions] = useState({
    chart: {
      //type: 'bar',
      id: 'apexchart-example',
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
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
      name: 'Damage',
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
        type="area"
      />
    </div>
  );
};

export default DamageChart;
