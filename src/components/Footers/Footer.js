
import { Container, Row, Col, Nav, NavItem, NavLink, List } from "reactstrap";
import illus from '../../assets/illustration.png'
import './footer.css'

const Footer = () => {
  return (
    <div style={{height: '400px', backgroundColor: '#198bff'}}>
      <Container className="w-100" style={{paddingTop: '50px'}}>
          <div style={{}}>
              <img src={illus} width="50px" height="50px" alt=""/>  
              <span style={{color: 'white', fontWeight: 'bold', fontSize: 'x-large'}}>Branding Agengy</span>
          </div>
          <div style={{marginTop: '20px', color: 'white'}}>
            <p>
              We, at 24/7 ceo, are all about creating an online
              experience that transforms users into followers and customers into ambassadors.
            </p>
          </div>
          <Row className="footer-links">
            <Col>
              <div style={{color: '#ffd600', fontWeight: 'bold'}}>SITE MENU</div>
              <List type="unstyled">
                <li>
                  Portfolio
                </li>
                <li>
                  Contact-us
                </li>
                <li>
                  Blogs
                </li>
                <li>
                  Services
                </li>
                
              </List>
            </Col>
            <Col>
            <div style={{color: '#ffd600', fontWeight: 'bold'}}>SERVICES</div>
              <List type="unstyled">
                <li>
                Branding Design
                </li>
                <li>
                Website Design
                </li>
                <li>
                Mobile App Design
                </li>
                <li>
                Social Media Template Design
                </li>
              </List>
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Footer;
