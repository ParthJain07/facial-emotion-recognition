import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Graph = () => {
  const data = {
    labels: ['Angry', 'Neutral', 'Happy', 'Fear', 'Surprise', 'Sad', 'Disgusted'],
    datasets: [
      {
        data: [100, 50, 500, 80, 120, 90, 70],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9900', '#99FF33', '#663399', '#FF3300'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9900', '#99FF33', '#663399', '#FF3300'],
      },
    ],
  };

    const options = {
        legend: {
          labels: {
            fontColor: 'white',
            
          },
        },
      };

    return <Doughnut data={data} options={options}/>;
};

export default Graph;
