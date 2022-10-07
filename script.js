const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 13, 25, 8, 16, 17, 21];

const chartFrame = "chart-frame";
const styleOptions = {
  'chart': {
    'height': '400',
    'width': '600'
  },
  'bar': {
    'background-color': 'blue',
    'margin': 'auto 0.25em 0.25em',
    'justify-content': 'center'
  },
  'label': {
    'color': 'orange',
  }
}

const drawBarChart = function (data, options, element) {

  const max = Math.max(...data)

  //Format chart
  for (let key in options['chart']) {
    $('#' + element).css(options['chart'], options['bar'][key]);
  };
  //Create a bar:
  for (const el of data) {
    //Create new div for bar
    let newDiv = $("<div></div>");
    //Format new div:
    newDiv.addClass("bar");
    newDiv.css("height", (el / max * 75) + "%");
    newDiv.css("width", (100 / data.length) + "%");
    for (let key in options['bar']) {
      newDiv.css(options['bar'], options['bar'][key]);
    };
    //Create new p element as bar label:
    let newP = $("<p></p>");
    newP.text(el);
    for (let key in options['label']) {
      newP.css(options['label'], options['label'][key]);
    }
    newDiv.append(newP);
    $('#' + element).append(newDiv);
  }
}

$(function () {
  drawBarChart(data, styleOptions, chartFrame);
});
