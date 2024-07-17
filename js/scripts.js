const { number } = require("zod");

var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculate(){

    if(height.value=='' || (male.checked==false && female.checked==false)){
        modal.style.display = "block";
        modalText.innerHTML = 'All fields are required';

    }else{
        countbmi();
    }
}

function countBmi() {
    var p = [height.value, weight.value];
    if(male.checked){
        p.push("male");
    }else if(female.checked){
        p.push("female");
    }

    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

    var result = '';
    if(bmi<18.5){
        result = 'underweight';
        }else if (18.5<=bmi&&bmi<=25){
        result = 'healthy';
        }else if(25<=bmi&&bmi<=30){
        result = 'Overweight';
        }else if(30<=bmi&bmi<=35){
        result = 'obese';
        }else if(35<=bmi){
        result = 'extremely obese';
        }


    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML `You are <span id="comment">$(result)</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
}