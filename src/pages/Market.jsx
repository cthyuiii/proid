import React, {useState} from "react";
import CommonSection from '../components/ui/Common-section/CommonSection'
import { Container, Row, Col } from "reactstrap";
import NftCard from '../components/ui/Nft-card/NftCard';
import {NFT__DATA} from '../assets/data/data';
import '../styles/market.css'

const Market = () => {

    const [data, setData] = useState(NFT__DATA);

    const handleCategory = () => {

    }

    const handleItems = () => {
        
    }

    const handleSort = (e) => {
        const filterValue = e.target.value;
        if(filterValue === 'high'){
            const filterData = NFT__DATA.filter(item => item.currentBid >= 160)
            setData(filterData)
        }
        if(filterValue === 'mid'){
            const filterData = NFT__DATA.filter(item => item.currentBid >= 80 && item.currentBid < 160)
            setData(filterData)
        }
        if(filterValue === 'low'){
            const filterData = NFT__DATA.filter(item => item.currentBid >= 60 && item.currentBid < 80)
            setData(filterData)
        }
    }
    return (
        <>
            <CommonSection title={'Marketplace'}/>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-5">
                            <div className="market__product__filter d-flex align-items-center justify-content-between">
                                <div className="filter__left d-flex align-items-center gap-5">
                                    <div className="all__category__filter">
                                        <select onClick={handleCategory}>
                                            <option>All Categories</option>
                                            <option value="art">Tops</option>
                                            <option value="music">Bottoms</option>
                                            <option value="domain-name">Shoes</option>
                                            <option value="virtual-world">OuterWear</option>
                                            <option value="trending-card">Hoodies</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>

                                    <div className="all__items__filter">
                                        <select onClick={handleItems}>
                                            <option>All Items</option>
                                            <option value="single">Single Items</option>
                                            <option value="bundle">Bundles</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="filter__right">
                                        <select onClick={handleSort}>
                                            <option>Sort By</option>
                                            <option value="high">High Points</option>
                                            <option value="mid">Mid Points</option>
                                            <option value="low">Low Points</option>
                                        </select>
                                </div>
                            </div>
                        </Col>
                        {
                            data?.map(item=>(
                                <Col lg='3' md='4' sm='6' className="mb-4" key={item.id}>
                                    <NftCard item={item}/>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Market;