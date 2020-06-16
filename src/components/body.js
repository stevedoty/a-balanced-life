import React from 'react'
import {Accordion, Card, Nav, Button} from 'react-bootstrap'
import logo from '../logo.svg'

const Body = () => {
    return (
        <div className="body">

            <Accordion defaultActiveKey="0">
                    <Card className="card">
                          <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">

                                        number2

                                </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                      <div className="landing-page">
                                        <img className="landing-page--image" src={logo}/>
                                        <ul className="landing-page--list">
                                            <li>Nice:</li>
                                            <li>Price:</li>
                                            <li>aIngredients:</li>
                                            <li>Allergens:</li>
                                            <li>Manufacturer:</li>
                                            <li>Amount In Stock:</li>
                                        </ul>
                                      </div>
                                      <Button variant="primary">Buy</Button>
                                      <Button variant="primary">-1</Button>
                                      0
                                      <Button variant="primary">+1</Button>
                                </Card.Body>
                          </Accordion.Collapse>
                    </Card>
            </Accordion>
        </div>
    )
}

export default Body