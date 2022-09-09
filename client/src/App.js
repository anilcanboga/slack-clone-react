import io from "socket.io-client"

const socket = io.connect('http://localhost:3005');

function App() {
  return (
    <div className="App">
      React
    </div>
  );
}

export default App;
