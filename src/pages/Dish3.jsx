import React from 'react'
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

function Dish3() {
  return (
    <div>
      <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://images.pexels.com/photos/15813490/pexels-photo-15813490/free-photo-of-delicious-pizza-with-sauces-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Food Item" />
            <Card.Body className="text-center">
              <Card.Title>Chicken Pizza</Card.Title>
              <h4 className="text-success">₹240</h4>
              <Card.Text>Crispy, soft crust, with tomato basil pizza sauce, mozzarella cheese .</Card.Text>
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

export default Dish3
