let navContent = document.querySelector('.nav-content');
const threeMenus = document.querySelectorAll('menu');

const navAnimate = function(e){
  if(e.target.className == 'click'){
    threeMenus.forEach(function(menu){
      menu.classList.add('make-overlay-fullscreen');
    })

    navContent.classList.remove('nav-slideback')
    navContent.classList.add('nav-slidein-fromtop');
  }

  if(e.target.className == 'close-menu'){
    threeMenus.forEach(function(menu){
      menu.classList.remove('make-overlay-fullscreen');
    })

    navContent.classList.add('nav-slideback')
    navContent.classList.remove('nav-slidein-fromtop');
  }
  }

window.addEventListener('click', navAnimate);

document.getElementById('projects-link-btn').addEventListener('click', function(){
  threeMenus.forEach(function(menu){
    menu.classList.remove('make-overlay-fullscreen');
  })

  navContent.classList.add('nav-slideback')
})

document.getElementById('contact-link-btn').addEventListener('click', function(){
  threeMenus.forEach(function(menu){
    menu.classList.remove('make-overlay-fullscreen');
  })

  navContent.classList.add('nav-slideback')
})







