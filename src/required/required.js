class Demo {
    constructor(matrix) {
        this.matrix = matrix;
        this.newMatrix = [];

        this.sweepMines();
    }

    sweepMines() {
        this.matrix.forEach((row) => {
            const newArray = row.split('');
            this.newMatrix.push(newArray);
        });

        for(let i = 0; i < this.newMatrix.length; i++) {
            for(let j = 0; j < this.newMatrix[i].length; j++) {
                this.newMatrix[i][j] = this.findAdjacents(j, i);
            }
        }

        console.log(this.newMatrix);
    }

    findAdjacents(exx, whyy) {
        const cell = this.newMatrix[exx][whyy];

        let mineCount = 0;

        if(cell === 'X') {
            return cell;
        }

        const dirs = [
                [exx - 1, whyy],
                [exx + 1, whyy],
                [exx, whyy + 1],
                [exx, whyy - 1],
                [exx - 1, whyy -1],
                [exx + 1, whyy -1],
                [exx - 1, whyy + 1],
                [exx + 1, whyy + 1]
            ];

        for(let i = 0; i < dirs.length; i++) {
            if(dirs[i][0] < 0 || dirs[i][1] < 0 || dirs[i][0] >= this.newMatrix[0].length || dirs[i][1] >= this.newMatrix.length) {
                continue;
            }

            const testCell = this.newMatrix[dirs[i][0]][dirs[i][1]];

            if(testCell === 'X') {
                mineCount++;
            }
        }

        return mineCount;
    }
}

module.exports = Demo;