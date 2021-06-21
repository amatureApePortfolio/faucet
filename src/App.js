import FCTToken from './artifacts/contracts/FCTToken.sol/FCTToken.json';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Faucet from './components/Faucet.js';


function App() {

  const Token = FCTToken;

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div>The Faucet</div>
          </Col>
          <Col>
            <div>send area</div>
          </Col>
        </Row>
      </Container>
      <Faucet tokenContract={Token}/>
    </div>
  );

}

export default App;
