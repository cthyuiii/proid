import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import './step-section.css'

const STEP__DATA = [
    {
        title:'Setup your Account',
        desc:'Create your account now easily through many different social channels.',
        icon: 'ri-wallet-line'
    },

    {
        title:'Create your Collection',
        desc:'Create your own personalized collections on your account before you start listing.',
        icon: 'ri-layout-masonry-line'
    },

    {
        title:'Add your Listings',
        desc:'Earn Points by adding your Clothes to your listings, you can only add 5 items a day!',
        icon: 'ri-image-line'
    },

    {
        title:'List them for Sale',
        desc:'Once listed in your collection, your clothes will be listed for sale for other users to exchange!',
        icon: 'ri-list-check'
    },
]

const StepSection = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-4">
                    <h3 className="step__title">Create and Donate Your Unwanted Clothes!</h3>
                </Col>

                {
                    STEP__DATA.map((item, index) => 
                        <Col lg='3' md='4' sm='6' key={index} className='mb-4'>
                        <div className="single__step__item">
                            <span>
                                <i class={item.icon}/>
                            </span>
                            <div className="step__item__content">
                                <h5>
                                    <Link to={'/wallet'}>{item.title}</Link>
                                </h5>
                                <p className="mb-0">{item.desc}</p>
                            </div>
                        </div>
                    </Col>
                    )
                }
            </Row>
        </Container>
    </section>
};

export default StepSection;