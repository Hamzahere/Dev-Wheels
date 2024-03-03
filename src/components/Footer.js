import React from "react";
import { Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

export const Footer = () => {
  return (
    <div
      className="container-fluid py-5 px-sm-3 px-md-5"
      style={{ marginTop: "90px" }}
    >
      <footer
        className="footer"
        style={{ background: "#f8f8f8", padding: "30px 0" }}
      >
        <div className="container">
          <Row gutter={16}>
            <Col span={8}>
              <h4 className="footer-title">Get In Touch</h4>
              <p className="footer-info">
                <EnvironmentOutlined className="footer-icon" />
                123 Street, Melbourne, VIC
              </p>
              <p className="footer-info">
                <PhoneOutlined className="footer-icon" />
                +61 345 678 907
              </p>
              <p className="footer-info">
                <MailOutlined className="footer-icon" />
                info@example.com
              </p>
            </Col>
            <Col span={8}>
              <h4 className="footer-title">Useful Links</h4>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="/" className="footer-link">
                    Private Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-link">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-link">
                    New Member Registration
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-link">
                    Affiliate Programme
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-link">
                    Return & Refund
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-link">
                    Help & FAQs
                  </a>
                </li>
              </ul>
            </Col>
            <Col span={8}>
              <h4 className="footer-title">Car Gallery</h4>
              <div className="row mx-n1">
                <div className="col-4 px-1 mb-2">
                  <a href="/">
                    <img
                      className="w-100"
                      src={require("../assets/img/gallery-1.jpg")}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-4 px-1 mb-2">
                  <a href="/">
                    <img
                      className="w-100"
                      src={require("../assets/img/gallery-2.jpg")}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-4 px-1 mb-2">
                  <a href="/">
                    <img
                      className="w-100"
                      src={require("../assets/img/gallery-3.jpg")}
                      alt=""
                    />
                  </a>
                </div>
                {/* Add more gallery images here */}
              </div>
            </Col>
          </Row>
        </div>
        <div
          className="footer-bottom"
          style={{ background: "#ebebeb", padding: "10px 0" }}
        >
          <div className="container">
            <p className="text-center mb-0">
              © {new Date().getFullYear()} Dev Wheels. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
