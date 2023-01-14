import React from "react";

import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Market from '../pages/Market'
import Create from '../pages/Create'
import Contact from '../pages/Contact'
import SellerProfile from '../pages/SellerProfile'
import EditProfile from '../pages/EditProfile'
import Wallet from '../pages/Wallet'
import ItemDetails from '../pages/ItemDetails'

const Routers = () => {
    return <Routes>
        <Route path="/proid/" element={<Navigate to={'/home'}/>} />
        <Route path="/" element={<Navigate to={'/home'}/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/market" element={<Market/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/seller-profile" element={<SellerProfile/>} />
        <Route path="/edit-profile" element={<EditProfile/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/market" element={<ItemDetails/>} />
    </Routes>
}

export default Routers