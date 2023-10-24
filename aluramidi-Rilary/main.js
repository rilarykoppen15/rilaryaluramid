    function tocasom (idElementoAudio) {
        document.querySelector(idElementoAudio)-play();
    }

   const listaDeTeclas  = document .querySelectorAlI (' .tecla');

   for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick - function () {
    tocasom (idAudio);
    }



   }