const formTag = document.getElementById("");
formTag.onsubmit =handleSubmit;

function handleSubmit(event){
    event.preventDefault();
    const formTag = event.target;
}