// 세번째 질문 구성 컴포넌트

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/AskScreen/Question3.module.css";

function Question3() {
  let navigate = useNavigate();

  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
    console.log("Selected button ID:", buttons[index].id);
    navigate("/perfume4");
  };

  const buttons = [
    { id: "Floral", text: "플로럴" },
    { id: "Fruity", text: "프루티" },
  ];

  return (
    <div className={styles["questionScreen"]}>
      <div className={styles["progressimg"]}>
        <img src="../../img/AskScreen/perfumeBottle03.png" alt="진행도" />
      </div>
      <div className={styles["questionbox"]}>
        <p className={styles["ask"]}>플로럴 vs 프루티</p>
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

export default Question3;
