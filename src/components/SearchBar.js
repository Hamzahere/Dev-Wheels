import React, { useState } from 'react';
import { Select, DatePicker, TimePicker, Input, Button, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterCars } from '../store/carReducer';

// import 'antd/dist/antd.css';

const { Option } = Select;

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');


  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(filterCars(searchInput));
  };
  return (
    <div className="container-fluid bg-white pt-3 px-lg-5">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Select
            className="custom-select"
            style={{ height: '50px', width: '100%' }}
            placeholder="Pickup Location"
          >
            <Option value="1">Location 1</Option>
            <Option value="2">Location 2</Option>
            <Option value="3">Location 3</Option>
          </Select>
        </Col>
        {/* <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Select
            className="custom-select"
            style={{ height: '50px', width: '100%' }}
            placeholder="Drop Location"
          >
            <Option value="1">Location 1</Option>
            <Option value="2">Location 2</Option>
            <Option value="3">Location 3</Option>
          </Select>
        </Col> */}
        {/* <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <DatePicker
            className="custom-select"
            style={{ height: '50px', width: '100%' }}
            placeholder="Pickup Date"
          />
        </Col> */}
        {/* <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <TimePicker
            className="custom-select"
            style={{ height: '50px', width: '100%' }}
            placeholder="Pickup Time"
          />
        </Col> */}
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Input
          value={searchInput}
          onChange={handleInputChange}
            className="custom-select"
            style={{ height: '50px', width: '100%' }}
            placeholder="Car Name"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Input
            className="custom-select"
            style={{ height: '50px', width: '100%' }}
            placeholder="Model"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Input
            className="custom-select"
            style={{ height: '50px', width: '100%' }}
            placeholder="Price"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Button
          onClick={handleSearchClick}
            className="btn btn-primary btn-block"
            style={{ height: '50px', width: '100%' }}
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