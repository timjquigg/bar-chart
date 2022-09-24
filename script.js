const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addBar = function (data) {
  const max = Math.max(...data)
  for (const el of data) {
    let newDiv = $("<div></div>");
    newDiv.addClass("bar");
    newDiv.css("height", (el / max * 75) + "%");
    let newP = $("<p></p>");
    newP.text(el);
    newDiv.append(newP);
    $("#chart-frame").append(newDiv);
  }
}

$(function () {
  addBar(data);
});
