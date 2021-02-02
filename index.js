document.getElementById('js_btn').onclick = function() {
  let js_menu = document.getElementById('js_menu');
  let js_btn = document.getElementById('js_btn');

  if(js_btn.getAttribute('aria-expanded') == 'false') {
    js_btn.setAttribute('aria-expanded', 'true');
    js_menu.setAttribute('aria-hidden', 'false');

  } else if(js_btn.getAttribute('aria-expanded') == 'true') {
    js_btn.setAttribute('aria-expanded', 'false');
    js_menu.setAttribute('aria-hidden', 'true');
  }
};