const data = [1, 3, 2, 6, 8, 10];

const addBar = function (data) {
  for (let el of data) {
    $("#chart-frame").append($("<p></p>").text(el));
  }
}

$(function () {
  addBar(data);
});
