// Popup.js
import React from "react";
// import "./Popup.scss"; // 팝업 스타일링을 위한 CSS 파일

const Popup = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          닫기
        </button>
        {data.map((item, index) => (
          <div key={index} className="popup-item">
            <img src={item.image} alt={`Popup Item ${index + 1}`} />
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popup;
