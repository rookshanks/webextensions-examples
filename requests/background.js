// Initialize the list of blocked hosts
let blockedHosts = ["example.com", "example.org"];

// Set the default list on installation.
browser.runtime.onInstalled.addListener(details => {
  browser.storage.local.set({
    blockedHosts: blockedHosts
  });
});

// Get the stored list
browser.storage.local.get(data => {
  if (data.blockedHosts) {
    blockedHosts = data.blockedHosts;
  }
});

// Listen for changes in the blocked list
browser.storage.onChanged.addListener(changeData => {
  blockedHosts = changeData.blockedHosts.newValue;
});


var pattern = "<all_urls>";

function redirect(requestDetails) {
  const url = new URL(requestDetails.url)
  if (blockedHosts.indexOf(url.hostname) != -1) {
    let dog = "https://rookshanks.github.io/slow-down/?".concat("time=10&redirect=", requestDetails.url)
    return {
      redirectUrl: dog
    };
  } else {
    return {
      redirectUrl: url
    }
  }
}

function handleClick() {
  browser.runtime.openOptionsPage();
}

browser.browserAction.onClicked.addListener(handleClick);


browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["main_frame"]},
  ["blocking"]
);