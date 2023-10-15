import { useEffect, useRef } from "react";

const Paypal = () => {
    const paypal = useRef(null);

    useEffect(() => {
        const createPaypalButton = () => {
            window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                                {
                                    description: "Cool looking table",
                                    amount: {
                                        currency_code: "USD",
                                        value: 655.0,
                                    },
                                },
                            ],
                        });
                    },
                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture();
                        console.log("Success", order);
                    },
                    onError: (err) => {
                        console.log(err);
                    },
                })
                .render(paypal.current);
        };

        createPaypalButton();
    }, []);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
};

export default Paypal;
