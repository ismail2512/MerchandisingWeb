import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const OutOfStock = () => {
  const [options, setOptions] = useState({
    chart: {
      id: 'apexchart-example',
      toolbar: {
        show: false,
      },
    },
    colors: ['#9955EE'],
    grid: {
      show: false,
    },
    stroke: {
      curve: 'smooth',
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
      name: 'Out Of Stock',
      data: [60, 20, 50, 15, 50],
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

export default OutOfStock;
