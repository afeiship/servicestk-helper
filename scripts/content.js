$(document).ready(function() {
  var el = document.querySelector('[ng-click="gridSelectAll()"]');
  el.disabled = false;
  el.innerText = "SelectAll-Hacked!";
  el.click();
  console.log('haced!');
});
