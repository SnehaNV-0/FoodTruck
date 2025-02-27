import React from 'react'
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

function Dish4() {
  return (
    <div>
      <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://i0.wp.com/selfiefamily.com/wp-content/uploads/2021/07/Kizhi-Parotta.jpeg?fit=1024%2C1024&ssl=1" alt="Food Item" />
            <Card.Body className="text-center">
              <Card.Title>KizhiPorotta</Card.Title>
              <h4 className="text-success">₹240</h4>
              <Card.Text>South Indian dish, layered parotta bread is served with  spicy beef curry</Card.Text>
              <Button variant="primary" className="w-100">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="mx-auto">
          <h4 className="text-center">Customer Reviews</h4>
          <ListGroup>
            <ListGroup.Item>⭐️⭐️⭐️⭐️⭐️ - "Absolutely delicious!"</ListGroup.Item>
            <ListGroup.Item>⭐️⭐️⭐️⭐️ - "Loved the crust and toppings."</ListGroup.Item>
            <ListGroup.Item>⭐️⭐️⭐️⭐️⭐️ - "Best Biriyani in town!"</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Dish4
