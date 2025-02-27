import React from 'react'
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

function Dish6() {
  return (
    <div>
      <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZDwfL86kwYaChRcgXE5luZlku7RktbzhcJaW_8Kv7iQYNrFp0rykH4Q1gJoKpg8c5ruo4qxxVp74SrdCi7I-h_Qg_Lw6eicHtoSbhzGFRg3yNB89HXp8TthaczVO7I3SCly_Gmorxb2rL/s1600/II1A0998-1.jpg" alt="Food Item" />
            <Card.Body className="text-center">
              <Card.Title>Chicken KuzhiMandhi</Card.Title>
              <h4 className="text-success">₹180</h4>
              <Card.Text>It consists mainly of meat and rice with a blend of spices,cooked in a pit.</Card.Text>
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

export default Dish6
