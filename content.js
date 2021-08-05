var htmlString = document.body.innerText;


if (document.body.innerHTML.includes("Unity")){
  chrome.storage.sync.set({ unity : true });
} else {
  chrome.storage.sync.set({ unity : false });
}
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});


let llist;

fetch('https://files.zhehaizhang.com/keyword-blocker/blacklist.json').then(function(response){
    return response.json();
}).then(function(obj) {
    llist = obj;
    for (const link in llist) {
      if (location.href.includes(link) && location.href !== ("https://"+link+"/"+llist[link])) {
        location.replace("https://"+link+"/"+llist[link]);
      }

    }
}).catch(function(error){
    //console.log(error);
    console.error()
});

