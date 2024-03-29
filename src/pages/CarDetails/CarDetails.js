const carDetails = () => {
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


    <!-- Detail Start --> */}
        <div className="container-fluid pt-5">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-8 mb-5">
                <h1 className="display-4 text-uppercase mb-5">
                  Mercedes Benz R3
                </h1>
                <div className="row mx-n2 mb-3">
                  <div className="col-md-3 col-6 px-2 pb-2">
                    <img
                      className="img-fluid w-100"
                      src={require("../../assets/img/gallery-1.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="col-md-3 col-6 px-2 pb-2">
                    <img
                      className="img-fluid w-100"
                      src={require("../../assets/img/gallery-2.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="col-md-3 col-6 px-2 pb-2">
                    <img
                      className="img-fluid w-100"
                      src={require("../../assets/img/gallery-3.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="col-md-3 col-6 px-2 pb-2">
                    <img
                      className="img-fluid w-100"
                      src={require("../../assets/img/gallery-4.jpg")}
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  Tempor erat elitr at rebum at at clita aliquyam consetetur.
                  Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
                  Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                  ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                  clita duo justo et tempor consetetur takimata eirmod, dolores
                  takimata consetetur invidunt magna dolores aliquyam dolores
                  dolore. Amet erat amet et magna
                </p>
                <div className="row pt-2">
                  <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-car text-primary mr-2"></i>
                    <span>Model: 2015</span>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-cogs text-primary mr-2"></i>
                    <span>Automatic</span>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-road text-primary mr-2"></i>
                    <span>20km/liter</span>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-eye text-primary mr-2"></i>
                    <span>GPS Navigation</span>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-car text-primary mr-2"></i>
                    <span>Model: 2015</span>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-cogs text-primary mr-2"></i>
                    <span>Automatic</span>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-road text-primary mr-2"></i>
                    <span>20km/liter</span>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-eye text-primary mr-2"></i>
                    <span>GPS Navigation</span>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-car text-primary mr-2"></i>
                    <span>Model: 2015</span>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-cogs text-primary mr-2"></i>
                    <span>Automatic</span>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-road text-primary mr-2"></i>
                    <span>20km/liter</span>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-eye text-primary mr-2"></i>
                    <span>GPS Navigation</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-5">
                <div className="bg-secondary p-5">
                  <h3 className="text-primary text-center mb-4">
                    Check Availability
                  </h3>
                  <div className="form-group">
                    <select
                      className="custom-select px-4"
                      style={{ height: "50px" }}
                    >
                      <option selected>Pickup Location</option>
                      <option value="1">Location 1</option>
                      <option value="2">Location 2</option>
                      <option value="3">Location 3</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select px-4"
                      style={{ height: "50px" }}
                    >
                      <option selected>Drop Location</option>
                      <option value="1">Location 1</option>
                      <option value="2">Location 2</option>
                      <option value="3">Location 3</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div
                      className="date"
                      id="date1"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control p-4 datetimepicker-input"
                        placeholder="Pickup Date"
                        data-target="#date1"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div
                      className="time"
                      id="time1"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control p-4 datetimepicker-input"
                        placeholder="Pickup Time"
                        data-target="#time1"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select px-4"
                      style={{ height: "50px" }}
                    >
                      <option selected>Select Person</option>
                      <option value="1">Person 1</option>
                      <option value="2">Person 2</option>
                      <option value="3">Person 3</option>
                    </select>
                  </div>
                  <div className="form-group mb-0">
                    <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      style={{ height: "50px" }}
                    >
                      Check Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Detail End -->


    <!-- Related Car Start --> */}
        <div className="container-fluid pb-5">
          <div className="container pb-5">
            <h2 className="mb-4">Related Cars</h2>
            <div
              className="owl-carousel related-carousel position-relative"
              style={{ padding: "0 30px" }}
            >
              <div className="rent-item">
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
                <a className="btn btn-primary px-3" href="#/">
                  $99.00/Day
                </a>
              </div>
              <div className="rent-item">
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
                <a className="btn btn-primary px-3" href="#/">
                  $99.00/Day
                </a>
              </div>
              <div className="rent-item">
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
                <a className="btn btn-primary px-3" href="#/">
                  $99.00/Day
                </a>
              </div>
              <div className="rent-item">
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
                <a className="btn btn-primary px-3" href="#/">
                  $99.00/Day
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default carDetails;
