import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css"
import heroImg from '../../assets/images/hero.jpg';


const HeroSection = () => {
    return <section className="hero__section">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2>A Platform to donate your old clothes and<span>collect new clothing.</span></h2>
                        <p>
                            Work to fight against the increasing trend of textile waste. Donate your unwanted textile goods, be it used or new, it will find a new owner on our Marketplace.
                        </p>
                        <div className="hero__btns d-flex align-items-center gap-4">
                        <button className="explore__btn d-flex align-items-center gap-2">
                            <i class='ri-rocket-line'/><Link to={'/market'}>Explore</Link>
                        </button>
                        <button className="create__btn d-flex align-items-center gap-2">
                            <i class='ri-ball-pen-line'/><Link to={'/create'}>Start Listing</Link>
                        </button>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="hero__img">
                        <img src={heroImg} alt="" className="w-100"/>
                    </div>
                </Col>

            </Row>
        </Container>
    </section>
};

export default HeroSection;