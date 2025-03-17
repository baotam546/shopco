import React from 'react'
import "./index.css";
import FailIcon from "../../assets/svg/error.svg";
const PaymentFailed = () => {
  return (
     <div className="container">
          <div className="titleContainer">
            <div className="icon">
              <img src={FailIcon} alt="" />
            </div>
            <div className="descriptionContainer">
              <p className="title-fail">Thanh toán thất bại</p>
    
              <p className="description">Đơn hàng đã được thanh toán</p>
              <p className="description">Vui lòng trở về trang chủ</p>
              <button className="button-fail">
                <a href="/" style={{
                    textDecoration: "none",
                    color: "white"
                }}>Trang chủ</a>
              </button>
            </div>
          </div>
        </div>
  )
}

export default PaymentFailed