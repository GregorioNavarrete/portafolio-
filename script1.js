function cambiarTema(tema) {
  switch (tema) {
    case "dark":
      document.getElementById("btn-dark").style.display = "none";
      document.getElementById("btn-light").style.display = "block";
      document.getElementById("btn-darkIngles").style.display = "none";//coordinar
      document.getElementById("btn-lightIngles").style.display = "block";//coorinar
      document.documentElement.setAttribute("data-theme", "dark");      
      break;
    default:
      document.getElementById("btn-dark").style.display = "block";
      document.getElementById("btn-light").style.display = "none";
      document.getElementById("btn-darkIngles").style.display = "block";//coordinar
      document.getElementById("btn-lightIngles").style.display = "none";//coordinar
      document.documentElement.setAttribute("data-theme", "light");      
      break;
  }
}
function cambiarTemaIngles(tema) {
  switch (tema) {
    case "dark":
      document.getElementById("btn-darkIngles").style.display = "none";
      document.getElementById("btn-lightIngles").style.display = "block";
      document.getElementById("btn-dark").style.display = "none";//coordinar
      document.getElementById("btn-light").style.display = "block";//coordinar
      document.documentElement.setAttribute("data-theme", "dark");      
      break;
    default:
      document.getElementById("btn-darkIngles").style.display = "block";
      document.getElementById("btn-lightIngles").style.display = "none";
      document.getElementById("btn-dark").style.display = "block";//coordinar
      document.getElementById("btn-light").style.display = "none";//coordinar
      document.documentElement.setAttribute("data-theme", "light");      
      break;
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const darkModeBtn = document.getElementById('darkModeBtn');
  const darkModeBtn2 = document.getElementById('darkModeBtn2');

  const langBtn = document.getElementById('langBtn');
  const langBtn2 = document.getElementById('langBtn2');

  const spanishSection = document.querySelector('.Español');
  const englishSection = document.querySelector('.ingles');

  const body = document.getElementsByTagName('body');//nose si funciona
  const projects = document.querySelector('.projects');
  const projects2 = document.querySelector('.projects2');

  let darkModeEnabled = false;
  let darkModeEnabled2 = false;

//si quiero agregar mas componentes al modo oscuro, tiene que cumplica la mismca coordinacion que tiene "projects" y "projects2", tiene q estar coodinados
  // darkModeBtn.addEventListener('click', function() {
  //     darkModeEnabled = !darkModeEnabled;
  //     if (darkModeEnabled) {
  //         document.body.classList.add('dark-mode-body');
  //         projects.classList.add('dark-mode-projects');
  //         projects2.classList.add('dark-mode-projects');//para que esten cordinados los componentes
  //         //podria agregar la clase a otro componete, para q cambie de color !
  //     } else {
  //         document.body.classList.remove('dark-mode-body');
  //         projects.classList.remove('dark-mode-projects');
  //         projects2.classList.remove('dark-mode-projects');//para que esten cordinados los componesntes
  //     }
  // });

  // darkModeBtn2.addEventListener('click', function() {
  //     darkModeEnabled2 = !darkModeEnabled2;
  //     if (darkModeEnabled2) {
  //         document.body.classList.add('dark-mode-body');
  //         projects2.classList.add('dark-mode-projects');
  //         projects.classList.add('dark-mode-projects');//para que esten cordinados los componentes
  //         //podria agregar la clase a otro componete, para q cambie de color !
  //     } else {
  //         document.body.classList.remove('dark-mode-body');
  //         projects2.classList.remove('dark-mode-projects');
  //         projects.classList.remove('dark-mode-projects');//para que esten cordinados los componentes 
  //     }
  // });
  langBtn.addEventListener('click',toggleLanguage );
  function toggleLanguage(){
      spanishSection.classList.toggle('inactive');
      englishSection.classList.toggle('inactive');
  }
  langBtn2.addEventListener('click',toggleLanguage );
  function toggleLanguage(){
      spanishSection.classList.toggle('inactive');
      englishSection.classList.toggle('inactive');
  }

});
