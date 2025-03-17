import React from "react";
import "./index.css";
import SuccessIcon from "../../assets/svg/success.svg";
import Header from "../../components/Header";
const PaymentSuccess = () => {
  return (
    <div className="container">
      <div className="titleContainer">
        <div className="icon">
          <img src={SuccessIcon} alt="" />
        </div>
        <div className="descriptionContainer">
          <p className="title-success">Thanh toán thành công</p>

          <p className="description">Đơn hàng đã được thanh toán</p>
          <p className="description">Vui lòng trở về trang chủ</p>
          <button className="button-success">
            <a href="/" style={{
                textDecoration: "none",
                color: "white"
            }}>Trang chủ</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
