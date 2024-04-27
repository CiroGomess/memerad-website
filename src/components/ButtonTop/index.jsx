import React, { useState, useEffect } from 'react';
import './styles.css';
import upArrow from '../../assets/arrow.png'; // Make sure you have an up-arrow image in your assets

const ButtonTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > window.innerHeight * 0.05) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <section >
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-to-top">
                    <img src={upArrow} alt="Go to top" />
                </button>
            )}
        </section>
    );
};

export default ButtonTop;
