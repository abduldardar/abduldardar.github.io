// Menu responsive minimal
document.addEventListener('click', function(e){
  // toggle buttons for three pages
  const toggles = [
    {btnId:'menuToggle', navId:'mainNav'},
    {btnId:'menuToggle2', navId:'mainNav2'},
    {btnId:'menuToggle3', navId:'mainNav3'}
  ];

  toggles.forEach(({btnId, navId}) => {
    const btn = document.getElementById(btnId);
    const nav = document.getElementById(navId);
    if(!btn || !nav) return;
    if(e.target === btn){
      nav.classList.toggle('show');
    }
  });

  // close nav when clicking outside on small screens
  if(window.innerWidth <= 820){
    toggles.forEach(({navId}) => {
      const nav = document.getElementById(navId);
      if(!nav) return;
      if(nav.classList.contains('show') && !nav.contains(e.target) && !e.target.classList.contains('menu-toggle')){
        nav.classList.remove('show');
      }
    });
  }
});

// close nav on resize to larger screens
window.addEventListener('resize', function(){
  if(window.innerWidth > 820){
    ['mainNav','mainNav2','mainNav3'].forEach(id=>{
      const n = document.getElementById(id);
      if(n) n.classList.remove('show');
    });
  }
});