// ImageComponent.js
import React, { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import './ImageComponent.css';

const ImageComponent = ({ imageUrl, texts, index_image }) => {
    const containerRef = useRef();

    useEffect(() => {
        const image = new Image();
        image.src = imageUrl;

        image.onload = () => {
            const container = containerRef.current;
            container.style.width = `${image.width}px`;
            container.style.height = `${image.height}px`;
        };
    }, [imageUrl]);

    return (
        <div ref={containerRef} className={`image-container-${index_image}`} style={{ position: 'relative' }}>
            <img className={`image-${index_image}`} src={imageUrl} alt="response" />
            {texts.map((text, index) => (
                <Draggable
                    key={index}
                    axis="both"
                    handle={`.handle-${index}`}
                    defaultPosition={{ x: 0, y: 0 }}
                    position={null}
                    grid={[25, 25]}
                    scale={1}
                    bounds={`.image-container-${index_image}`}
                >
                    <div className={`handle handle-${index}`} style={{ display: 'inline-block', whiteSpace: 'nowrap', cursor: 'pointer' }}>
                        {text.content}
                    </div>
                </Draggable>
            ))}
        </div>
    );
};

export default ImageComponent;