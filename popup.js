 document.querySelector('div').addEventListener('click', function(){
   chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
     var activeTab = tabs[0];
     chrome.tabs.sendMessage(activeTab.id, {command: "changeLegit"});

 });

});
