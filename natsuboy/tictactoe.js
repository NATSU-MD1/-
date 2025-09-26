class TicTacToe {
    constructor(playerX) {
        this.board = Array(9).fill(null);
        this.playerX = playerX;
        this.playerO = null;
        this.currentTurn = playerX;
        this.winner = null;
        this.turns = 0;
    }

    render() {
        return this.board.map((v, i) => v ? v : String(i + 1));
    }

    turn(isO, index) {
        if (this.winner || index < 0 || index > 8 || this.board[index]) return false;

        const symbol = isO ? 'O' : 'X';
        this.board[index] = symbol;
        this.turns++;

        if (this.checkWin(symbol)) {
            this.winner = isO ? this.playerO : this.playerX;
        } else {
            this.currentTurn = isO ? this.playerX : this.playerO;
        }

        return true;
    }

    checkWin(symbol) {
        const b = this.board;
        const winPatterns = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];
        return winPatterns.some(([a,b,c]) => b[a] === symbol && b[b] === symbol && b[c] === symbol);
    }
}

module.exports = TicTacToe;
