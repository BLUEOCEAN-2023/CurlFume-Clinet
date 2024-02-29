// 네번째 질문 구성 컴포넌트

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/AskScreen/Question4.module.css";

function Question4() {
  let navigate = useNavigate();

  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
    console.log("Selected button ID:", buttons[index].id);
    navigate("/perfume5");
  };

  const buttons = [
    { id: "Musk", text: "머스크" },
    { id: "Citrus", text: "시트러스" },
  ];

  return (
    <div className={styles["questionScreen"]}>
      <div className={styles["progressimg"]}>
        <img src="../../img/AskScreen/perfumeBottle04.png" alt="진행도" />
      </div>
      <div className={styles["questionbox"]}>
        <p className={styles["ask"]}>머스크 vs 시트러스</p>
        {buttons.map((button, index) => (
          <div className={styles["answer"]} key={button.id}>
            <button
              className={`${styles["answerbtn"]} ${
                selected === index ? styles["selected"] : ""
              }`}
              onClick={() => handleSelect(index)}
            >
              {button.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question4;
