const defaultStyleOptions = {
  'chart-frame': {
    'display': 'flex',
    'flex-directin': 'column',
  },
  'bars-x-axis': {
    'display': 'block',
    'height': '100%',
    'width': '100%',
    'margin-left': '-0.2em',
    //'padding-left': '0.2em',
  },
  'chart': {
    'width': '100%',
    'height': '90%',
    'clear': 'right',
    'display': 'inline-flex', //do not change
    'flex-direction': 'row', //do not change
  },
  'bar': {
    'display': 'flex', //do not change
    'flex-direction': 'column', //do not change
  },
  'value': {
    'display': 'inline-block', //do not change
    'text-align': 'center', //do not change
    'width': 'auto', //do not change

  },
  'y-axis': {
    'height': '90%',
    'border-right-style': 'solid',
    'display': 'inline-flex',
    'flex-direction': 'column',
    'justify-content': 'center',
  },
  'y-axis-title': {
    'transform': 'rotate(-90deg)',
  },
  'tick': {
    'height': '10%',
  },
  'x-axis': {
    'clear': 'both',
    'display': 'inline-flex', //do not change
    'flex-direction': 'row', //do not change
    'height': '10%', //do not change
    'width': '100%',
    'border-top-style': 'solid',
  },
  'x-axis-labels': {
    'display': 'flex',
    'flex-direction': 'column',
  },

}

export const drawBarChart = function (data, options, element) {
  const dataLabels = (data.map(i => Object.keys(i)));
  const dataValues = (data.map(i => Object.values(i)));

  // Used to find the maximum bar height
  const max = Math.max(...dataValues);

  // Creates the container for the y-axis ticks & Title
  let yAxis = $("<div></div>");
  yAxis.addClass('y-axis')
  let yAxisTitle = $("<h2></h2>");
  yAxisTitle.addClass('y-axis-title');
  yAxisTitle.text('Age');
  yAxis.append(yAxisTitle);
  /*
    for (let i = 0; i <= 90; i += 10) {
      let newTick = $("<div></div>");
      newTick.addClass('tick');
      yAxis.append(newTick);
    }
  */
  // Creates container for the bars
  const graph = $('<div></div>');
  graph.addClass('chart');

  // Creates the bars and display values
  for (let el of dataValues) {
    let newDiv = $("<div></div>");
    newDiv.addClass("bar");
    newDiv.css('height', (el / max * 90) + "%");
    newDiv.css("width", (100 / dataValues.length) + "%");
    // Creates the value text display
    let newP = $("<p></p>");
    newP.addClass("value");
    newP.text(el);
    newDiv.append(newP);
    // Adds the bar and contents to the graph
    graph.append(newDiv);
  }

  // Creates the container for the x-axis labels
  let xAxis = $("<div></div>");
  xAxis.addClass("x-axis");

  // Creates each bar label in the x-axis
  for (let el of dataLabels) {
    let newDiv = $("<div></div>");
    newDiv.addClass('x-axis-labels');
    newDiv.css("width", (100 / dataValues.length) + "%");
    // Creates the text for the labels
    let newP = $("<p></p>");
    newP.text(el);
    newDiv.append(newP);
    // Adds the label to the x-axis labels container
    xAxis.append(newDiv);
  }

  let barsAndXAxis = $("<div></div>");
  barsAndXAxis.addClass('bars-x-axis');
  barsAndXAxis.append(graph);
  barsAndXAxis.append(xAxis);

  // Adds the styling class to the chart frame
  $('#' + element).addClass('chart-frame');

  // Adds the graph and the x-axis to the chart frame
  $('#' + element).append(yAxis);
  $('#' + element).append(barsAndXAxis);

  // Set default CSS styling
  for (let className in defaultStyleOptions) {
    for (let key in defaultStyleOptions[className]) {
      $("." + className).css(defaultStyleOptions[className], defaultStyleOptions[className][key]);
    }
  }

  // Change styling based on options parameter
  for (let className in options) {
    for (let key in options[className]) {
      $("." + className).css(options[className], options[className][key]);
    }
  }
  // Centers the chart
  $('.chart').css('margin-left', options['bar']['margin']);

  // The below makes sure that the label widths match the bar widths
  $('.x-axis').css('width', options['chart']['width']);
  $('.x-axis').css('margin', options['bar']['margin']);

  // The below is to make the graphs start from the bottom
  $(".bar").css('margin-top', 'auto');

}