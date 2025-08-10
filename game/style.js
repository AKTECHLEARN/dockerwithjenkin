const board = document.getElementById("board");
let cells = [];
let turn = "X";

function checkWinner() {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].innerText &&
            cells[a].innerText === cells[b].innerText &&
            cells[a].innerText === cells[c].innerText) {
            alert(`${cells[a].innerText} wins!`);
            location.reload();
        }
    }
}

function handleClick(e) {
    if (e.target.innerText === "") {
        e.target.innerText = turn;
        turn = turn === "X" ? "O" : "X";
        checkWinner();
    }
}

for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", handleClick);
    board.appendChild(cell);
    cells.push(cell);
}
