window.onload = startTime

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = "current time: " + h + ":" + m + ":" + s;
  let t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
  const el = document.getElementsByClassName("checkbox");
  let i = el.length;

  for (let i = 0; i < el.length; i++) {
    (index => {
      el[index].addEventListener("click", save);
    })(i);
  }

  function save() {
    for (i = 0; i < el.length; i++) {
      localStorage.setItem(el[i].value, el[i].checked);
    }
    console.log(localStorage);
  }

  //for loading
  for (i = 0; i < el.length; i++) {
    el[i].checked =
      localStorage.getItem(el[i].value) === "true" ? true : false;
  }
}
else {
  console.alert("localStorage is not detected. Checked boxes will not be saved to the database. Open this is a browser that does support localStorage.")
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful :)
      registration.update()
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err)
    })
  })
}
