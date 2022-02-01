import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const ProbableLost = () => {
  const [options, setOptions] = useState({
    labels: ['Baja', 'Halawani', 'Riyadh Food', 'Abisco', 'Dr Schar'],
    chart: {
      id: 'apex chart',
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      y: {
        formatter: (value) => {
          return `${value} SR`;
        },
      },
    },
    //colors: ['#f50057', '#3f51b5', '#9955EE', '#2196f3', '#4dabf5'],
  });
  const [series, setSeries] = useState([1000, 6000, 500, 2000, 4000]);
  console.log(options);
  return (
    <>
      <Chart
        options={options}
        series={series}
        width={'100%'}
        height={415}
        type="donut"
      />
    </>
  );
};

export default ProbableLost;
