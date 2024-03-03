import { useSelector, useDispatch } from "react-redux";
import {
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Radio,
  Button,
} from "antd";
import { createBookingSuccess } from "../../store/carReducer";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faGasPump,
  faCar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const CarBooking = () => {
  const { Option } = Select;
  const { selectedCar } = useSelector((state) => state.cars);
  const { currentUser } = useSelector((state) => state.user);
  let {
    configuration,
    price,
    name,
    locations,
    model,
    description,
    availibility_one,
    imageURL,
  } = selectedCar;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    console.log(availibility_one);
  }, []);

  function convertTimestampToDateString(timestamp) {
    const date = new Date(timestamp.seconds * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const makeCall = (data) => {
    dispatch(
      createBookingSuccess({
        data,
      })
    );
  };

  const onSubmit = (data) => {
    if (currentUser != {}) {
      data.user = currentUser;
    }
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
  return (
    <>
      <body>
        <div className="container-fluid pt-5">
          <div className="container pt-5 pb-3">
            <h1 className="display-4 text-uppercase mb-5">{name}</h1>
            <div className="row align-items-center pb-2">
              <div className="col-lg-6 mb-4">
                <img className="img-fluid" src={imageURL} alt="" />
              </div>
              <div className="col-lg-6 mb-4">
                <h4 className="mb-2">${price}/Day</h4>
                <div className="d-flex mb-3">
                  <h6 className="mr-2">Rating:</h6>
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  ))}
                </div>
                <p> {description}</p>
              </div>
            </div>
            <div className="row mt-n3 mt-lg-0 pb-4">
              <div className="col-md-3 col-6 mb-2">
                <i className="fa fa-car text-primary mr-2"></i>
                <span>{model}</span>
                <span>
                  <FontAwesomeIcon icon={faCar} />
                </span>
              </div>
              <div className="col-md-3 col-6 mb-2">
                <i className="fa fa-cogs text-primary mr-2"></i>
                <span>Automatic</span>
                {/* <span><FontAwesomeIcon icon={faSteeringWheel} /></span> */}
              </div>
              <div className="col-md-3 col-6 mb-2">
                <i className="fa fa-road text-primary mr-2"></i>
                <span>20km/liter</span>
                <span>
                  <FontAwesomeIcon icon={faGasPump} />
                </span>
              </div>
              <div className="col-md-3 col-6 mb-2">
                <i className="fa fa-eye text-primary mr-2"></i>
                <span>GPS Navigation</span>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
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
                          className={`form-control ${
                            errors.firstName ? "is-invalid" : ""
                          }`}
                          placeholder="First Name"
                          {...register("firstName", { required: true })}
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback">
                            This field is required
                          </div>
                        )}
                      </div>
                      <div className="col-6 form-group">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.lastName ? "is-invalid" : ""
                          }`}
                          placeholder="Last Name"
                          {...register("lastName", { required: true })}
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback">
                            This field is required
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 form-group">
                        <input
                          type="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          placeholder="Your Email"
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">
                            Please enter a valid email address
                          </div>
                        )}
                      </div>
                      <div className="col-6 form-group">
                        <input
                          type="tel"
                          className={`form-control ${
                            errors.mobileNumber ? "is-invalid" : ""
                          }`}
                          placeholder="Mobile Number"
                          {...register("mobileNumber", { required: true })}
                        />
                        {errors.mobileNumber && (
                          <div className="invalid-feedback">
                            This field is required
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <h2 className="mb-4">Booking Detail</h2>
                  <div className="mb-5">
                    <div className="row">
                      <div className="col-6 form-group">
                        <select
                          className={`form-control ${
                            errors.pickupLocation ? "is-invalid" : ""
                          }`}
                          style={{ height: "50px" }}
                          {...register("pickupLocation", { required: true })}
                        >
                          <option value="">Select pickup location</option>{" "}
                          {/* Empty option */}
                          {selectedCar.locations.map((location, index) => (
                            <option key={`pickup-${index}`} value={location}>
                              {location}
                            </option>
                          ))}
                        </select>
                        {errors.pickupLocation && (
                          <div className="invalid-feedback">
                            Please select a pickup location
                          </div>
                        )}
                      </div>
                      <div className="col-6 form-group">
                        <select
                          className={`form-control ${
                            errors.dropLocation ? "is-invalid" : ""
                          }`}
                          style={{ height: "50px" }}
                          {...register("dropLocation", { required: true })}
                        >
                          <option value="">Select dropdown location</option>{" "}
                          {/* Empty option */}
                          {selectedCar.locations.map((location, index) => (
                            <option key={`pickup-${index}`} value={location}>
                              {location}
                            </option>
                          ))}
                        </select>
                        {errors.dropLocation && (
                          <div className="invalid-feedback">
                            Please select a drop location
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 form-group">
                        <input
                          type="date"
                          className={`form-control ${
                            errors.pickupDate ? "is-invalid" : ""
                          }`}
                          placeholder="Pickup Date"
                          {...register("pickupDate", { required: true })}
                          max={convertTimestampToDateString(
                            selectedCar.availibility_one.to
                          )}
                        />
                        {errors.pickupDate && (
                          <div className="invalid-feedback">
                            This field is required
                          </div>
                        )}
                      </div>
                      <div className="col-6 form-group">
                        <input
                          type="time"
                          className={`form-control ${
                            errors.pickupTime ? "is-invalid" : ""
                          }`}
                          placeholder="Pickup Time"
                          {...register("pickupTime", { required: true })}
                        />
                        {errors.pickupTime && (
                          <div className="invalid-feedback">
                            This field is required
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 form-group">
                        <select
                          className={`form-control ${
                            errors.adults ? "is-invalid" : ""
                          }`}
                          style={{ height: "50px" }}
                          {...register("adults", { required: true })}
                        >
                          <option value="">Select Adults</option>
                          <option value="1">1 Adult</option>
                          <option value="2">2 Adult</option>
                          <option value="3">3 Adult</option>
                        </select>
                        {errors.adults && (
                          <div className="invalid-feedback">
                            Please select the number of adults
                          </div>
                        )}
                      </div>
                      <div className="col-6 form-group">
                        <select
                          className={`form-control ${
                            errors.children ? "is-invalid" : ""
                          }`}
                          style={{ height: "50px" }}
                          {...register("children", { required: true })}
                        >
                          <option value="">Select Children</option>
                          <option value="0">No Child</option>
                          <option value="1">1 Child</option>
                          <option value="2">2 Child</option>
                          <option value="3">3 Child</option>
                        </select>
                        {errors.children && (
                          <div className="invalid-feedback">
                            Please select the number of children
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className={`form-control ${
                          errors.specialRequest ? "is-invalid" : ""
                        }`}
                        rows={3}
                        placeholder="Special Request"
                        {...register("specialRequest")}
                      />
                      {errors.specialRequest && (
                        <div className="invalid-feedback">
                          This field is required
                        </div>
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
                          {...register("payment", { required: true })}
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
                          {...register("payment", { required: true })}
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
                          {...register("payment", { required: true })}
                        />
                        Bank Transfer
                      </label>
                      {errors.payment && (
                        <div className="invalid-feedback">
                          Please select a payment method
                        </div>
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
      </body>
    </>
  );
};

export default CarBooking;
