const data = [{ a: 1 }, { b: 3 }, { c: 2 }, { d: 6 }, { e: 8 }, { f: 10 }];

const addBar = function (data) {
  for (const el of data) {
    let newElement = $("<p></p>");
    newElement.text(Object.keys(el));
    newElement.attr("id", Object.keys(el));
    newElement.css("height", Object.values(el) + "em");

    $("#chart-frame").append(newElement);
  }
}

$(function () {
  addBar(data);
});
