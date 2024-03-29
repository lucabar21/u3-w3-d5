import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SidebarComponent from "./components/SidebarComponent";
import MainComponent from "./components/MainComponent";
import AudiobarComponent from "./components/AudiobarComponent";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col style={{ padding: "0" }}>
            <SidebarComponent />
            <MainComponent />
          </Col>
        </Row>
      </Container>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <AudiobarComponent />
      </Container>
    </>
  );
}

export default App;
