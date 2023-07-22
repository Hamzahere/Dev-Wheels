const About = () =>{
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
            <h1 className="display-4 text-uppercase text-center mb-5">Welcome To <span className="text-primary">Dev Wheels</span></h1>
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <img className="w-75 mb-4" src={require("../../assets/img/about.png")} alt=""/>
                    <p>Welcome to our car rental website, where convenience meets exceptional service! With our user-friendly platform, you can easily rent a car for your next adventure. Whether you're planning a weekend getaway or a long road trip, we have a wide range of vehicles to suit your needs and preferences.

By creating an account and logging in, you unlock a personalized experience tailored just for you. Our intuitive booking system allows you to browse through available cars, select your desired dates, and effortlessly reserve your vehicle of choice. Moreover, once you're logged in, you can conveniently manage and view your bookings, making it a breeze to keep track of your upcoming trips.

At our car rental service, we prioritize customer satisfaction. Our fleet is regularly maintained to ensure a smooth and safe driving experience. We also offer flexible rental options, including daily, weekly, and monthly rates, so you can choose the duration that suits you best. Our dedicated customer support team is always ready to assist you with any inquiries or special requests.

Experience the freedom and convenience of renting a car with us. Start by creating an account and enjoy hassle-free bookings along with the peace of mind that comes with our reliable service. Your next adventure awaits!</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4 mb-2">
                    <div className="d-flex align-items-center bg-light p-4 mb-4" style={{"height": "150px"}}>
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4" style={{width: "100px", height: "100px"}}>
                            <i className="fa fa-2x fa-headset text-secondary"></i>
                        </div>
                        <h4 className="text-uppercase m-0">24/7 Car Rental Support</h4>
                    </div>
                </div>
                <div className="col-lg-4 mb-2">
                    <div className="d-flex align-items-center bg-secondary p-4 mb-4" style={{"height": "150px"}}>
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4" style={{width: "100px", height: "100px"}}>
                            <i className="fa fa-2x fa-car text-secondary"></i>
                        </div>
                        <h4 className="text-light text-uppercase m-0">Car Reservation Anytime</h4>
                    </div>
                </div>
                <div className="col-lg-4 mb-2">
                    <div className="d-flex align-items-center bg-light p-4 mb-4" style={{height: "150px"}}>
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4" style={{width: "100px", height: "100px"}}>
                            <i className="fa fa-2x fa-map-marker-alt text-secondary"></i>
                        </div>
                        <h4 className="text-uppercase m-0">Lots Of Pickup Locations</h4>
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
            <div className="px-5 bg-dark d-flex align-items-center justify-content-between" style={{ height: "350px" }}>
                <div className="text-left">
                    <h3 className="text-uppercase text-light mb-3">Looking for a car?</h3>
                    <p className="mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                    <a className="btn btn-primary py-2 px-4" href="#/">Start Now</a>
                </div>
                <img className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4" src={require("../../assets/img/banner-right.png")} alt="" />
            </div>
        </div>
    </div>
</div>



    {/* <!-- Banner End -->


    


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
                    <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="/#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="/#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="/#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-lg btn-dark btn-lg-square" href="/#"><i className="fab fa-instagram"></i></a>
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
                        <a href="#/"><img className="w-100" src={require("../../assets/img/gallery-1.jpg")} alt=""/></a>
                    </div>
                    <div className="col-4 px-1 mb-2">
                        <a href="#/"><img className="w-100" src={require("../../assets/img/gallery-2.jpg")} alt=""/></a>
                    </div>
                    <div className="col-4 px-1 mb-2">
                        <a href="#/"><img className="w-100" src={require("../../assets/img/gallery-3.jpg")} alt=""/></a>
                    </div>
                    <div className="col-4 px-1 mb-2">
                        <a href="#/"><img className="w-100" src={require("../../assets/img/gallery-4.jpg")} alt=""/></a>
                    </div>
                    <div className="col-4 px-1 mb-2">
                        <a href="#/"><img className="w-100" src={require("../../assets/img/gallery-5.jpg")} alt=""/></a>
                    </div>
                    <div className="col-4 px-1 mb-2">
                        <a href="#/"><img className="w-100" src={require("../../assets/img/gallery-6.jpg")} alt=""/></a>
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
    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}
    <a href="/#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>

</body>
</>
)
}

export default About;