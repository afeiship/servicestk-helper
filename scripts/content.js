console.log("content ready!!");

$(document).ready(function() {
  console.log($("#idSIButton9"));
  $("#idSIButton9").prop("disabled", true);
  $("#idSIButton9").css("background", "#f00");
  console.info("[log]: has modifyed. 🐶");

  // document.querySelector('[ng-disabled="list.length>2"]')
  // document.querySelector('[ng-disabled=gridSelectAllDisabled]')
});
