import React from 'react';
import './Offers.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <>
     <img 
                className="img-fluid" 
                style={{width: '100%', height: 'auto', maxWidth: '1536px', maxHeight: '600px'}} 
                src="https://images.pexels.com/photos/7213094/pexels-photo-7213094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="" 
            />
      <div className="text-center" id="offers">
        <h3>OUR MENU</h3>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Card.Body>
                  <Card.Title>Thalappakkatti Biriyani</Card.Title>
                  <Card.Text>
                  A special blend of spices is used for the biryani
                  </Card.Text>
                  <Link to={'/dish1'}><Button variant="warning">Order Now</Button></Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{height:'200px'}}/>
                <Card.Body>
                  <Card.Title>Butter Chicken</Card.Title>
                  <Card.Text>
                 It is a type of curry made from chicken with a spiced tomato and butter sauce
                  </Card.Text>
                  <Link to={'/dish2'}><Button variant="warning">Order Now</Button></Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/15813490/pexels-photo-15813490/free-photo-of-delicious-pizza-with-sauces-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Card.Body>
                  <Card.Title>Chicken Pizza</Card.Title>
                  <Card.Text>
                  Crispy, soft crust, with tomato basil pizza sauce, mozzarella cheese .
                  </Card.Text>
                  <Link to={'/dish3'}><Button variant="warning">Order Now</Button></Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <Card>
                <Card.Img variant="top" src="https://i0.wp.com/selfiefamily.com/wp-content/uploads/2021/07/Kizhi-Parotta.jpeg?fit=1024%2C1024&ssl=1" style={{height:'200px'}}/>
                <Card.Body>
                  <Card.Title>KizhiPorotta</Card.Title>
                  <Card.Text>
                  South Indian dish, layered parotta bread is served with  spicy beef curry
                  </Card.Text>
                  <Link to={'/dish4'}><Button variant="warning">Order Now</Button></Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <Card>
                <Card.Img variant="top" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2024/04/white-sauce-pasta.jpg" style={{height:'200px'}}/>
                <Card.Body>
                  <Card.Title>white Sauce Pasta</Card.Title>
                  <Card.Text>
                   mixed with a silky smooth white sauce made of milk, butter and flour.
                  </Card.Text>
                  <Link to={'/dish5'}><Button variant="warning">Order Now</Button></Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <Card>
                <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZDwfL86kwYaChRcgXE5luZlku7RktbzhcJaW_8Kv7iQYNrFp0rykH4Q1gJoKpg8c5ruo4qxxVp74SrdCi7I-h_Qg_Lw6eicHtoSbhzGFRg3yNB89HXp8TthaczVO7I3SCly_Gmorxb2rL/s1600/II1A0998-1.jpg" style={{height:'200px'}}/>
                <Card.Body>
                  <Card.Title>Chicken KuzhiMandhi</Card.Title>
                  <Card.Text>
                  It consists mainly of meat and rice with a blend of spices,cooked in a pit.
                  </Card.Text>
                  <Link to={'/dish6'}><Button variant="warning">Order Now</Button></Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <Card>
                <Card.Img variant="top" src="https://www.kitchensanctuary.com/wp-content/uploads/2020/12/Quick-Chicken-Ramen-square-FS-22.jpg" style={{height:'200px'}}/>
                <Card.Body>
                  <Card.Title>Ramen Noodles</Card.Title>
                  <Card.Text>
                  A popular Japanese dish featuring Chinese-style wheat noodles
                  </Card.Text>
                  <Link to={'/dish7'}><Button variant="warning">Order Now</Button></Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <Card>
                <Card.Img variant="top" src="https://static.india.com/wp-content/uploads/2024/12/FEATURE-2024-12-15T174448.090.jpg" style={{height:'200px'}}/>
                <Card.Body>
                  <Card.Title>Chicken Momos</Card.Title>
                  <Card.Text>
                  A type of steamed filled dumpling in Tibetan and Nepali cuisine
                  </Card.Text>
                  <Link to={'/dish8'}><Button variant="warning">Order Now</Button></Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;