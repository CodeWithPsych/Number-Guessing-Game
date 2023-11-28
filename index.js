let randomNumber = Math.floor(Math.random() * 10);
let score = 10;
let marks = document.querySelector(".score");
let win = document.querySelector(".win");
let tryagain = document.querySelector(".tryagain");
let lose = document.querySelector(".gameover");
let input = document.getElementById("input");

document.querySelector(".btn").addEventListener("click", function () {
    let enteredNumber = parseInt(input.value);

    if (enteredNumber === randomNumber) {
        win.style.display = "block";
        tryagain.style.display = "none";
        lose.style.display = "none";
        marks.innerHTML = "You earned " + score + " scores";
        setTimeout(function () {
            location.reload();
        }, 4000);
    } else {
        tryagain.style.display = "block";
        win.style.display = "none";
        lose.style.display = "none";
        score = (score - 2);

        if (score === 0) {
            lose.style.display = "block";
            win.style.display = "none";
            tryagain.style.display = "none";
            setTimeout(function () {
                location.reload();
            }, 2000);
        }
    }

    // Clear the input field
    input.value = "";
});
