import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    mode: "onChange",
  });

  const payWithMonnify = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');

    const initializePayment = () => {
          MonnifySDK.initialize({
          amount: 1000, 
          currency: "NGN",
          reference: "CK_" + Math.floor((Math.random() * 1000000000) + 1),
          name: customerName,
          email: customerEmail,
          phone: customerPhone,
          apikey: "MK_TEST-1MC3T269JV",
          contactcode: "6388002704",
          paymentDescription: "Test Monnify",
          isTestMode: true
      });

    };
  const onSubmit = (data) => {
    setCustomerName(data.name);
    setCustomerEmail(data.email);
    setCustomerPhone(data.phone);
    initializePayment();
  };

  return (
    <section className='container mx-auto px-5 py-10'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mb-6 w-full'>
          <label htmlFor="name" className='text-[#5a7184] font-semibold block'>Customer Name:</label>
          <input
            type="text"
            id='name'
            {...register("name", {
              minLength: { value: 1, message: "Name length must be at least 1 character" },
              required: { value: true, message: "Name is required" },
            })}
            placeholder='Enter your name'
            className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.name ? "border-red-500" : "border-[#c3cad9]"}`}
          />
          {errors.name?.message && (
            <p className='text-red-500 text-xs mt-1'>{errors.name?.message}</p>
          )}
        </div>
        <div className='flex flex-col mb-6 w-full'>
          <label htmlFor="email" className='text-[#5a7184] font-semibold block'>Customer Email:</label>
          <input
            type="email"
            id='email'
            {...register("email", {
              pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Enter a valid email" },
              required: { value: true, message: "Email is required" },
            })}
            placeholder='Enter your email'
            className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad9]"}`}
          />
          {errors.email?.message && (
            <p className='text-red-500 text-xs mt-1'>{errors.email?.message}</p>
          )}
        </div>
        <div className='flex flex-col mb-6 w-full'>
          <label htmlFor="phone" className='text-[#5a7184] font-semibold block'>Customer Phone:</label>
          <input
            type="tel"
            id='phone'
            {...register("phone", {
              required: { value: true, message: "Phone number is required" },
            })}
            placeholder='Enter your phone number'
            className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.phone ? "border-red-500" : "border-[#c3cad9]"}`}
          />
          {errors.phone?.message && (
            <p className='text-red-500 text-xs mt-1'>{errors.phone?.message}</p>
          )}
        </div>
        <button
          type='submit'
        onClick="payWithMonnify()"
          disabled={!isValid}
          className='bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed'
        >
          Pay with Monnify
        </button>
      </form>
    </section>
  );
};
}

export default RegisterPage;