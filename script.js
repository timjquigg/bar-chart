const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chartFrame = "chart-frame";

const drawBarChart = function (data, options, element) {
  const max = Math.max(...data)
  for (const el of data) {
    let newDiv = $("<div></div>");
    newDiv.addClass("bar");
    newDiv.css("height", (el / max * 75) + "%");
    let newP = $("<p></p>");
    newP.text(el);
    newDiv.append(newP);
    $('#' + element).append(newDiv);
  }
}

$(function () {
  drawBarChart(data, null, chartFrame);
});
