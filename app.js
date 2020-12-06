let skipDouble = 0;


function tryAgain(question, img){
    skipDouble++;
    if(skipDouble % 2 == 0){
    document.querySelector(question).classList.toggle("question-font-weight")
    document.querySelector(img).classList.toggle("rotate-img");
    }
    console.log(question + "" + img)
}