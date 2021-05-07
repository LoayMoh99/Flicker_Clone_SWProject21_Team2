export function toggleNav(){
    let menuIcon=document.getElementsByClassName('menuIcon');
    let navShow=document.getElementsByClassName('hiddenHeaderList');
    navShow[0].classList.toggle('showNav');
    menuIcon[0].classList.toggle('shownSideNav')
}

export function toogleMobileSearchBox(){
    let logo=document.getElementsByClassName('flickLogoName');
    let notification=document.getElementsByClassName('flaticon-bell');
    let searchIcon=document.getElementsByClassName('coreSearch');
    let endSearchIcon=document.getElementsByClassName('flaticon-close');
    let BiggerSearch=document.getElementsByClassName('biggerBox');
    let searchDivSive=document.getElementsByClassName('searchNotifivationUpload');
    let profilePic=document.getElementsByClassName('sideProfilePic');
    logo[0].classList.toggle('hiddenIconSearch');
    notification[0].classList.toggle('hiddenIconSearch');
    searchIcon[0].classList.toggle('hiddenIconSearch');
    searchDivSive[0].classList.toggle('adjSearchSize');
    BiggerSearch[0].classList.toggle('adjSearchinput');
    endSearchIcon[0].classList.toggle('hiddenIconSearch');
    BiggerSearch[0].classList.toggle('hiddenIconSearch');
    profilePic[0].classList.toggle('hiddenIconSearch');
}

export function readjustHeader(){
    let logo=document.getElementsByClassName('flickLogoName');
    logo[0].classList.remove('hiddenIconSearch');
    let BiggerSearch=document.getElementsByClassName('biggerBox');
    BiggerSearch[0].classList.add('hiddenIconSearch');
    let endSearchIcon=document.getElementsByClassName('flaticon-close');
    endSearchIcon[0].classList.add('hiddenIconSearch');
    let profilePic=document.getElementsByClassName('sideProfilePic');
    profilePic[0].classList.remove('hiddenIconSearch');
    let searchDivSive=document.getElementsByClassName('searchNotifivationUpload');
    searchDivSive[0].classList.remove('adjSearchSize');
    BiggerSearch[0].classList.remove('adjSearchinput');
    let notification=document.getElementsByClassName('flaticon-bell');
    notification[0].classList.remove('hiddenIconSearch');
    let searchIcon=document.getElementsByClassName('coreSearch');
    searchIcon[0].classList.remove('hiddenIconSearch');
}


