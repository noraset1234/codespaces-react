import React, { useRef, useState } from 'react';

// Component to display BMI category based on BMI value
const BmiText = ({ bmi }) => {
    if (bmi < 18.5)
        return (<h1>Underweight</h1>);
    if (bmi > 30)
        return (<h1>Overweight</h1>);
    return (<h1>Normal</h1>);
};

export default function Bmi() {
    const W_input = useRef(null); // Ref for weight input
    const H_input = useRef(null); // Ref for height input
    const [Bmi, setBmi] = useState(0); // State to store calculated BMI

    // Function to calculate BMI
    const calBmi = () => {
        const w = parseFloat(W_input.current.value); // Get weight value
        const h = parseFloat(H_input.current.value) / 100; // Convert height to meters
        
        if (!isNaN(w) && !isNaN(h) && h > 0) {
            setBmi(w / Math.pow(h, 2)); // BMI formula
        } else {
            alert("Please enter valid height and weight values.");
        }
    };

    return (
        <>
            <h3>BMI Calculator</h3>
            Weight: <input ref={W_input} type="number" placeholder="Weight (kg)" /> kg<br />
            Height: <input ref={H_input} type="number" placeholder="Height (cm)" /> cm<br />
            <button onClick={calBmi}>Calculate!</button><br />

            {/* Display BMI value */}
            {Bmi !== 0 && (
                <>
                    BMI value: {Bmi.toFixed(2)}<br />
                    <BmiText bmi={Bmi} />
                </>
            )}
        </>
    );
}
