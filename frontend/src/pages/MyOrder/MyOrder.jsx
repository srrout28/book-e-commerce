import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import './MyOrder.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import AppDownload from '../../components/AppDownload/AppDownload';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyOrder() {

    const [data, setData] = useState([]);  //--useState hook

    //--from StoreContext--
    const {url, token} = useContext(StoreContext);

    //--fetch order data from backend
    const fetchOrder = async ()=> {
        const response = await axios.post(url+"/api/order/userorders", {}, {headers:{token}});
        setData(response.data.data);
        // console.log(response.data.data);
        toast.success("Data Refreshed!!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };
    const cancelOrder = async ()=> {
        // alert("Order cann't be cancelled...")
        toast.error("Order can't be cancelled...", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };

    //--fetch order data from backend on every render
    useEffect(() => {
        if(token){
            fetchOrder();
        }
    }, [token]);

  return (
    <>
        <div className="my-orders">
            <h2>My Order</h2>
            <div className="container">
                {data.map((order, index)=> {
                    return(
                        <div key={index} className="my-orders-order">
                            <img src={assets.parcel_icon} alt="" />
                            <p>{order.items.map((item, index)=>{
                                if(index === order.items.length-1){
                                     return item.name+" x "+item.quantity;
                                }
                                else{
                                    return item.name+" x "+item.quantity+", ";
                                }
                            })}</p>
                            <p>&#8377; {order.amount}</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                            <button onClick={cancelOrder}>Cancel Order</button>
                            <button onClick={fetchOrder}>Track Order</button>
                        </div>
                    )
                })}
            </div>
        </div>
        <AppDownload/>
    </>
  )
}

export default MyOrder