// 두번째 질문 구성 컴포넌트

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/AskScreen/Question2.module.css";

function Question2() {
  let navigate = useNavigate();

  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
    navigate("/perfume3");
  };

  const buttons = [
    { id: 1, text: "첫번째 대답" },
    { id: 2, text: "두번째 대답" },
    { id: 3, text: "세번째 대답" },
    { id: 4, text: "네번째 대답" },
  ];

  return (
    <div className={styles["questionScreen"]}>
      <div className={styles["progress"]}>
        <img src="../../img/AskScreen/perfumeBottle02.png" alt="진행도" />
      </div>
      <div className={styles["question"]}>
        <p className={styles["ask"]}>두번째 지이이이일무우우운</p>
      </div>
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
  );
}

export default Question2;
