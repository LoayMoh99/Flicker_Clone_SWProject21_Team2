export function showEdit(){
    let modal=document.getElementsByClassName('modal-container');
    modal[0].classList.add('showModal');
}

export function closeEdit(){
    let modal=document.getElementsByClassName('modal-container');
    modal[0].classList.remove('showModal');
}