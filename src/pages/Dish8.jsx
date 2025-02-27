import React from 'react'
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

function Dish8() {
  return (
    <div>
      <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-15T174448.090.jpg" alt="Food Item" />
            <Card.Body className="text-center">
              <Card.Title>Chicken Momos</Card.Title>
              <h4 className="text-success">₹240</h4>
              <Card.Text> A type of steamed filled dumpling in Tibetan and Nepali cuisine</Card.Text>
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

export default Dish8
