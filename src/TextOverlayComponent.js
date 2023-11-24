// TextOverlayComponent.js
import React, { useState } from 'react';
import './TextOverlayComponent.css';

const TextOverlayComponent = ({ onAddTextOverlay, imageSize, index }) => {
    const [content, setContent] = useState('');

    const handleAddTextOverlay = () => {
        const textOverlayToAdd = {
            content,
        };
        onAddTextOverlay(textOverlayToAdd, index);
        setContent('');
    };

    return (
        <div className="text-overlay-container">
            <input
                className="text-overlay-input"
                type="text"
                placeholder="Enter Text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className="text-overlay-button" onClick={handleAddTextOverlay}>
                Add Speech Bubble
            </button>
        </div>
    );
};

export default TextOverlayComponent;
