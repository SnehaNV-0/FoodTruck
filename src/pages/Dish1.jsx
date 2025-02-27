import React from 'react'
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

function Dish1() {
  return (
    <>
       <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2024/04/white-sauce-pasta.jpg" alt="Food Item" />
            <Card.Body className="text-center">
              <Card.Title>white Sauce Pasta</Card.Title>
              <h4 className="text-success">₹300</h4>
              <Card.Text>Crispy, soft crust, with tomato basil pizza sauce, mozzarella cheese .</Card.Text>
              <Button variant="warning" className="w-100">Order Now</Button>
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
    </>
  )
}

export default Dish1
