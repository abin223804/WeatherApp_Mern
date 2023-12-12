import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const WeatherAppLanding = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">WEATHER_APP BY ABIN S CHANDRAN</h1>
          <p className="text-center mb-4">
            Welcome to your weather app! Get real-time weather updates with our
            intuitive interface.

            
          </p>
      <h4 style={{ color: 'red' }}> Please signin for get RealTime Weather</h4>
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="primary" className="me-3">
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button variant="secondary">Sign Up</Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default WeatherAppLanding;
