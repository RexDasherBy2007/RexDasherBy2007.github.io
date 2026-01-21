const aceptar =document.querySelector('#aceptar');

aceptar.addEventListener('click',function () {
    alert('Sabía que dirías que siii💞💞💞')
});

const rechazar = document.querySelector('#rechazar');

rechazar.addEventListener('mouseover',function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    rechazar.style.setProperty('top', randomY+'%');
    rechazar.style.setProperty('left', randomX+'%');
    rechazar.style.setProperty('transform',`translate(-${randomX}%, -${randomY}%)`);
    
})