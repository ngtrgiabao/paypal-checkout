import { useState } from "react";
import "./App.css";
import Paypal from "./components/Paypal";

function App() {
    const [checkout, setCheckout] = useState(false);

    return (
        <>
            {checkout ? (
                <Paypal />
            ) : (
                <button onClick={() => setCheckout(true)}>Checkout</button>
            )}
        </>
    );
}

export default App;
