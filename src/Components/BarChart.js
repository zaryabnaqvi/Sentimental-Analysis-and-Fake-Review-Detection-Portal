import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import Chart from 'react-apexcharts';

const barChartConfig = {
    type: 'bar',
    height: 380,
    series: [
      {
        name: 'Series 1',
        data: [44, 23],
      },
    ],
    options: {
      chart: {
        background: 'transparent',
        foreColor: '#D8D8D8',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#D8D8D8'],
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Real', 'Fake'],
        title: {
          text: 'Types',
          style: {
            color: '#D8D8D8',
          },
        },
        labels: {
          style: {
            colors: '#D8D8D8',
          },
        },
      },
      yaxis: {
        title: {
          text: 'Reviews',
          style: {
            color: '#D8D8D8',
          },
        },
        labels: {
          style: {
            colors: '#D8D8D8',
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: 'dark',
        y: {
          formatter: function (val) {
            return val + ' Reviews';
          },
        },
      },
    },
  };
  
export default function BarChart() {
  return (
    <Card className="bg-[#323262] text-cyan-50">
      <CardBody className="px-2 pb-0">
        <Typography
          variant="h5"
          className="ml-4 self-center sm:self-start font-semibold text-cyan-50"
        >
          Authenicity from Data
        </Typography>
        <Chart {...barChartConfig} />
      </CardBody>
    </Card>
  );
}

