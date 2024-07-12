import React, { useContext, useEffect } from 'react';
import './cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import AppDownload from '../../components/AppDownload/AppDownload';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart({ setShowLogin }) {

  const { cartItems, book_list, removeFromCart, getTotalCartAmount, url, token } = useContext(StoreContext);
  const navigate = useNavigate();

  //--checkOut function--
  const checkOut = () => {
    if (!token) {
    setShowLogin(true)
    }
    navigate('/order');
  };

  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <b>Items</b>
            <b>Title</b>
            <b>Price</b>
            <b>Quantity</b>
            <b>Total</b>
            <b>Remove</b>
          </div>
          <br />
          <hr />
          {
            book_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <>
                    <div className="cart-items-title cart-items-item" key={index}>
                      <img src={url+"/images/"+item.image} alt="" />
                      <p>{item.name}</p>
                      <p>&#8377; {item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>&#8377; {item.price * cartItems[item._id]}</p>
                      <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                    </div>
                    <hr />
                  </>
                )
              }
            })
          }
        </div>
        <div className="cart-bottom">
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
            <button onClick={checkOut}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='promo code / cupon code' />
                <button onClick={()=> toast.error("Invalid Promocode")}>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppDownload />
    </>
  )
}

export default Cart;