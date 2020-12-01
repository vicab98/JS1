
function calculate(){
    var amount = document.getElementById("amount").value;
    var serviceLevel = document.getElementById("service").value;
    var persons = document.getElementById("persons").value;

    if(isNaN(Number(amount)) || amount < 0){
      alert("The amount value is invalid! Please introduce a number greatter than 0.");
    }else if(isNaN(Number(persons)) || persons <= 0){
      alert("The number of persons is invalid! Please introduce a number greatter than 0.");
    } else{
      var total = (amount * serviceLevel) / persons;
      document.getElementById("tip").innerHTML = total;
    }

}

