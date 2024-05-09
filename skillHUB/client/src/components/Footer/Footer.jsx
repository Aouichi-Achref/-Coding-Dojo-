import React from 'react';
import { Button, NavItem, NavLink, Nav, Container, Row, Col } from 'react-bootstrap';
import { UncontrolledTooltip } from 'reactstrap';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor:'grey',
      borderTop:"1px solid red",
      boxShadow:"2px 2px 2px 5px red"
    }}>
      <Container>
        <Row className="row-grid align-items-center mb-5">
          <Col lg="6">
            <h3 className="text-primary font-weight-light mb-2">
              Thank you for supporting us!
            </h3>
            <h4 className="mb-0 font-weight-light">
              Let's get in touch on any of these platforms.
            </h4>
          </Col>
          <Col className="text-lg-center btn-wrapper" lg="6">
            <Button
              style={{ backgroundColor: '#1DA1F2'}}
              href="https://twitter.com/creativetim"
              id="tooltip475038074"
              target="_blank"
            >
              <span className="btn-inner--icon">
                <box-icon name='twitter' type='logo' ></box-icon>
              </span>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip475038074">
              Follow us
            </UncontrolledTooltip>
            <Button
              
              style={{ backgroundColor: '#3B5998' }}
              href="https://www.facebook.com/creativetim"
              id="tooltip837440414"
              target="_blank"
            >
              <span className="btn-inner--icon">
                <box-icon name='facebook-square' type='logo' ></box-icon>
              </span>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip837440414">
              Like us
            </UncontrolledTooltip>
            <Button
              style={{ backgroundColor: '#FF0000' }}
              href="https://dribbble.com/creativetim"
              id="tooltip829810202"
              target="_blank"
            >
              <span className="btn-inner--icon">
                <box-icon name='gmail' type='logo' ></box-icon>
              </span>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip829810202">
              Follow us
            </UncontrolledTooltip>
            <Button
              style={{ backgroundColor: '#333333' }}
              href="https://github.com/creativetimofficial"
              id="tooltip495507257"
              target="_blank"
            >
              <span className="btn-inner--icon">
                <box-icon  name='github' type='logo' ></box-icon>
              </span>
            </Button>
            <UncontrolledTooltip delay={0} target="tooltip495507257">
              Star on Github
            </UncontrolledTooltip>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              Â© {new Date().getFullYear()}{" "}
              Skill HUb
            </div>
          </Col>
          <Col xl="6">
            <Nav className="nav-footer justify-content-center justify-content-xl-end">
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                >
                  Skill HUb
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                >
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  target=""
                >
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;