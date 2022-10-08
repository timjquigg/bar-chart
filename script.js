import { drawBarChart } from "./draw-bar-chart.js";

const data = [
  { John: 60 },
  { Deb: 59 },
  { Tim: 38 },
  { Chelsea: 37 },
  { Kieran: 3 }
]

const chartFrame = "chart-frame";

const styleOptions = {
  'chart-frame': {
    'border': '3px solid',
    'padding': '1em',
  },
  'chart': {
    'height': '30vh',
    'width': '60vh'
  },
  'bar': {
    'background-color': 'rgb(34, 120, 178)', //Change background color
    'margin': '0.25em', //Change bar spacing
    'justify-content': 'center' //Flex-start - Top, Flex-end - Bottom, center - center
  },
  'value': {
    'color': 'orange',
  },
  'x-axis-labels': {
    'color': 'orange'
  }
}

$(function () {
  drawBarChart(data, styleOptions, chartFrame);
});