import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import styled from 'styled-components';
// eslint-disable-next-line



const data = {
  labels: ['React', 'Node', 'Express', 'Javascript', 'CSS', 'HTML', 'PostgreSQL', 'Docker', 'Bootstrap', 'Python'],
  datasets: [
    {
      backgroundColor: '#d3e0ea',
      hoverBackgroundColor: '#1687a7',
      data: [80, 60, 60, 75, 85, 85, 65, 65, 70, 50]
    }
  ]
};

const  options = {
  responsive: true,
  scales: {
    xAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        },
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
      gridLines: {
        display: false
      },
      ticks: {
        fontSize: 25
      }
      }
    ]
  },

  legend: {
    display:false
  },
  animation: {
    duration: 1000,
    },
  plugins: {
    deferred: {
      xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
      yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
      delay: 500
    }
  }, 
  maintainAspectRatio: false
}

const ChartWrapper = styled.div`
  width: 40rem;
  height: 20rem;
  @media(max-width: 1028px) {
    width: 20rem;
    height: 10rem;
    }
`;
const SkillChart = () => {
  return (
    <ChartWrapper>
      <HorizontalBar data={data} width={100}
  height={50}options={options}/>
    </ChartWrapper>
  );
}
    
export default SkillChart;