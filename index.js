let input = document.querySelector(".input");
let imgbox = document.querySelector(".imgbox");

let qr = document.querySelector(".qr-code");

let btn = document.querySelector(".btn");

function qrcode(url) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
}

btn.addEventListener("click", () => {
   if(input.value.length > 0) {
    let url = input.value;
    qr.src = qrcode(url);
    imgbox.classList.add("show-img");
    imgbox.style.border = "1px solid #000";
    
    qr.style.display = "block";;
   }else{
    imgbox.classList.remove("show-img");
    qr.style.display = "none";
    imgbox.style.border = "none";
    
   }
   
});
