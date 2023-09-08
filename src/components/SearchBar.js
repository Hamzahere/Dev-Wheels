import React, { useState } from "react";
import { Select, DatePicker, TimePicker, Input, Button, Row, Col } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { filterCars } from "../store/carReducer";
// import 'antd/dist/antd.css';

const { Option } = Select;

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [fromTimestamp, setFromTimestamp] = useState("");
  const [toTimestamp, setToTimestamp] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [modelInput, setModelInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    const searchData = {
      name: searchInput,
      location: locationInput,
      model: modelInput,
      price: priceInput,
      from: { timestampValue: fromTimestamp },
      to: { timestampValue: toTimestamp },
    };

    console.log("searchData==>", searchData);
    dispatch(filterCars(searchData));
    // dispatch(filterCars(searchInput));
  };

  const handleLocationInputChange = (value) => {
    setLocationInput(value);
  };

  const handleModelInputChange = (event) => {
    setModelInput(event.target.value);
  };

  const handlePriceInputChange = (event) => {
    setPriceInput(event.target.value);
  };

  const handleFromTimestampChange = (value) => {
    if (value) {
      const formattedTimestamp = value.toISOString();
      setFromTimestamp(formattedTimestamp);
    } else {
      setFromTimestamp("");
    }
  };

  const handleToTimestampChange = (value) => {
    if (value) {
      const formattedTimestamp = value.toISOString();
      setToTimestamp(formattedTimestamp);
    } else {
      setToTimestamp("");
    }
  };
  return (
    <div className={`container-fluid bg-white pt-3 px-lg-5`}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Select
            className="custom-select"
            style={{ width: "100%" }}
            size="large"
            placeholder="Pickup Location"
            onChange={handleLocationInputChange}
          >
            <Option value="Seattle">Seattle</Option>
            <Option value="Boston">Boston</Option>
            <Option value="Chicago">Chicago</Option>
            <Option value="Omaha">Omaha</Option>
            <Option value="Washington">Washington</Option>
            <Option value="New York">New York</Option>
            <Option value="San Francisco">San Francisco</Option>
            <Option value="Houston">Houston</Option>
            <Option value="Kansas City">Kansas City</Option>
            <Option value="Ottawa">Ottawa</Option>
          </Select>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DatePicker
            className="custom-select"
            size="large"
            style={{ width: "100%" }}
            placeholder="From"
            onChange={handleFromTimestampChange}
            value={fromTimestamp ? moment(fromTimestamp) : null}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DatePicker
            className="custom-select"
            size="large"
            style={{ width: "100%" }}
            placeholder="To"
            onChange={handleToTimestampChange}
            value={toTimestamp ? moment(toTimestamp) : null}
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Input
            value={searchInput}
            onChange={handleInputChange}
            className="custom-select"
            size="large"
            style={{ width: "100%" }}
            placeholder="Car Name"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Input
            value={modelInput}
            onChange={handleModelInputChange}
            className="custom-select"
            size="large"
            style={{ width: "100%" }}
            placeholder="Model"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Input
            value={priceInput}
            onChange={handlePriceInputChange}
            className="custom-select"
            size="large"
            style={{ width: "100%" }}
            placeholder="Price"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Button
            onClick={handleSearchClick}
            className="btn btn-primary btn-block"
            style={{ height: "50px", width: "100%" }}
            type="primary"
          >
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
