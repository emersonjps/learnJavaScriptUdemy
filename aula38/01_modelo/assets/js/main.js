const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);


// Colocar o fundo com o a cor principal e a cor da fonte branca.

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
}