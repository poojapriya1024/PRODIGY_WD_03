let btn = document.querySelectorAll(".btn");
let popup = document.querySelector(".popup");
let newGame = document.getElementById("new-game");
let rstBtn = document.getElementById("restart-btn");
let gameMsg = document.getElementById("message");

let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let x = true;
let count = 0;

const foundWinner = (winner) => {
    // Disable the buttons
    btn.forEach((element) => element.disabled = true);

    gameMsg.textContent = `${winner} wins`;
    popup.classList.remove("hide");
}

const didWin = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [btn[i[0]].innerText, btn[i[1]].innerText, btn[i[2]].innerText];

        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 == element2 && element2 == element3) {
                foundWinner(element1);
                return;
            }
        }
    }
}

btn.forEach((element) => {
    element.addEventListener("click", () => {
        if (x) {
            element.innerText = "X";
            x = false;
        } else {
            element.innerText = "O";
            x = true;
        }

        element.disabled = true;
        count += 1;
        didWin();

        if (count === 9) {
            gameMsg.textContent = "It's a draw";
            popup.classList.remove("hide");
        }
    });
});

newGame.addEventListener("click", () => {
    btn.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });

    x = true;
    count = 0;
    gameMsg.textContent = "";
    popup.classList.add("hide");
});

rstBtn.addEventListener("click", () => {
    newGame.click();
});
