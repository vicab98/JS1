let elem1 = document.getElementById("elem1");
let elem2 = document.getElementById("elem2");
let elem3 = document.getElementById("elem3");
let elem4 = document.getElementById("elem4");
let input = document.getElementsByTagName("span");
let pass = document.getElementById("fields");
let section = document.getElementById("section"); 
const password = [1,2,3,4];
let arr = [];
let count = 0;
let i = 0;

var times = 10;
var duration = 200;

function butClick(clicked_id) {

        if(i==0){
        elem1.style.backgroundColor = "red";
        arr[i] = clicked_id;
        i++;
        }
        else if(i==1){
        elem2.style.backgroundColor = "red";
        arr[i] = clicked_id;
        i++;
        }
        else if(i==2){
       elem3.style.backgroundColor = "red";
       arr[i] = clicked_id;
       i++;
      }
      else{
          elem4.style.backgroundColor = "red";
          arr[i] = clicked_id;
          count++;
          for(let j=0; j<4; j++){
              if(arr[j] != password[j]){
                elem1.style.backgroundColor = "white"; 
                elem2.style.backgroundColor = "white"; 
                elem3.style.backgroundColor = "white"; 
                elem4.style.backgroundColor = "white";
                  pass.style.marginLeft = "780px";
                  setTimeout(() => {
                    pass.style.marginLeft = "880px"; }, 200);
                    setTimeout(() => {
                        pass.style.marginLeft = "780px"; }, 200);
                        setTimeout(() => {
                            pass.style.marginLeft = "880px"; }, 200);                                            
                            setTimeout(() => {
                                pass.style.marginLeft = "780px"; }, 200); 
                                setTimeout(() => {
                                    pass.style.marginLeft = "880px"; }, 200);  
                                    setTimeout(() => {
                                        pass.style.marginLeft = "830px"; }, 300); 
                                        i = 0;
                                        arr = [];
                                        if(count === 3){
                                            alert("Phone is locked for 1 minute");
                                        } 
              }
              else if(j==3){
                elem1.style.backgroundColor = "white"; 
                elem2.style.backgroundColor = "white"; 
                elem3.style.backgroundColor = "white"; 
                elem4.style.backgroundColor = "white"; 
                section.style.display = "none";
                i=0;
                arr = [];
              }
          }
         
      }
}

function deleteLast(){
let last = arr.length - 1;
i--;
arr.splice(last, 1);
input[last].style.backgroundColor = "white";

}

