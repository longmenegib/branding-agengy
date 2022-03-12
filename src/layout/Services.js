import React from 'react'
import { Card, CardBody, CardTitle, CardText, Row, Col, Container } from "reactstrap";

export default function Services() {
  return (
      <>
        <Container >
        <div style={{marginTop: '50px'}}>
            <h1>
                SERVICES
            </h1>
            <p>
                some thext is here so you cna do what it takes to make sure 
            </p>
        </div>
        <Row>
              <Col sm="6" lg="6" xl="3">
                <Card className="mb-4 mb-xl-0 service-card">
                  <CardBody className="card-body">
                    <CardTitle tag="h5">
                        Branding Design
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>  
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6" lg="6" xl="3">
                <Card className="mb-4 mb-xl-0 service-card">
                  <CardBody className="card-body">
                    <CardTitle tag="h5">
                        Website Design
                    </CardTitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText> 
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6" lg="6" xl="3">
                <Card className="mb-4 mb-xl-0 service-card">
                  <CardBody className="card-body">
                    <CardTitle tag="h5">
                        Mobile App Design
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>  
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6" lg="6" xl="3">
                <Card className="mb-4 mb-xl-0 service-card">
                  <CardBody className="card-body">
                    <CardTitle tag="h5">
                        Social Media Template Design
                        </CardTitle>
                        <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>  
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
    </>
  )
}
