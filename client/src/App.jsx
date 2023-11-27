import {BrowserRouter} from "react-router-dom";


import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import  Router  from "./Router";

function App() {
  return (
    <BrowserRouter>
     <Header />
     <Container className="mt-10" >
      <Router/>
      </Container>
    </BrowserRouter>

  );
} 

export default App;
