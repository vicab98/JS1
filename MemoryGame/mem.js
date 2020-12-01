let delayInSec = 2000;
let elem = document.getElementsByClassName("flip-box");
let matched = [[0,3], [1,4], [2,5], [3,0], [4,1], [5,2]];
let arr = [];
let i = 0;
let count = 0;
let used = [];
let firstId = 0;
let secondId = 0;

function flip(myId) {
    
    let el = document.getElementsByClassName("flip-box-inner");
    el[myId].style.transform = 'rotateY('+180+'deg)';

    if(i == 0 ){
        firstId = myId;
        i=1;
    }
    else if(i==1 && myId != firstId){
        secondId = myId;
        i = 0;
        console.log(firstId);
        console.log(secondId);
 setTimeout(() => {

 for(let j = 0; j < matched.length; j++){
    if(firstId == matched[j][0]){
            if(secondId != matched[j][1]){
                console.log(matched[j][0]);
                console.log(matched[j][1]);
            el[firstId].style.transform = 'rotateY('+360+'deg)';
            el[secondId].style.transform = 'rotateY('+360+'deg)';
            break;
            } else {
                
            }
            
    }
 }

}, 2000);
 
}
}
