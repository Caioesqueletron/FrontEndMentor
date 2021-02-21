let btnToggle = document.querySelector('.btn-Toggle');
btnToggle.addEventListener('click',()=>{
    (btnToggle.checked) ? document.body.classList.add('dark') : document.body.classList.remove('dark')
})