import { app, db } from "../../firebase/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCarsStart,
  selectCar,
  setCurrentPage,
  setItemsPerPage,
} from "../../store/carReducer";
import { DatePicker, Card, Spin, Pagination } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./CarListing.module.css"; // Import the CSS module
import SearchBar from "../../components/SearchBar";

const CarListing = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    carList,
    filteredCars,
    isLoading,
    error,
    searchedForCars,
    currentPage,
    itemsPerPage,
  } = useSelector((state) => state.cars);

  const stateSaveAndNavigate = (car) => {
    dispatch(selectCar(car));
    navigate(`/booking`);
  };
  useEffect(() => {
    console.log("Dispatching fetchCarsStart action");
    dispatch(fetchCarsStart());
    if (isLoading == true) {
      //return <p>Loading...</p>;
      console.log("Loading");
    }

    if (error) {
      return <p>Error: {error}</p>;
    }
  }, [dispatch]);

  const handlePageChange = (page, pageSize) => {
    dispatch(setCurrentPage(page));
  };

  const handleItemsPerPageChange = (current, size) => {
    dispatch(setCurrentPage(1));
    dispatch(setItemsPerPage(size));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (filteredCars.length > 0 ? filteredCars : carList).slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <body>
        <SearchBar></SearchBar>
        <div className="container-fluid py-5">
          <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
              <h1
                className={`display-4 text-uppercase text-center mb-5 ${styles.textStyle}`}
              >
                Find Your Car
              </h1>
              {isLoading && carList.length == 0 && <Spin indicator={antIcon} />}
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {currentItems.length === 0 && searchedForCars ? (
                  <p>No cars found.</p>
                ) : (
                  currentItems.map((car, index) => {
                    return (
                      <div className="col mb-4">
                        <Card className="h-100">
                          <div
                            className="rent-item mb-4"
                            style={{ marginLeft: "-10px" }}
                          >
                            <img
                              style={{ height: "200px", width: "350px" }}
                              className="mb-4"
                              src={car.imageURL}
                              alt=""
                            />

                            <div style={{ margin: "10px 0 0 0" }}>
                              <p className="">{car.name}</p>
                              <div className="d-flex justify-content-center ">
                                <div className="px-2">
                                  <i className="fa fa-car text-primary mr-1"></i>
                                  <span>{car.model}</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                  <i className="fa fa-cogs text-primary mr-1"></i>
                                  <span>{car.configuration}</span>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex justify-content-center">
                              <button
                                className={`btn btn-primary px-3 ${styles.buttonStyle}`}
                                onClick={() => stateSaveAndNavigate(car)}
                              >
                                ${car.price}/Day
                              </button>
                            </div>
                          </div>
                        </Card>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <div className="d-flex justify-content-center my-3">
              <Pagination
                current={currentPage}
                pageSize={itemsPerPage}
                total={
                  filteredCars.length > 0 ? filteredCars.length : carList.length
                }
                onChange={(page, pageSize) => handlePageChange(page, pageSize)}
                showSizeChanger
                onShowSizeChange={(current, size) =>
                  handleItemsPerPageChange(current, size)
                }
                showTotal={(total, range) =>
                  `${range[0]}-${range[1]} of ${total} cars`
                }
              />
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default CarListing;
