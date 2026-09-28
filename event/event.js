// Reads ?id=&t=&v= from the URL, fills in the page, and tries to hand off
// to the installed app via its famspot:// custom URL scheme. If the app
// isn't installed, the OS just ignores that redirect and the visitor stays
// on this page, which shows a "Get the app" fallback link.
(function () {
  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  var title = params.get('t') || 'A Famspot event';
  var venue = params.get('v') || '';

  document.getElementById('page-title').textContent = title + ' — Famspot';
  document.getElementById('event-title').textContent = title;
  document.getElementById('event-meta').textContent = venue;
  document.getElementById('og-title').setAttribute('content', title);
  document.getElementById('og-description').setAttribute('content', venue || 'Shared from Famspot!');

  var deepLink = id ? 'famspot://event/' + encodeURIComponent(id) : 'famspot://';
  var openBtn = document.getElementById('open-app-btn');
  openBtn.setAttribute('href', deepLink);

  // Best-effort auto-redirect. Browsers only honor this if the app is
  // actually installed and registered for the famspot:// scheme; otherwise
  // nothing visible happens and the visitor just sees this page.
  window.location.href = deepLink;
})();
