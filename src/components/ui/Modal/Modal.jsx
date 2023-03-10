import React from "react";
import './modal.css';

const Modal = ({setShowModal}) => {
    return <div className="modal__wrapper" >
        <div className="single__modal">

            <span className="close__modal"><i class='ri-close-line' onClick={()=> setShowModal(false)}/></span>
            <h6 className="text-center text-light">Redeemption</h6>
            <p className="text-center text-light">This item requires at least <span className="money">70 PTS</span></p>

            <div className="input__item mb-4">
                <input type="number" placeholder="00 : 00 PTS"/>
            </div>

            <div className="input__item mb-3">
                <h6>Enter Quantity, 7 available</h6>
                <input type="number" placeholder="Enter Quantity"/>
            </div>

            <div className="d-flex align-items-center justify-content-between">
                <p>Item Cost</p>
                <span className="money">70 PTS</span>
            </div>

            <div className="d-flex align-items-center justify-content-between">
                <p>Service Fee</p>
                <span className="money">5 PTS</span>
            </div>

            <div className="d-flex align-items-center justify-content-between">
                <p>Total PTS Amount</p>
                <span className="money">75 PTS</span>
            </div>

                <button className="place__bid-btn">
                    Redeem
                </button>

        </div>
    </div>
};

export default Modal;