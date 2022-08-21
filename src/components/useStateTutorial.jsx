import { useState } from "react";

export const UseStateTutorial = () => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [userConfirmedOrder, setUserConfirmedOrder] = useState(false);
    const [userSubmittedOrder, setUserSubmittedOrder] = useState(false);
    const quantityQuestion = "How many pizzas would you like?";
    const confirmQuestion = "I have read and agree to Castro Pizza Company's terms of service. All sales are final and I agree to the quantity of pizza pies I have ordered.";
    const orderButtonText = "Order";
    const quantityErrorMsg = "Invalid number of pizzas selected. Please select between 1 and 10 pizzas.";

    const onUserUpdatesQuantity = (event) => {
        setSelectedQuantity(event.target.value);
    }

    const onUserUpdatesConfirmation = () => {
        setUserConfirmedOrder(!userConfirmedOrder);
    }

    const onUserSubmitsOrder = () => {
        setUserSubmittedOrder(!userSubmittedOrder);
    }

    return (
        <div>
            <div hidden={userSubmittedOrder}>
                <label>
                    {quantityQuestion}
                    <input id={"quantitySelector"} type={"number"} min={1} max={10} value={selectedQuantity} onChange={onUserUpdatesQuantity} />
                </label>
            </div>

            <p hidden={selectedQuantity > 0 && selectedQuantity <= 10} style={{ color: "red" }}>{quantityErrorMsg}</p>

            <div hidden={userSubmittedOrder} >
                <label>
                    {confirmQuestion}
                    <input id={"confirmYourOrderCheckbox"} type={"checkbox"} value={userConfirmedOrder} onChange={onUserUpdatesConfirmation} />
                </label>
            </div>
            <div>
                <button id={"order"} disabled={!userConfirmedOrder || !(selectedQuantity > 0 && selectedQuantity <= 10)} hidden={userSubmittedOrder} value={userSubmittedOrder} onClick={onUserSubmitsOrder}>{orderButtonText}</button>
                <p hidden={!userSubmittedOrder}>{`Thanks your order has been submitted to our 🧑‍🍳 and your ${selectedQuantity} 🍕 will be delivered in 30 minutes or less.`}</p>
            </div>
        </div>

    )
}