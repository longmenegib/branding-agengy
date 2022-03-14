
import { Container, Row, Col, Nav, NavItem, NavLink, List } from "reactstrap";
import illus from '../../assets/illustration.png'
import './footer.css'

const Footer = () => {
  return (
    <div style={{backgroundColor: '#198bff'}}>
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
              <div style={{color: '#ffd600', fontWeight: 'bold'}}>Contact-us</div>
              <List type="unstyled">
                <li>
                  Phone number: (800) 719-0815
                </li>
                <li>
                  Fax number: (754) 484-3908
                </li>
                <li>
                  Address: 7900 Oak Lane suite<br/>
                </li>
                <li>
                  400, Miami Lakes, FL 33016
                </li>
                
              </List>
            </Col>
            <Col>
            <div style={{color: '#ffd600', fontWeight: 'bold'}}>SERVICES</div>
              <List type="unstyled" className="footer-link">
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
          <Row className="align-items-center justify-content-xl-between" style={{backgroundColor: '198bff', color: 'white', fontWeight: 'bold'}}>
            <Col xl="6">
              <div className="" style={{color: 'white', fontWeight: 'bold'}}>
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  style={{color: 'white', fontWeight: 'bold'}}>
                  Branding Agency
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com?ref=adr-auth-footer"
                    target="_blank"
                    style={{color: 'white', fontWeight: 'bold'}}
                    className="navlinkk"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/presentation?ref=adr-auth-footer"
                    target="_blank"
                    style={{color: 'white', fontWeight: 'bold'}}
                    className="navlinkk"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="http://blog.creative-tim.com?ref=adr-auth-footer"
                    target="_blank"
                    style={{color: 'white', fontWeight: 'bold'}}
                    className="navlinkk"
                  >
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-auth-footer"
                    target="_blank"
                    style={{color: 'white', fontWeight: 'bold'}}
                    className="navlinkk"
                  >
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=adr-auth-footer"
                    target="_blank"
                    style={{color: 'white', fontWeight: 'bold'}}
                    className="navlinkk"
                  >
                    Portfolio
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Footer;
