// observe innerHTML changed on element
function onInnerHTMLChanged(selector, callback, initial=false) {
  const observers = [];
  for (const target of document.querySelectorAll(selector)) {
    const observer = new MutationObserver(mutationList => {
      for (const mutation of mutationList) {
        callback(target);
      }
    });
    var config = {
      characterData: false,
      attributes: false,
      childList: true,
      subtree: false 
    };
    observer.observe(target, config);
    observers.push(observer);
    if (initial) {
      callback(target);
    }
  }
}

// Disable next button when clicked
const btn = document.querySelector('button.codio-button-type-next');
btn.addEventListener('click', event => {
  if (btn.getAttribute('disabled')) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  } else {
    btn.setAttribute('disabled', 'disabled');
    btn.setAttribute('aria-disabled', 'true');
  }
});

// Re-set next button when markdown changes
onInnerHTMLChanged('.rendered-markdown', () => {
  btn.removeAttribute('disabled');
  btn.setAttribute('aria-disabled', 'false');
});

console.log('guide.js loaded');