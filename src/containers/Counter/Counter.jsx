import { useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(0);

    const addNumber = () => {
        setCounter(count => count + 1);
    }

    return(
        <div className="counter">
            <p className="counter_numbers">{counter}</p>
            <button className="counter_button-add" onClick={addNumber}>Click</button>
        </div>
    )
}

export default Counter;