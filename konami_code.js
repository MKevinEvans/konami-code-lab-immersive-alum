const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0;

function init() {
  // your code here
    document.addEventListener('keydown', checkCode);
}

function checkCode(e){
        if(e.key === codes[index]){
            console.log(e.key);
            index++
            if(index >= codes.length){
            console.log("congrats")
            }
         } else {
              index = 0
        }
    }
