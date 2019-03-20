//I currently rush projects, so unable to create the user interface for user to input and showcase the algorithm
//Hence, in here, i will provide some test matrix for this algorithm

//Step 1 : input the number n * m matrix by user and each value of element input by user
//Step 2 : the system will create a new array list with the matrix value input by user and added 'visited' flag for each element
//Step 3 : - the algorithm will deep search using recursive method
//         - the algorithm will look for 8 possibilities that will connect with the element
//For more details of the algorithm, you can refer the function method called findConnectedCell

function isNotArrayEmpty(item) {
  return item && item.length > 0;
}

function getLargestArea(inputRow: number, inputColumn: number, matrix): number {
  let rows = [];
  let maxCount: number = 0;

  if (isNotArrayEmpty(matrix)) {
    for (let a = 0; a < matrix.length; a++) {
      let columns = [];
      for (let b = 0; b < matrix[0].length; b++) {
        columns.push({
          val: matrix[a][b],
          visited: false
        });
      }

      rows.push(columns);
    }

    if (isNotArrayEmpty(rows)) {
      rows.map((item, index) => {
        if (isNotArrayEmpty(item)) {
          item.map((item2, index2) => {
            if (rows[index][index2].val == 1 && !rows[index][index2].visited) {
              let count: number = findConnectedCell(rows, index, index2, inputRow, inputColumn);

              if (maxCount < count) {
                maxCount = count;
              }
            }
          });
        }
      });
    }

    return maxCount;
  }
}

function findConnectedCell(matrix, row: number, column: number, inputRow: number, inputColumn: number): number {
  if (row >= 0 && column >= 0 && row < inputRow && column < inputColumn) {
    let value: number = matrix[row][column].val;

    let isVisited: boolean = matrix[row][column].visited;

    if (value === 1 && !isVisited) {
      matrix[row][column].visited = true;

      return (
        1 +
        findConnectedCell(matrix, row - 1, column, inputRow, inputColumn) +
        findConnectedCell(matrix, row + 1, column, inputRow, inputColumn) +
        findConnectedCell(matrix, row, column - 1, inputRow, inputColumn) +
        findConnectedCell(matrix, row, column + 1, inputRow, inputColumn) +
        findConnectedCell(matrix, row - 1, column - 1, inputRow, inputColumn) +
        findConnectedCell(matrix, row - 1, column + 1, inputRow, inputColumn) +
        findConnectedCell(matrix, row + 1, column - 1, inputRow, inputColumn) +
        findConnectedCell(matrix, row + 1, column + 1, inputRow, inputColumn)
      );
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

//Step 1
//Assume n * m matrix input by user, abc is the matrix value input by user
var rowInput = 4;
var columnInput = 4;
var matrixInput = [[1, 0, 0, 1], [1, 1, 0, 1], [0, 1, 0, 0], [1, 0, 1, 0]];

console.log('matrixInput ', matrixInput);

//call function
const maxCount = getLargestArea(rowInput, columnInput, matrixInput);
console.log('maxCount', maxCount);
