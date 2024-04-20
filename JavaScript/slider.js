const imgs = document.getElementById("imgSlide");
const img = document.querySelectorAll("#imgSlide img");

let idx = 0;

function sliderAvaliacao(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 300}px)`;
}

setInterval(sliderAvaliacao, 3000);
