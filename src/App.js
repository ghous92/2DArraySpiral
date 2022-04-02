import logo from "./logo.svg";
import "./App.css";

function App() {
  var input = new Array(4);

  for (let index = 0; index < input.length; index++) {
    input[index] = new Array(4);
  }
  let h = 1;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      input[i][j] = h++;
    }
  }

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      document.write(input[i][j]);
    }
    document.write("</br>");
    document.write("</br>");
  }

  // var input = [
  //   [1, 2, 3, 4],
  //   [5, 6, 7, 8],
  //   [9, 10, 11, 12],
  //   [13, 14, 15, 16],
  // ];

  var spiralTraversal = function (matriks) {
    var result = [];
    var goAround = function (matrix) {
      if (matrix.length == 0) {
        return;
      }

      // right
      if (matrix.length > 0) {
        result = result.concat(matrix.shift());
      }

      // down
      for (let j = 0; j < matrix.length; j++) {
        result.push(matrix[j].pop());
      }

      // bottom
      if (matrix.length > 0) {
        result = result.concat(matrix.pop().reverse());
      }

      // up
      for (let k = matrix.length - 1; k >= 0; k--) {
        result.push(matrix[k].shift());
      }

      return goAround(matrix);
    };

    goAround(matriks);

    return result;
  };
  var result = spiralTraversal(input);

  console.log("result", result);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
