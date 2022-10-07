import { drawBarChart } from "./draw-bar-chart.js";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 13, 25, 8, 16, 17, 21];

const chartFrame = "chart-frame";

const styleOptions = {
  'chart': {
    'border': '3px solid',
    'padding': '1em',
    'height': '400px',
    'width': '600px'
  },
  'bar': {
    'background-color': 'rgb(34, 120, 178)', //Change background color
    'margin': '0.25em', //Change bar spacing
    'justify-content': 'center' //Flex-start - Top, Flex-end - Bottom, center - center
  },
  'label': {
    'color': 'orange',
  }
}

$(function () {
  drawBarChart(data, styleOptions, chartFrame);
});