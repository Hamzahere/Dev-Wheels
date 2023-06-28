import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Select, DatePicker, TimePicker, Radio, Button } from 'antd';
import { createBooking } from '../../store/carReducer';
import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';

const CarBooking = () =>{
    const { Option } = Select;
    const {selectedCar } = useSelector((state) => state.cars);
    let { configuration, price , name,locations ,model} = selectedCar;
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(()=>{
      
    },[])

    const makeCall = (data) =>{
      dispatch(createBooking({
        data
      }))
      .then((bookingId) => {
        console.log("done==>",bookingId);
        // Do something with the booking ID if needed
      })
      .catch((error) => {
        console.log(error);
        // Handle any errors that occurred during booking creation
      });
    }

    const onSubmit = (data) => {
      console.log(data);
      makeCall(data); // Replace with your actual implementation of the makeCall function
    };
    // selectedCar: {
    //     configuration: 'Auto',
    //     price: '100',
    //     name: 'Kia Forte GT',
    //     locations: [
    //       'Omaha',
    //       'Washington'
    //     ],
    //     model: '2022'
    //   }
    // }
    return <>
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
        <div className="container pt-5 pb-3">
            <h1 className="display-4 text-uppercase mb-5">{name}</h1>
            <div className="row align-items-center pb-2">
                <div className="col-lg-6 mb-4">
                    <img className="img-fluid" src={require("../../assets/img/bg-banner.jpg")} alt=""/>
                </div>
                <div className="col-lg-6 mb-4">
                    <h4 className="mb-2">${price}/Day</h4>
                    <div className="d-flex mb-3">
                        <h6 className="mr-2">Rating:</h6>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small>(250)</small>
                        </div>
                    </div>
                    <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt</p>
                    <div className="d-flex pt-1">
                        <h6>Share on:</h6>
                        <div className="d-inline-flex">
                            <a className="px-2" href="#/"><i className="fab fa-facebook-f"></i></a>
                            <a className="px-2" href="#/"><i className="fab fa-twitter"></i></a>
                            <a className="px-2" href="#/"><i className="fab fa-linkedin-in"></i></a>
                            <a className="px-2" href="#/"><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-n3 mt-lg-0 pb-4">
                <div className="col-md-3 col-6 mb-2">
                    <i className="fa fa-car text-primary mr-2"></i>
                    <span>{model}</span>
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
    </div>
    {/* <!-- Detail End -->


    <!-- Car Booking Start --> */}
     
    {/* <!-- Car Booking End -->


    <!-- Vendor Start --> */}
     <form onSubmit={handleSubmit(onSubmit)}>
  <div className="container-fluid pb-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="mb-4">Personal Detail</h2>
          <div className="mb-5">
            <div className="row">
              <div className="col-6 form-group">
                <input
                  type="text"
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  placeholder="First Name"
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">This field is required</div>
                )}
              </div>
              <div className="col-6 form-group">
                <input
                  type="text"
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  placeholder="Last Name"
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">This field is required</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-6 form-group">
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Your Email"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && (
                  <div className="invalid-feedback">Please enter a valid email address</div>
                )}
              </div>
              <div className="col-6 form-group">
                <input
                  type="tel"
                  className={`form-control ${errors.mobileNumber ? 'is-invalid' : ''}`}
                  placeholder="Mobile Number"
                  {...register('mobileNumber', { required: true })}
                />
                {errors.mobileNumber && (
                  <div className="invalid-feedback">This field is required</div>
                )}
              </div>
            </div>
          </div>
          <h2 className="mb-4">Booking Detail</h2>
          <div className="mb-5">
            <div className="row">
              <div className="col-6 form-group">
                <select
                  className={`form-control ${errors.pickupLocation ? 'is-invalid' : ''}`}
                  style={{ height: '50px' }}
                  {...register('pickupLocation', { required: true })}
                >
                  <option value="">Pickup Location</option>
                  <option value="1">Location 1</option>
                  <option value="2">Location 2</option>
                  <option value="3">Location 3</option>
                </select>
                {errors.pickupLocation && (
                  <div className="invalid-feedback">Please select a pickup location</div>
                )}
              </div>
              <div className="col-6 form-group">
                <select
                  className={`form-control ${errors.dropLocation ? 'is-invalid' : ''}`}
                  style={{ height: '50px' }}
                  {...register('dropLocation', { required: true })}
                >
                  <option value="">Drop Location</option>
                  <option value="1">Location 1</option>
                  <option value="2">Location 2</option>
                  <option value="3">Location 3</option>
                </select>
                {errors.dropLocation && (
                  <div className="invalid-feedback">Please select a drop location</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-6 form-group">
                <input
                  type="date"
                  className={`form-control ${errors.pickupDate ? 'is-invalid' : ''}`}
                  placeholder="Pickup Date"
                  {...register('pickupDate', { required: true })}
                />
                {errors.pickupDate && (
                  <div className="invalid-feedback">This field is required</div>
                )}
              </div>
              <div className="col-6 form-group">
                <input
                  type="time"
                  className={`form-control ${errors.pickupTime ? 'is-invalid' : ''}`}
                  placeholder="Pickup Time"
                  {...register('pickupTime', { required: true })}
                />
                {errors.pickupTime && (
                  <div className="invalid-feedback">This field is required</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-6 form-group">
                <select
                  className={`form-control ${errors.adults ? 'is-invalid' : ''}`}
                  style={{ height: '50px' }}
                  {...register('adults', { required: true })}
                >
                  <option value="">Select Adult</option>
                  <option value="1">Adult 1</option>
                  <option value="2">Adult 2</option>
                  <option value="3">Adult 3</option>
                </select>
                {errors.adults && (
                  <div className="invalid-feedback">Please select the number of adults</div>
                )}
              </div>
              <div className="col-6 form-group">
                <select
                  className={`form-control ${errors.children ? 'is-invalid' : ''}`}
                  style={{ height: '50px' }}
                  {...register('children', { required: true })}
                >
                  <option value="">Select Child</option>
                  <option value="1">Child 1</option>
                  <option value="2">Child 2</option>
                  <option value="3">Child 3</option>
                </select>
                {errors.children && (
                  <div className="invalid-feedback">Please select the number of children</div>
                )}
              </div>
            </div>
            <div className="form-group">
              <textarea
                className={`form-control ${errors.specialRequest ? 'is-invalid' : ''}`}
                rows={3}
                placeholder="Special Request"
                {...register('specialRequest')}
              />
              {errors.specialRequest && (
                <div className="invalid-feedback">This field is required</div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="bg-secondary p-5 mb-5">
            <h2 className="text-primary mb-4">Payment</h2>
            <div className="form-group">
              <label className="form-check">
                <input
                  type="radio"
                  value="paypal"
                  className="form-check-input"
                  {...register('payment', { required: true })}
                />
                Paypal
              </label>
            </div>
            <div className="form-group">
              <label className="form-check">
                <input
                  type="radio"
                  value="directcheck"
                  className="form-check-input"
                  {...register('payment', { required: true })}
                />
                Direct Check
              </label>
            </div>
            <div className="form-group">
              <label className="form-check">
                <input
                  type="radio"
                  value="banktransfer"
                  className="form-check-input"
                  {...register('payment', { required: true })}
                />
                Bank Transfer
              </label>
              {errors.payment && (
                <div className="invalid-feedback">Please select a payment method</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>

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
}

export default CarBooking;