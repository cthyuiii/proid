import React from "react";
import CommonSection from '../components/ui/Common-section/CommonSection';
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import {NFT__DATA} from '../assets/data/data';
import LiveAuction from '../components/ui/Live Auction/LiveAuction'
import '../styles/item-details.css'

const ItemDetails = () => {

    const {id} = useParams()

    const singleItem = NFT__DATA.find(item=> item.id === id)

    return <>
        <CommonSection title={singleItem.title}/>
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6'>
                        <img src={singleItem.imgUrl} alt='' className="w-100 single__nft-img"/>
                    </Col>
                    <Col lg='6' md='6' sm='6'>
                        <div className="single__nft__content">
                            <h2>{singleItem.title}</h2>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                <div className="d-flex align-items-center gap-4 single__nft-seen">
                                    <span><i class='ri-eye-line'/> 234</span>
                                    <span><i class='ri-heart-line'/> 123</span>
                                </div>

                                <div className="d-flex align-items-center gap-2 single__nft-more">
                                    <span><i class='ri-send-plane-line'/></span>
                                    <span><i class='ri-more-2-line'/></span>
                                </div>
                            </div>

                            <div className="nft__creator d-flex gap-3 align-items-center">
                                <div className="creator__img">
                                    <img src={singleItem.creatorImg} alt='' className="w-100"/>
                                </div>
                                <div className="creator__detail">
                                    <p>Created By</p>
                                    <h6>{singleItem.creator}</h6>
                                </div>
                            </div>

                            <p className="my-4">{singleItem.desc}</p>
                            <button className="singleNft-btn d-flex align-items-center gap-2 w-100">
                                <i class='ri-shopping-bag-line'/>
                                <Link to={'/wallet'}>Place a Bid</Link>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <LiveAuction/>
    </>
};

export default ItemDetails;