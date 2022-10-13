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
    'width': '10%',
    'border-right-style': 'solid',
    'display': 'inline-flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'flex-wrap': 'wrap',
  },
  'y-axis-title': {
    'width': '50%',
    'transform': 'rotate(-90deg)',
    'text-align': 'center',
  },
  'break': {
    'flex-basis': '100%',
    'height': 0,
  },
  'tick': {
    'margin': 'auto',
  },
  'x-axis': {
    //'clear': 'both',
    'display': 'inline-flex', //do not change
    'flex-direction': 'row', //do not change
    'height': '10%', //do not change
    'width': '100%',
    'border-top-style': 'solid',
    'flex-wrap': 'wrap',
    'margin': '0',
  },
  'x-axis-labels': {
    'height': '40%',
  },
  'x-axis-title': {
    'width': '100%',
    'height': '50%',
  }

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
  yAxisTitle.text(options['axis']['y-axis']['title']);
  yAxis.append(yAxisTitle);
  let lineBreak = $("<div></div>");
  lineBreak.addClass('break');
  yAxis.append(lineBreak);
  let interval = options['axis']['y-axis']['tick-intervals']
  let maxTick = Math.ceil(max / interval) * 10;

  for (let i = maxTick; i >= 1; i -= interval) {
    let newTick = $("<div></div>");
    //newTick.css('height', (interval) / maxTick * 100) + '%')
    newTick.addClass('tick');
    newTick.append(`<p>${i}</p>`)
    yAxis.append(newTick);
  }

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

  let xAsixTitle = $("<h2></h2>");
  xAsixTitle.addClass('x-axis-title');
  xAsixTitle.text(options['axis']['x-axis']['title']);
  xAxis.append(xAsixTitle);

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
  for (let className in options['styles']) {
    for (let key in options['styles'][className]) {
      $("." + className).css(options['styles'][className], options['styles'][className][key]);
    }
  }
  // Centers the chart
  $('.chart').css('margin-left', options['styles']['bar']['margin']);
  $('.y-axis').css('margin-bottom', options['styles']['bar']['margin']);

  // The below makes sure that the label widths match the bar widths
  $('.x-axis').css('width', options['styles']['chart']['width']);
  $('.x-axis').css('margin', options['styles']['bar']['margin']);

  // The below is to make the graphs start from the bottom
  $(".bar").css('margin-top', 'auto');

}