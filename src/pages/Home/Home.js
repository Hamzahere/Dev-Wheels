import React from "react";

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0" style={{ marginBottom: "90px" }}>
        <div id="header-carousel" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src={require("../../assets/img/carousel-1.jpg")}
                alt=""
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase mb-md-3">
                    Rent A Car
                  </h4>
                  <h1 className="display-1 text-white mb-md-4">
                    Best Rental Cars In Your Location
                  </h1>
                  <a href="/#" className="btn btn-primary py-md-3 px-md-5 mt-2">
                    Reserve Now
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src={require("../../assets/img/carousel-2.jpg")}
                alt=""
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase mb-md-3">
                    Rent A Car
                  </h4>
                  <h1 className="display-1 text-white mb-md-4">
                    Quality Cars with Unlimited Miles
                  </h1>
                  <a href="/#" className="btn btn-primary py-md-3 px-md-5 mt-2">
                    Reserve Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-1 text-primary text-center">01</h1>
          <h1 className="display-4 text-uppercase text-center mb-5">
            Welcome To <span className="text-primary">Dev Wheels</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <img
                className="w-75 mb-4"
                src={require("../../assets/img/about.png")}
                alt=""
              />
              <p>
                Welcome to DevWheels, your one-stop shop for exploring the world
                in style and comfort. Whether you're planning a road trip
                adventure, a weekend getaway, or simply need a reliable car for
                business travel, we offer a wide selection of vehicles to suit
                your needs and budget. Our user-friendly platform makes booking
                a breeze, and our commitment to excellent customer service
                ensures a smooth and enjoyable rental experience. So, start
                browsing our fleet, get a free quote, and get ready to hit the
                road!
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center bg-light p-4 mb-4"
                style={{ height: "150px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="fa fa-2x fa-headset text-secondary"></i>
                </div>
                <h4 className="text-uppercase m-0">24/7 Car Rental Support</h4>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center bg-secondary p-4 mb-4"
                style={{ height: "150px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="fa fa-2x fa-car text-secondary"></i>
                </div>
                <h4 className="text-light text-uppercase m-0">
                  Car Reservation Anytime
                </h4>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center bg-light p-4 mb-4"
                style={{ height: "150px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="fa fa-2x fa-map-marker-alt text-secondary"></i>
                </div>
                <h4 className="text-uppercase m-0">Lots Of Pickup Locations</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Find Your Car
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src={require("../../assets/img/car-rent-1.png")}
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <a className="btn btn-primary px-3" href="/#">
                  $99.00/Day
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item active mb-4">
                <img
                  className="img-fluid mb-4"
                  src={require("../../assets/img/car-rent-2.png")}
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <a className="btn btn-primary px-3" href="/#">
                  $99.00/Day
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src={require("../../assets/img/car-rent-3.png")}
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <a className="btn btn-primary px-3" href="/#">
                  $99.00/Day
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src={require("../../assets/img/car-rent-4.png")}
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <a className="btn btn-primary px-3" href="/#">
                  $99.00/Day
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="rent-item mb-4">
                <img
                  className="img-fluid mb-4"
                  src={require("../../assets/img/car-rent-5.png")}
                  alt=""
                />
                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                <div className="d-flex justify-content-center mb-4">
                  <div className="px-2">
                    <i className="fa fa-car text-primary mr-1"></i>
                    <span>2015</span>
                  </div>
                  <div className="px-2 border-left border-right">
                    <i className="fa fa-cogs text-primary mr-1"></i>
                    <span>AUTO</span>
                  </div>
                  <div className="px-2">
                    <i className="fa fa-road text-primary mr-1"></i>
                    <span>25K</span>
                  </div>
                </div>
                <a className="btn btn-primary px-3" href="/#">
                  $99.00/Day
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row mx-0">
            <div className="col-lg-6 px-0">
              <div
                className="px-5 bg-secondary d-flex align-items-center justify-content-between"
                style={{ height: "350px" }}
              >
                <img
                  className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4"
                  src={require("../../assets/img/banner-left.png")}
                  alt=""
                />
                <div className="text-right">
                  <h3 className="text-uppercase text-light mb-3">
                    Want to be driver?
                  </h3>
                  <p className="mb-4">
                    Want to learn driving? Checkout our lowest class prices.
                  </p>
                  <a className="btn btn-primary py-2 px-4" href="/#">
                    Start Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-0">
              <div
                className="px-5 bg-dark d-flex align-items-center justify-content-between"
                style={{ height: "350px" }}
              >
                <div className="text-left">
                  <h3 className="text-uppercase text-light mb-3">
                    Looking for a car?
                  </h3>
                  <p className="mb-4">
                    Lorem justo sit sit ipsum eos lorem kasd, kasd labore
                  </p>
                  <a className="btn btn-primary py-2 px-4" href="/#">
                    Start Now
                  </a>
                </div>
                <img
                  className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4"
                  src={require("../../assets/img/banner-right.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Contact Us
          </h1>
          <div className="row">
            <div className="col-lg-7 mb-2">
              <div
                className="contact-form bg-light mb-4"
                style={{ padding: "30px" }}
              >
                <form>
                  <div className="row">
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="email"
                        className="form-control p-4"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control py-3 px-4"
                      rows="5"
                      placeholder="Message"
                      required="required"
                    ></textarea>
                  </div>
                  <div>
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-2">
              <div
                className="bg-secondary d-flex flex-column justify-content-center px-5 mb-4"
                style={{ height: "435px" }}
              >
                <div className="d-flex mb-3">
                  <i className="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3"></i>
                  <div className="mt-n1">
                    <h5 className="text-light">Head Office</h5>
                    <p>123 Street, Melbourne, VIC</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i className="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3"></i>
                  <div className="mt-n1">
                    <h5 className="text-light">Branch Office</h5>
                    <p>123 Street, Melbourne, VIC</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i className="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3"></i>
                  <div className="mt-n1">
                    <h5 className="text-light">Customer Service</h5>
                    <p>customer@example.com</p>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3"></i>
                  <div className="mt-n1">
                    <h5 className="text-light">Return & Refund</h5>
                    <p className="m-0">refund@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
