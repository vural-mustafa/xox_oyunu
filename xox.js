let currentPlayer = 'X';
let board = Array(9).fill('');
let player1Name = '';
let player2Name = '';

function startGame() {
  player1Name = document.getElementById('player1').value;
  player2Name = document.getElementById('player2').value;

  document.querySelector('.start-form').style.display = 'none';
  document.getElementById('board').style.display = 'grid';
  updateMessage(`${player1Name}'in sırası`);
}

function makeMove(index) {
  if (board[index] === '' && !checkWinner()) {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;
    if (checkWinner()) {
      setTimeout(() => {
        updateMessage(`${currentPlayer === 'X' ? player1Name : player2Name} Kazandı!`);
        currentPlayer = '';
      }, 100);
    } else if (!board.includes('')) {
      setTimeout(() => {
        updateMessage('Berabere!');
        currentPlayer = '';
      }, 100);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      updateMessage(`${currentPlayer === 'X' ? player1Name : player2Name}'in sırası`);
    }
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]           // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false;
}

function updateMessage(message) {
  document.getElementById('message').textContent = message;
}
