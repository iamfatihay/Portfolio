import React, { useState, useRef, useEffect } from "react";

// LazyImage component for performance optimization
// Loads images only when they enter the viewport
const LazyImage = ({ src, alt, className, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
        setHasError(false);
    };

    const handleError = () => {
        setHasError(true);
        console.error(`Failed to load image: ${src}`);
    };

    return (
        <div
            ref={imgRef}
            className={`lazy-image-container ${className}`}
            {...props}
        >
            {isInView && (
                <>
                    {!isLoaded && !hasError && (
                        <div className="image-placeholder">
                            <div className="placeholder-spinner"></div>
                        </div>
                    )}
                    {hasError ? (
                        <div className="image-error">
                            <p>Image failed to load</p>
                        </div>
                    ) : (
                        <img
                            src={src}
                            alt={alt}
                            onLoad={handleLoad}
                            onError={handleError}
                            className={`lazy-image ${
                                isLoaded ? "loaded" : "loading"
                            }`}
                            loading="lazy"
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default LazyImage;
