$(document).ready(function() {
  var el = document.querySelector('[ng-click="gridSelectAll()"]');

  if (window.__STOP__) return;

  // 1. 全选，删除 disabled 状态
  el.disabled = false;

  // 2. 点击全选这个btn
  el.click();
  setTimeout(() => {
    // 3. 选择 value = 2的这个选择项
    var aprovedBtn = document.querySelector('[ng-click="ApprovalEntries()"]');
    aprovedBtn.innerText = "ApprovalEntries-hacked!";
    aprovedBtn.click();

    setTimeout(() => {
      var appReason = document.querySelector("#modLARELateApprovalReason");
      var okBtn = document.querySelector('[ng-click="ok()"]');
      appReason.value = "2";
      appReason.dispatchEvent(new Event("change"));
      appReason.appReason;
      okBtn.click();

      setTimeout(() => {
        console.log("准备刷新啦!");
        location.reload();
      }, 5 * 1000);
    }, 1000);
  }, 1000);
});
