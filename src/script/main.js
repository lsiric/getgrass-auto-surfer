(async () => {
  const helpers = await import(`./helpers.js`);

  if (shouldOpenNewWindow()) {
    setInterval(() => {
      const url = generateGoogleUrl();
      window.open(url, "_blank");
    }, 90000);
  } else if (shouldClickGoogleResult()) {
    try {   
      clickGoogleResult(); 
    } catch (error) {
      console.log(error);
    }
  } else {
    // else close window
    const closeTimer = setInterval(() => {
      clearInterval(closeTimer);
      window.close();
    }, 89000);
  }

  function clickGoogleResult() {
    var clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: false,
    });
    var randomLink = document.getElementsByTagName("h3")[2];
    randomLink.dispatchEvent(clickEvent);
  }

  function generateGoogleUrl() {
    const words = helpers.wordList;
    const word1 = words[Math.floor(Math.random() * words.length)];
    const word2 = words[Math.floor(Math.random() * words.length)];
    const term = `${word1} ${word2}`;
    const googleUrl = `http://google.hr/search?q=${encodeURI(term)}`;
    return googleUrl;
  }

  function shouldOpenNewWindow() {
    return document.URL.indexOf("sibenik.in") > -1;
  }

  function shouldClickGoogleResult() {
    return document.URL.indexOf(".google.") > -1;
  }
})();
