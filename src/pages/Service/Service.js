import { Card } from "antd";
import { Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const Services = () => {
  return (
    <>
      <body>
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <h1 className="display-4 text-uppercase text-center mb-5">
              Our Services
            </h1>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-2">
                <Card className="service-item">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-taxi text-secondary"></i>
                  </div>
                  <Meta
                    title="Car Rental"
                    description="Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed"
                  />
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 mb-2">
                <Card className="service-item" hoverable>
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-money-check-alt text-secondary"></i>
                  </div>
                  <Meta
                    title="Car Financing"
                    description="Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed"
                  />
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 mb-2">
                <Card className="service-item">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-car text-secondary"></i>
                  </div>
                  <Meta
                    title="Car Inspection"
                    description="Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed"
                  />
                </Card>
              </div>
              {/* Add more service items here */}
            </div>
          </div>
        </div>
        {/* <!-- Services End -->


    <!-- Banner Start --> */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="bg-banner py-5 px-4 text-center">
              <div className="py-5">
                <h1 className="display-1 text-uppercase text-primary mb-4">
                  50% OFF
                </h1>
                <h1 className="text-uppercase text-light mb-4">
                  Special Offer For New Members
                </h1>
                <p className="mb-4">
                  Only for Sunday from 1st Jan to 30th Jan 2045
                </p>
                <a className="btn btn-primary mt-2 py-3 px-5" href="#/">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Services;
