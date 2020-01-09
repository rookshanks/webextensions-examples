function addSitesToTable(n) {
    var table = document.getElementById("badSites")
    for (let i = 0; i < n; i++) {
      var row = table.insertRow(i);
      row.id = "row".concat(i.toString());
      var textCell = row.insertCell(0);
      var buttonCell = row.insertCell(1);
      var buttonNode = document.createElement("BUTTON")
      var textNode = document.createTextNode("here's text ".concat(i.toString()))
      buttonNode.type = "button".concat(i.toString());
      buttonNode.className = "btn";
      buttonNode.textContent = 'button!';
      buttonCell.appendChild(buttonNode);
      textCell.appendChild(textNode);
      document.getElementById("row" + i).addEventListener("click", function (event) {
        document.getElementById("row" + i).remove();
      });
    }
  }

document.addEventListener('DOMContentLoaded', addSitesToTable(10));


