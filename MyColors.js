const buttons = document.querySelectorAll('.buttons')
const body = document.querySelector('body')
document.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if (e.target.id === "red") {
        body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
        body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
        body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
        body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "pink") {
        body.style.backgroundColor = e.target.id;
    }
})