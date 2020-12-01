let x = 0;
let array = Array();
let k = 0;
let dist_arr = [];
let denom_arr = [];
const distinct = (value, index, self) => {
    return self.indexOf(value) == index;
}
function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}


function CheckSum(){
    k = document.getElementById("text2").value;
    document.getElementById("text2").value = "";
    for (let i=0; i<array.length; i++){
        for (let j=i+1; j<array.length; j++){
            let sum = parseInt(array[i]) + parseInt(array[j]);
            console.log(sum);
            console.log(k);
            if (sum == k)
                alert("TRUE");
            else if(i == array.length - 1){
                alert("FALSE");
            }
        }
    }  
}

function Distinct(){
   dist_arr = array.filter(distinct);
   console.log(dist_arr);
}


function GCD(){
    let count = 0;
    array.sort();
    for(let i=0; i < array.length; i++){
        for(let j=0; j < array.length; j++){
            if(array[j] % array[i] == 0){
                count++;
                if(count == array.length-1){
                denom_arr.unshift(array[i]);
                }
            } else {
                break;
            }
        }
    }
    if(denom_arr.length == 0){
        alert("No common denominator here");
    }
    else{
        console.log(denom_arr);
        alert(denom_arr[denom_arr.length - 1]);
    }
}