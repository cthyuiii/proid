import React from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/wallet.css";

const wallet__data = [
  {
    title: "Apple",
    desc: "Connect your Apple ID through your Apple Account to create your account. Authentication is required and done through Apple's site.",
    icon: "ri-apple-line",
  },

  {
    title: "Facebook",
    desc: "Connect your FaceBook Profile through your Facebook Account to create your account. Authentication is required and done through Facebook's site.",
    icon: "ri-facebook-circle-line",
  },

  {
    title: "Google",
    desc: "Connect your Google Profile through your Google Account to create your account. Authentication is required and done through Google's site.",
    icon: "ri-google-line",
  },

  {
    title: "Twitter",
    desc: "Connect your Twitter Profile through your Twitter Account to create your account. Authentication is required and done through Twitter's site.",
    icon: "ri-twitter-line",
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect Account" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your Account</h3>
                <p>
                  Create your account through connecting them with the available login methods below.
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;