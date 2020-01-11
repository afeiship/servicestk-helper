var url = location.href;
var counter = 0;
var limit = 20; // times:
var every = 20; // s

/**  manual running */

function autoinject() {
  if (!url.includes("/labor/approvalflat")) return;
  if (window.__STOP__) return;
  var el = document.querySelector('[ng-click="gridSelectAll()"]');
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
    }, 1000);
  }, 1000);
}

var timer = setInterval(() => {
  console.log("准备刷新啦, counter:", counter);
  counter++;
  autoinject();
  counter === limit && clearInterval(timer);
}, every * 1000);
