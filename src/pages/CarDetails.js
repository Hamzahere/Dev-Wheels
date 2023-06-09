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
                    <h1 className="display-4 text-uppercase mb-5">Mercedes Benz R3</h1>
                    <div className="row mx-n2 mb-3">
                        <div className="col-md-3 col-6 px-2 pb-2">
                            <img className="img-fluid w-100" src={require("../assets/img/gallery-1.jpg")} alt=""/>
                        </div>
                        <div className="col-md-3 col-6 px-2 pb-2">
                            <img className="img-fluid w-100" src={require("../assets/img/gallery-2.jpg")} alt=""/>
                        </div>
                        <div className="col-md-3 col-6 px-2 pb-2">
                            <img className="img-fluid w-100" src={require("../assets/img/gallery-3.jpg")} alt=""/>
                        </div>
                        <div className="col-md-3 col-6 px-2 pb-2">
                            <img className="img-fluid w-100" src={require("../assets/img/gallery-4.jpg")} alt=""/>
                        </div>
                    </div>
                    <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
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
                        <h3 className="text-primary text-center mb-4">Check Availability</h3>
                        <div className="form-group">
                            <select className="custom-select px-4" style={{"height": "50px"}}>
                                <option selected>Pickup Location</option>
                                <option value="1">Location 1</option>
                                <option value="2">Location 2</option>
                                <option value="3">Location 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="custom-select px-4" style={{"height": "50px"}}>
                                <option selected>Drop Location</option>
                                <option value="1">Location 1</option>
                                <option value="2">Location 2</option>
                                <option value="3">Location 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="date" id="date1" data-target-input="nearest">
                                <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Pickup Date"
                                    data-target="#date1" data-toggle="datetimepicker" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="time" id="time1" data-target-input="nearest">
                                <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Pickup Time"
                                    data-target="#time1" data-toggle="datetimepicker" />
                            </div>
                        </div>
                        <div className="form-group">
                            <select className="custom-select px-4" style={{"height": "50px"}}>
                                <option selected>Select Person</option>
                                <option value="1">Person 1</option>
                                <option value="2">Person 2</option>
                                <option value="3">Person 3</option>
                            </select>
                        </div>
                        <div className="form-group mb-0">
                            <button className="btn btn-primary btn-block" type="submit" style={{"height": "50px"}}>Check Now</button>
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
            <div className="owl-carousel related-carousel position-relative" style={{"padding": "0 30px"}}>
                <div className="rent-item">
                    <img className="img-fluid mb-4" src={require("../assets/img/car-rent-1.png")} alt=""/>
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
                    <a className="btn btn-primary px-3" href="#/">$99.00/Day</a>
                </div>
                <div className="rent-item">
                    <img className="img-fluid mb-4" src={require("../assets/img/car-rent-2.png")} alt=""/>
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
                    <a className="btn btn-primary px-3" href="#/">$99.00/Day</a>
                </div>
                <div className="rent-item">
                    <img className="img-fluid mb-4" src={require("../assets/img/car-rent-3.png")} alt=""/>
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
                    <a className="btn btn-primary px-3" href="#/">$99.00/Day</a>
                </div>
                <div className="rent-item">
                    <img className="img-fluid mb-4" src={require("../assets/img/car-rent-4.png")} alt=""/>
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
                    <a className="btn btn-primary px-3" href="#/">$99.00/Day</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Related Car End -->


    <!-- Vendor Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="owl-carousel vendor-carousel">
                <div className="bg-light p-4">
                    <img src={require("../assets/img/vendor-1.png")} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={require("../assets/img/vendor-2.png")} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={require("../assets/img/vendor-3.png")} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={require("../assets/img/vendor-4.png")} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={require("../assets/img/vendor-5.png")} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={require("../assets/img/vendor-6.png")} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={require("../assets/img/vendor-7.png")} alt=""/>
                </div>
                <div className="bg-light p-4">
                    <img src={require("../assets/img/vendor-8.png")} alt=""/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Vendor End -->


    <!-- Footer Start --> */}
    <div className="container-fluid bg-secondary py-5 px-sm-3 px-md-5" style={{"margin-top": "90px"}}>
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-white mr-3"></i>123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-phone-alt text-white mr-3"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope text-white mr-3"></i>info@example.com</p>
                <h6 className="text-uppercase text-white py-2">Follow Us</h6>
                <div className="d-flex justify-content-start">
                    <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="#/"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="#/"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="#/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-lg btn-dark btn-lg-square" href="#/"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-uppercase text-light mb-4">Usefull Links</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-body mb-2" href="#/"><i className="fa fa-angle-right text-white mr-2"></i>Private Policy</a>
                    <a className="text-body mb-2" href="#/"><i className="fa fa-angle-right text-white mr-2"></i>Term & Conditions</a>
                    <a className="text-body mb-2" href="#/"><i className="fa fa-angle-right text-white mr-2"></i>New Member Registration</a>
                    <a className="text-body mb-2" href="#/"><i className="fa fa-angle-right text-white mr-2"></i>Affiliate Programme</a>
                    <a className="text-body mb-2" href="#/"><i className="fa fa-angle-right text-white mr-2"></i>Return & Refund</a>
                    <a className="text-body" href="#/"><i className="fa fa-angle-right text-white mr-2"></i>Help & FQAs</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-uppercase text-light mb-4">Car Gallery</h4>
                <div className="row mx-n1">
                    <div className="col-4 px-1 mb-2">
                        <a href="#/"><img className="w-100" src={require("../assets/img/gallery-1.jpg")} alt=""/></a>
                    </div>
                    <div className="col-4 px-1 mb-2">
                        <a href="#/"><img className="w-100" src={require("../assets/img/gallery-2.jpg")} alt=""/></a>
                    </div>
                    <div className="col-4 px-1 mb-2">
                        <a href="#/"><img className="w-100" src={require("../assets/img/gallery-3.jpg")} alt=""/></a>
                    </div>
                    <div className="col-4 px-1 mb-2">
                        <a href="#/"><img className="w-100" src={require("../assets/img/gallery-4.jpg")} alt=""/></a>
                    </div>
                    <div className="col-4 px-1 mb-2">
                        <a href="#/"><img className="w-100" src={require("../assets/img/gallery-5.jpg")} alt=""/></a>
                    </div>
                    <div className="col-4 px-1 mb-2">
                        <a href="#/"><img className="w-100" src={require("../assets/img/gallery-6.jpg")} alt=""/></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-uppercase text-light mb-4">Newsletter</h4>
                <p className="mb-4">Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
                <div className="w-100 mb-3">
                    <div className="input-group">
                        <input type="text" className="form-control bg-dark border-dark" style={{"padding": "25px"}} placeholder="Your Email"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary text-uppercase px-3">Sign Up</button>
                        </div>
                    </div>
                </div>
                <i>Lorem sit sed elitr sed kasd et</i>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark py-4 px-sm-3 px-md-5">
        <p className="mb-2 text-center text-body">&copy; <a href="#/">Your Site Name</a>. All Rights Reserved.</p>
        <p className="m-0 text-center text-body">Designed by <a href="https://htmlcodex.com">HTML Codex</a></p>
    </div>
    {/* <!-- Footer End -->


    <!-- Back to Top --> */}
    <a href="#/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>


    {/* <!-- JavaScript Libraries --> */}
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/tempusdominus/js/moment.min.js"></script>
    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

    {/* <!-- Template Javascript --> */}
    <script src="js/main.js"></script>
</body>
    </>
)
}

export default carDetails;