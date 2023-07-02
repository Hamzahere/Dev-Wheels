import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooking } from '../../store/carReducer';
import { Table } from 'antd';

const Booking = () => {
  const dispatch = useDispatch();
  const email = 'hamzahere99@gmail.com'; // Replace with the user's email


  //const bookings = useSelector((state) => state.cars.booking);
  const { bookings } = useSelector((state) => state.cars);
  console.log("bookings==>", bookings);

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobileNumber',
      key: 'mobileNumber',
    },
    // Add more columns as needed
  ];

  const dataSource = bookings && Array.isArray(bookings) ? bookings.map((booking) => ({
    key: booking.id,
    firstName: booking?.data?.firstName || '',
    lastName: booking?.data?.lastName || '',
    mobileNumber: booking?.data?.mobileNumber || '',

    // Add more properties as needed
  })) : [];

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default Booking;
