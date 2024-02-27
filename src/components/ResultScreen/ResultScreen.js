// 결과 화면 구성 컴포넌트

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/ResultScreen/ResultScreen.module.css";

function ResultScreen() {
  return (
    <div className={styles["resultScreen"]}>
      <div className={styles["header"]}>
        <p>결과 나타내는 키워드</p>
      </div>
      <div className={styles["body"]}>
        <div className={styles["container"]}>
          <div className={styles["triangle"]}></div>
          <div className={styles["trapezoid"]}></div>
          <div className={styles["largeTrapezoid"]}></div>
        </div>
        <div className={styles["text"]}>
          <p className={styles["top"]}>탑</p>
          <p className={styles["middle"]}>미들</p>
          <p className={styles["base"]}>베이스</p>
        </div>
      </div>
    </div>
  );
}

export default ResultScreen;
