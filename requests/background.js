var pattern = "<all_urls>";

function redirect(requestDetails) {
  let dog = "https://rookshanks.github.io/slow-down/?".concat("time=10&redirect=", requestDetails.url)
  return {
    redirectUrl: dog
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["main_frame"]},
  ["blocking"]
);