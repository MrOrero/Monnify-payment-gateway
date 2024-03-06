import React from 'react';

const App = () => {

  
  function initializeMonnifySDK() {
    const { MonnifySDK } = window;
    console.log("MonnifySDK", window.MonnifySDK);

    if (MonnifySDK) {
        MonnifySDK.initialize({
            amount: 100,
            currency: "NGN",
            reference: String(new Date().getTime()),
            customerFullName: "Damilare Ogunnaike",
            customerEmail: "ogunnaike.damilare@gmail.com",
            apiKey: "MK_TEST_TXR83EEGA8",
            contractCode: "8116878414",
            paymentDescription: "Lahray World",
            metadata: {
                "name": "Damilare",
                "age": 45
            },
            onLoadStart: () => {
                console.log("loading has started");
            },
            onLoadComplete: () => {
                console.log("SDK is UP");
            },
            onComplete: (response) => {
                console.log(response);
            },
            onClose: (data) => {
                console.log(data);
            }
        });
    } else {
        console.error("MonnifySDK not available");
    }

  }
  return (
    <div>
      <button onClick={initializeMonnifySDK}>Initialize Monnify SDK</button>
    </div>
  );
};

export default App;