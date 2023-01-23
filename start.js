let n

function PRIMZAH(n) {
    let check = false
    let count = 0

    if(n>1) {
        if(((n%n) === 0) && ((n%1) === 0)) {
            check = true
            for(i=2; i<n; i++) {
                if((n%i) === 0) {
                    count++;
                }
            }        
        } else {
            check = false
        }
    }

    if((check == true) && (count === 0)) {
        document.querySelector(".response").textContent = n + " is a prime number!"
        console.log(n + " - PRIME NUMBER @ " + new Date)
    } else {
        document.querySelector(".response").textContent = n + " is not prime number!"
        console.log(n + " NOT @ " + new Date)
    }
}


let number = document.querySelector(".uInput");
let enter = document.querySelector(".uBtn");

enter.addEventListener("click", function(){
    i = parseFloat(number.value);

    if(isNaN(i)) {
        document.querySelector(".response").textContent = "Please enter a valid num"
    } else {
        n = i
        PRIMZAH(n);
    }
})