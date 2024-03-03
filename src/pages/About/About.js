const About = () => {
  return (
    <>
      <body>
        {/* <!-- Topbar Start --> */}

        {/* <!-- Topbar End -->


    <!-- Navbar Start --> */}

        {/* <!-- Navbar End -->


    <!-- Search Start --> */}

        {/* <!-- Search End -->


    <!-- Page Header Start --> */}

        {/* <!-- Page Header Start -->


    <!-- About Start --> */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
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
                  Welcome to our car rental website, where convenience meets
                  exceptional service! With our user-friendly platform, you can
                  easily rent a car for your next adventure. Whether you're
                  planning a weekend getaway or a long road trip, we have a wide
                  range of vehicles to suit your needs and preferences. By
                  creating an account and logging in, you unlock a personalized
                  experience tailored just for you. Our intuitive booking system
                  allows you to browse through available cars, select your
                  desired dates, and effortlessly reserve your vehicle of
                  choice. Moreover, once you're logged in, you can conveniently
                  manage and view your bookings, making it a breeze to keep
                  track of your upcoming trips. At our car rental service, we
                  prioritize customer satisfaction. Our fleet is regularly
                  maintained to ensure a smooth and safe driving experience. We
                  also offer flexible rental options, including daily, weekly,
                  and monthly rates, so you can choose the duration that suits
                  you best. Our dedicated customer support team is always ready
                  to assist you with any inquiries or special requests.
                  Experience the freedom and convenience of renting a car with
                  us. Start by creating an account and enjoy hassle-free
                  bookings along with the peace of mind that comes with our
                  reliable service. Your next adventure awaits!
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
                  <h4 className="text-uppercase m-0">
                    24/7 Car Rental Support
                  </h4>
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
                  <h4 className="text-uppercase m-0">
                    Lots Of Pickup Locations
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End -->


    <!-- Banner Start --> */}
        <div className="container-fluid py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
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
                  <a className="btn btn-primary py-2 px-4" href="#/">
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
      </body>
    </>
  );
};

export default About;
