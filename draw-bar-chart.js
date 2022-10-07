const defaultStyleOptions = {
  'chart': {
    'display': 'inline-flex', //do not change
    'flex-direction': 'row', //do not change
  },
  'bar': {
    'display': 'flex', //do not change
    'flex-direction': 'column', //do not change
  },
  'label': {
    'display': 'inline-block', //do not change
    'text-align': 'center', //do not change
    'margin': '0.25em', //do not change
    'width': 'auto', //do not change
    'padding': '0em', //do not change
  }
}

export const drawBarChart = function (data, options, element) {

  // Used to find the maximum bar height
  const max = Math.max(...data);

  // Creates a new bar and adds the text label
  for (const el of data) {
    let newDiv = $("<div></div>");
    newDiv.addClass("bar");
    newDiv.css('height', (el / max * 75) + "%");
    newDiv.css("width", (100 / data.length) + "%");
    // Create the new label
    let newP = $("<p></p>");
    newP.addClass("label");
    newP.text(el);

    newDiv.append(newP);
    $('#' + element).append(newDiv);
  }

  // Set default CSS styling
  for (let key in defaultStyleOptions['chart']) {
    $('#' + element).css(defaultStyleOptions['chart'], defaultStyleOptions['chart'][key]);
  }

  for (let key in defaultStyleOptions['bar']) {
    $(".bar").css(defaultStyleOptions['bar'], defaultStyleOptions['bar'][key])
  }

  for (let key in defaultStyleOptions['label']) {
    $(".label").css(defaultStyleOptions['label'], defaultStyleOptions['label'][key]);
  }

  // Change styling based on options parameter
  for (let key in options['chart']) {
    $('#' + element).css(options['chart'], options['chart'][key]);
  }

  for (let key in options['bar']) {
    $(".bar").css(options['bar'], options['bar'][key])
  }

  for (let key in options['label']) {
    $(".label").css(options['label'], options['label'][key]);
  }

  $(".bar").css('margin-top', 'auto');
}