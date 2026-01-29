import React, { useEffect, useRef } from 'react';

const ScrollRotate = ({ 
    children, 
    rotationSpeed = 0.08, // Default rotation speed
    scaleSpeed = 0.0002,  // Default zoom speed
    className = "" 
}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const scrollY = window.scrollY;
                
                // Calculate logic
                const rotation = scrollY * rotationSpeed;
                const scale = 1 + (scrollY * scaleSpeed);

                // Apply transform
                elementRef.current.style.transform = `rotate(${rotation}deg) scale(${scale})`;
            }
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);
        
        // Trigger once on mount to set initial state
        handleScroll();

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, [rotationSpeed, scaleSpeed]);

    return (
        <div 
            ref={elementRef} 
            className={`will-change-transform transition-transform duration-75 ease-out ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollRotate;