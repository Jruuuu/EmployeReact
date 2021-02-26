import { Nav } from "react-bootstrap";

function App() {
  const style = {
    backgroundColor: "lightblue",
  };
  return (
    <div className="App">
      <Nav activeKey="/home" style={style}>
        <Nav.Item>
          <Nav.Link href="/EmployeReact">Refresh</Nav.Link>
        </Nav.Item>

        <h1>EMPLOYEE DIRECTORY</h1>
      </Nav>
    </div>
  );
}

export default App;
