import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';  // Adjust this to your Django server URL
const RAZORPAY_SCRIPT_URL = 'https://checkout.razorpay.com/v1/checkout.js';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        address: '',
        country: '',
        city: '',
        state: '',
        pincode: '',
        totalAmount: '',
    });
    const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

    useEffect(() => {
        const loadRazorpayScript = () => {
            const script = document.createElement('script');
            script.src = RAZORPAY_SCRIPT_URL;
            script.async = true;
            script.onload = () => {
                setIsRazorpayLoaded(true);
            };
            document.body.appendChild(script);
        };

        if (!window.Razorpay) {
            loadRazorpayScript();
        } else {
            setIsRazorpayLoaded(true);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const createOrder = async () => {
        try {
            const response = await axios.post(`${API_URL}/app/create-order/`, {
                amount: formData.totalAmount
            });
            return response.data;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    };

    const verifyPayment = async (paymentDetails) => {
        try {
            const response = await axios.post(`${API_URL}/app/verify-payment/`, paymentDetails);
            return response.data.verified;
        } catch (error) {
            console.error('Error verifying payment:', error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isRazorpayLoaded) {
            alert('Razorpay is still loading. Please try again in a moment.');
            return;
        }
        try {
            const orderData = await createOrder();

            const options = {
                key: orderData.key,
                amount: orderData.amount,
                currency: orderData.currency,
                name: "MYFIT",
                description: "Test Transaction",
                order_id: orderData.order_id,
                handler: async function (response) {
                    const isVerified = await verifyPayment({
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature
                    });

                    if (isVerified) {
                        console.log('Payment verified successfully');
                        // Handle successful payment (e.g., show success message, redirect to order confirmation page)
                    } else {
                        console.error('Payment verification failed');
                        // Handle verification failure
                    }
                },
                prefill: {
                    name: `${formData.fname} ${formData.lname}`,
                    email: formData.email,
                    contact: formData.mobile
                },
                theme: {
                    color: "#3399cc"
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error('Error in checkout process:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <div className="container d-flex justify-content-center mt-5">
            <br /><br /><br /><br />
            <div className="card p-4 shadow-lg" style={{ width: "60%" }}>
                <h2 className="mb-4 text-center" style={{ color: "#07a291db" }}>
                    Checkout Form
                </h2>
                <form onSubmit={handleSubmit} className="d-flex justify-content-center" style={{ flexDirection: "column" }}>
                    <div className="row">
                        <div className="col-6">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                    name="fname"
                                    value={formData.fname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                    name="lname"
                                    value={formData.lname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Mobile"
                                    name="mobile"
                                    minLength={10}
                                    maxLength={10}
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="State"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Pincode"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Total Amount"
                                name="totalAmount"
                                value={formData.totalAmount}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        style={{
                            background: "#07a291db",
                            borderColor: "#07a291db",
                            fontSize: "19px",
                        }}
                        className="btn btn-primary"
                        disabled={!isRazorpayLoaded}
                    >
                        {isRazorpayLoaded ? 'Checkout' : 'Loading Razorpay...'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;