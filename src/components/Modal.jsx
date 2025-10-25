import { useState } from 'react';

export const Modal = ({ isRunning }) => {
    const [isActive, setIsActive] = useState(false);
    
    const toggleModal = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <button 
                className={isRunning ? "btn" : "none"} 
                onClick={toggleModal}
            >
                BUY NOW
            </button>
            <div className={`modal ${isActive ? "active" : ""}`}>
                <div className="modal-body">
                    <h2>Special Offer!</h2>
                    <p>Get 50% off if you buy within the next 10 seconds!</p>
                    <button onClick={toggleModal}>Close</button>
                </div>
            </div>
        </>
    );
}