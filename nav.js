function openMenu(){
  var a = document.getElementById('close-menu');
  var b = document.getElementById('menuItems');
  var c = document.getElementById('open-menu');
  a.style.display = 'block';
  b.style.height = '260px';
  c.style.border = '2px solid #fff';
}
function closeMenu(){
  var a = document.getElementById('open-menu');
  var b = document.getElementById('close-menu');
  var c = document.getElementById('menuItems');
  var d = document.getElementById('open-menu');
  a.style.display = 'block';
  b.style.display = 'none';
  c.style.height = '0px';
  d.style.border = '0px solid #fff';
}