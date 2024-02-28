// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { blog } from './Data/blog';

function App() {
  // let headerInfo = {
  //   email:'vishalkumar.itcs@gmail.com',
  //   phone:'7991198925'
  // }
    return ( 
      <>
       {/* <Header email="vishalkumar.itcs@gmail.com" phone="7991198925"/>  */}
      {/* <Header headerInfo={headerInfo} sname="vishal"/> */}
      <Header>
        <h1>This is the Header Section</h1>
      </Header>
      <FontAwesomeIcon icon={faWhatsapp} className='text-danger'/>

      <Container fluid>
        <Container>
          <Row>
            <Col className='col-12 text-center py-4'>
              <h1>Hello Vishal </h1>
            </Col>
          </Row>
          <Row>
            <Col lg='3' md='6'>
              <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='3' md='6'>
              <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='3' md='6'>
              <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg='3' md='6'>
              <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Container>
        <Row>
          { blog.map((v,i)=>{
            return(
              <ProductItems pitems ={v} key={i} />
            )
          })}
        </Row>
      </Container> */}
      <Footer/>
      </>
    );
}

export default App;

// function ProductItems({pitems}) {
//   return (
//     <Col className='col-lg-3 mb-4'>
//       <Card >
//         <Card.Body>
//            <Card.Title>{pitems.title}</Card.Title>
//               <Card.Text>
//                 {pitems.body}
//                 </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//       </Card>
//     </Col>
//   )
// }