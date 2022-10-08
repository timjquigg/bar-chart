const defaultStyleOptions = {
  'chart-frame': {
    'display': 'inline-flex',
    'flex-direction': 'column'
  },
  'chart': {
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
    'margin': '0.25em', //do not change
    'width': 'auto', //do not change
    'padding': '0em', //do not change
  },
  'y-axis': {
    'height': '80%',
    'width': '3px',
    'background-color': 'black',
    'margin-top': 'auto'
  },
  'x-axis': {
    'display': 'inline-flex', //do not change
    'flex-direction': 'row', //do not change
    'height': '2em', //do not change
    'width': '100%',
    'border-top-style': 'solid'
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

  // Creates container for the bars
  const graph = $('<div></div>');
  graph.addClass('chart');
  const yAxis = $('<div></div>');
  yAxis.addClass('y-axis');
  graph.append(yAxis);

  // Creates the bars and display values
  for (let el of dataValues) {
    let newDiv = $("<div></div>");
    newDiv.addClass("bar");
    newDiv.css('height', (el / max * 75) + "%");
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
  let labels = $("<div></div>");
  labels.addClass("x-axis");

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
    labels.append(newDiv);
  }

  // Adds the styling class to the chart frame
  $('#' + element).addClass('chart-frame');

  // Adds the graph and the x-axis to the chart frame
  $('#' + element).append(graph);
  $('#' + element).append(labels);


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

  // The below makes sure that the label widths match the bar widths
  $('.x-axis').css('width', options['chart']['width']);
  $('.x-asix').css('margin', options['bar']['margin']);

  // The below is to make the graphs start from the bottom
  $(".bar").css('margin-top', 'auto');
}