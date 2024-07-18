function calculate() {
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    
    if (!age || !height || !weight) {
        showModal("Please fill in all the fields.");
        return;
    }

    height = parseFloat(height);
    weight = parseFloat(weight);

    if (height <= 0 || weight <= 0) {
        showModal("Height and weight must be positive values.");
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(1);

    document.getElementById("result").innerText = bmi;

    var comment = "";
    if (bmi < 18.5) {
        comment = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 25) {
        comment = "Normal";
    } else if (bmi >= 25 && bmi <= 30) {
        comment = "Overweight";
    } else if (bmi >= 30 && bmi <= 35) {
        comment = "Obese";
    } else {
        comment = "Extremely Obese";
    }

    document.querySelector(".comment").innerText = comment;
}

function reset() {
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerText = "0";
    document.querySelector(".comment").innerText = "";
}


function showModal(message) {
    var modal = document.getElementById("myModal");
    var modalText = document.getElementById("modalText");
    modalText.innerText = message;
    modal.style.display = "block";


    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

  
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
document.getElementById("submit").addEventListener("click", calculate);
document.getElementById("reset").addEventListener("click", reset);