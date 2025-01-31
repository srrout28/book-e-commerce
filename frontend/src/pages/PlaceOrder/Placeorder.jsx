import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './place.css';
import { StoreContext } from '../../context/StoreContext';
import AppDownload from '../../components/AppDownload/AppDownload';
import { toast } from 'react-toastify';

function Placeorder() {
  //-- useNavigate Hook--
  const navigate = useNavigate();

  //--getting from StoreContext
  const { getTotalCartAmount, token, book_list, cartItems, url } = useContext(StoreContext);

  //--useState for manage data 
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  //--onChangeHanler for input values
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  //--place order funciton--
  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];
    book_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    
    //--storing order Data in a variable
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount()>=500 ? getTotalCartAmount(): getTotalCartAmount()+49,
    };

    //--placing order
    let response = await axios.post(url+"/api/order/place", orderData, {headers:{token}});

    //--checking response
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else {
      alert("Payment failed!!!Order placed with Cash on Delivery(COD)")
      // toast.warn('Payment failed!!!Order placed with Cash on Delivery(COD)', {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      //   });
      const {session_url} = response.data;
      window.location.replace("/myorders");
    }
  };

  //--cash on delivery option
  const cashOnDelivery = async (event) =>{
    event.preventDefault();
    if(!data.firstName || !data.lastName || !data.email || !data.phone || !data.zipcode){
      // alert('Please fill all the fields');
      toast.warn('All fields are mandatory', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return;
    }

    let orderItems = [];
    book_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    
    //--storing order Data in a variable
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount()>=500 ? getTotalCartAmount(): getTotalCartAmount()+49,
    };

    //--placing order
    let response = await axios.post(url+"/api/order/place", orderData, {headers:{token}});

    //--checking response
    alert("COD Order placed Successfully!!!");
      //  toast.success('COD Order placed Successfully!!!', {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      //   });
    const {session_url} = response.data;
    window.location.replace("/myorders");

  };


  //--redirecting to cart page if user is not logged in or if cart is empty
  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount() === 0){
      navigate('/cart')
    }
  },[token]);

  return (
    <>
      {/* <form className="place-order"> */}
      <form className="place-order" onSubmit={placeOrder}>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' />
            <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
          </div>
          <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
          <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
          <div className="multi-fields">
            <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
            <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='PIN code' />
            <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
          </div>
          <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone/Mobile' />
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>&#8377; {getTotalCartAmount()}</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>&#8377; {getTotalCartAmount()==0 ? 0:getTotalCartAmount()>=500 ? 0: 49}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>&#8377; {getTotalCartAmount()==0 ? 0:getTotalCartAmount()>=500 ? getTotalCartAmount(): getTotalCartAmount()+49}</b>
              </div>
            </div>
            <button type='submit' >Pay Now</button>
            <button type='button' onClick={cashOnDelivery}>Cash on Delivery (COD)</button>
          </div>
        </div>
      </form>
      <AppDownload />
    </>
  )
};

export default Placeorder;