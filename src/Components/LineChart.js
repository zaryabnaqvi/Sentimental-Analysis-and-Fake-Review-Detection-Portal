import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import Chart from 'react-apexcharts';

const pieChartConfig = {
  type: 'pie',
  height: 380,
  series: [34, 23, 43],
  options: {
    labels: ['Postive', 'Negative', 'Neutral'],
    colors: ['#3ae3a6', '#38a169', '#3182ce'],
    legend: {
      labels: {
        colors: '#fff',
        useSeriesColors: false,
      },
    },
    tooltip: {
      theme: 'dark',
    },
  },
};

export default function PieChart() {
  return (
    <Card className="bg-[#323262] text-cyan-50">
      <CardBody className="px-2 pb-0">
        <Typography
          variant="h5"
          className="ml-4 self-center sm:self-start font-semibold text-cyan-50"
        >
          Sentiment From Data
        </Typography>
        <Chart {...pieChartConfig} />
      </CardBody>
    </Card>
  );
}
