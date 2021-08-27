import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price})=> {

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51JT4lmKg6gDELosUgd487LhSq6X6q2NJWNB8G0TjYxN9kTqgFsGTnd1rWt973MiaQD0IOotI6pOkevbbEiIsiBxY00CzIKRMuY";

    const onToken = token => {
        console.log(token);
        alert("Payment maded!")
    };

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );

};

export default StripeButton;