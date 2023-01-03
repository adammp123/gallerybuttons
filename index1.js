function buttonOne(){
    document.querySelector('.box1').style.backgroundImage = "url(imgs/img2.jpg";
    document.querySelector('.button-R1').style.display = 'none';
    document.querySelector('.button-R2').style.display = 'flex';
    document.querySelector('.button-L1').style.display = 'none';
    document.querySelector('.button-L2').style.display = 'flex';
    document.querySelector('.button-L3').style.display = 'none';
}

function buttonTwo(){
    document.querySelector('.box1').style.backgroundImage = "url(imgs/img3.jpg";
    document.querySelector('.button-L3').style.display = 'flex';
    document.querySelector('.button-L2').style.display = 'none';
    document.querySelector('.button-L1').style.display = 'none';
    
}

function buttonOneL(){
    document.querySelector('.box1').style.backgroundImage = "url(imgs/img1.jpg";
    document.querySelector('.button-R1').style.display = 'flex';
    document.querySelector('.button-R2').style.display = 'none';
    document.querySelector('.button-L3').style.display = 'none';
}