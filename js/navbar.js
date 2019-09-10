var html = '  <nav class="blue darken-4" role="navigation">\
<div class="nav-wrapper container"><a id="logo-container" href="index.html" class="brand-logo"><img src="UCS1.svg" height="auto" width="100">\
</a>\
  <ul class="right hide-on-med-and-down">\
    <li><a href="index.html">Home</a></li>\
    <li><a href="games.html">Games</a></li>\
  </ul>\
  \
  <ul id="nav-mobile" class="sidenav">\
    <li><a href="index.html">Home</a></li>\
    <li><a href="games.html">Games</a></li>\
  </ul>\
  <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>\
</div>\
</nav>';

document.getElementById('nav').innerHTML = html;