const clickableArea = document.querySelector(".container");

const counterValue = document.querySelector(".counter");

let reset_btn = document.querySelector(".reset-btn");

const userChoice = document.querySelector(".userChoice");

const tasbeehMeaning = document.querySelector(".meaning");


//Ask user what tasbeeh he wants to do//

const askUserChoice = prompt("Enter Tasbeeh Name","SUBHANALLAH");

if(askUserChoice =="SUBHANALLAH"|| askUserChoice =="subhanallah" || askUserChoice =="Subhanallah"){
    alert("Reminder\nIts Sunnah to read it (33 times)");

    tasbeehMeaning.innerText = "Glory be to Allah";

}else if(askUserChoice =="ALLHAMDULILAH" || askUserChoice =="Alhamdulilah" || askUserChoice =="allhamdulillah" || askUserChoice =="alhamolillah"){
    alert("Reminder\nIts Sunnah to read it (33 times)");
    
    tasbeehMeaning.innerText = "Praise be to Allah";

}else if(askUserChoice =="ALLAHUAKBAR" || askUserChoice =="Allahuakbar" || askUserChoice =="allahuakbar"){
    alert("Reminder\nIts Sunnah to read it (33 times)");

    tasbeehMeaning.innerText = "Allah is the Geatest";    
}
else{
    alert("Abu Huraira reported:\nThe Messenger of Allah, peace and blessings be upon him, said, “Whoever declares the glory of Allah and His praises one hundred times every day, his sins will be diminished even if they are like the foam of the sea.”Source: Ṣaḥīḥ al-Bukhārī 6405, Ṣaḥīḥ Muslim 2691");
}


userChoice.innerText = askUserChoice;

//set counter with a static value//

counterValue.innerText = 0;

clickableArea.addEventListener('click',function counterTasbeeh(){

    counterValue.innerText++;

    if( counterValue.innerText <= "1"){

        counterValue.style.color = "red";

        // userChoice.style.color = "red";


    }else if( counterValue.innerText == "20"){

        counterValue.style.color = "green";

        // userChoice.style.color = "green";


    }else if( counterValue.innerText == "40"){

        counterValue.style.color = "blue";

        // userChoice.style.color = "blue";


    }else if( counterValue.innerText == "60"){

        counterValue.style.color = "gold";

        // userChoice.style.color = "gold";


    }else if( counterValue.innerText == "80"){

        counterValue.style.color = "crimson";

        // userChoice.style.color = "crimson";

    }else if( counterValue.innerText == "100"){

        counterValue.style.color = "yellow";

        // userChoice.style.color = "yellow";

        alert("Masha-Allah btother You're doing great ❤");

    }

});

reset_btn.addEventListener('click',function reset(){
    let askToCnfrm = prompt("Are you sure you want to Reset the Counter ?" + " " + " (Y/N)");
    if(askToCnfrm == "y" || askToCnfrm == "Y"){
        counterValue.innerHTML = 0-1;

        // counterValue.style.color = "black";
        // userChoice.style.color = "black";
    }
    else{
        counterValue.innerHTML -=1;
    }
});