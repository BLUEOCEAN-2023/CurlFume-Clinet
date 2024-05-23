// PopupContent.jsx
import React from "react";

const PopupContent = ({ images, texts }) => {
  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <div className="grid-item" key={index}>
          <img src={image} alt={`img-${index}`} />
          <p>{texts[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default PopupContent;
