const container = document.querySelector(".container");
image = container.querySelector(".image");


function onDrag({movementX ,movementY}){
    let getStyle = window.getComputedStyle(container);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    container.style.left = `${left + movementX}px`;
    container.style.top = `${top + movementY}px`;
}

image.addEventListener('mousedown',function(){
    image.classList.add("active");
    image.addEventListener('mousemove',onDrag);

})

document.addEventListener('mouseup',function(){
    image.classList.remove("active");
    image.removeEventListener('mousemove',onDrag);

})