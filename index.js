const btnBebidas = document.getElementById('btnBebidas');
const btnPatacones =document.getElementById('btnPatacones');
const btnArepa = document.getElementById('btnArepa');
const btnPlatos = document.getElementById('btnPlatos');
const cartaBebidas = document.getElementById('cartaBebidas');
const cartaArepa = document.getElementById('cartaArepa');
const cartaPatacones = document.getElementById('cartaPatacones');
const cartaPlatos = document.getElementById('cartaPlatos');


//AREPAS
btnArepa.addEventListener('click', () => {
    // Mostrar las cartas de Arepa y ocultar las demás
    const cartas = document.getElementsByClassName('card');
    for (let i = 0; i < cartas.length; i++) {
      if (cartas[i].id === 'cartaArepa') {
        cartas[i].style.display = 'block';
      } else {
        cartas[i].style.display = 'none';
      }
    }
  });
  btnArepa.addEventListener('click', () => {
    // Mostrar las cartas de Arepa y ocultar las demás
    const title =  document.getElementsByClassName('title-sub');
    for (let i = 0; i < title.length; i++) {
      if (title[i].id === 'cartaArepa') {
        title[i].style.display = 'block';
      } else {
        title[i].style.display = 'none';
      }
    }
  });

  //PLATOS
  btnPlatos.addEventListener('click', () => {
    const cartas = document.getElementsByClassName('card');
    for (let i = 0; i < cartas.length; i++) {
      if (cartas[i].id === 'cartaPlatos') {
        cartas[i].style.display = 'block';
      } else {
        cartas[i].style.display = 'none';
      }
    }
  });

  btnPlatos.addEventListener('click', () => {
    // Mostrar las cartas de Arepa y ocultar las demás
    const title =  document.getElementsByClassName('title-sub');
    for (let i = 0; i < title.length; i++) {
      if (title[i].id === 'cartaPlatos') {
        title[i].style.display = 'block';
      } else {
        title[i].style.display = 'none';
      }
    }
  });

  //BEBIDAS
  btnBebidas.addEventListener('click', () => {
    const bebida = document.getElementsByClassName('card');
    for (let i = 0; i < bebida.length; i++) {
      if (bebida[i].id === 'cartaBebidas') {
        bebida[i].style.display = 'block';
      } else {
        bebida[i].style.display = 'none';
      }
    }
  });

  btnBebidas.addEventListener('click', () => {
    // Mostrar las cartas de Arepa y ocultar las demás
    const title =  document.getElementsByClassName('title-sub');
    for (let i = 0; i < title.length; i++) {
      if (title[i].id === 'cartaBebidas') {
        title[i].style.display = 'block';
      } else {
        title[i].style.display = 'none';
      }
    }
  });

  //PATACONES
  btnPatacones.addEventListener('click', () => {
    const patacon = document.getElementsByClassName('card');
    for (let i = 0; i < patacon.length; i++) {
      if (patacon[i].id === 'cartaPatacones') {
        patacon[i].style.display = 'block';
      } else {
        patacon[i].style.display = 'none';
      }
    }
  });

  btnPatacones.addEventListener('click', () => {
    // Mostrar las cartas de Arepa y ocultar las demás
    const title =  document.getElementsByClassName('title-sub');
    for (let i = 0; i < title.length; i++) {
      if (title[i].id === 'cartaPatacones') {
        title[i].style.display = 'block';
      } else {
        title[i].style.display = 'none';
      }
    }
  });


 

  
  
  
  