var elem = document.getElementById("number");
var counter = 0;

function increment() {
    counter++;
    elem.innerHTML = counter;
}

function decrement() {
    if(counter > 0){
        counter--;
        elem.innerHTML = counter;
    }    
}
