// 시작 화면 구성 컴포넌트

import React from "react";
import styles from "../css/StartScreen.module.css";

function StartScreen() {
  return (
    <div className={styles.startScreen}>
      <div className={styles["backgroundImg"]}>
        <img src="../../img/StartScreen.png" alt="시작 화면 배경" />
      </div>
      <div className={styles["body"]}>
        <div className={styles["title"]}>
          <p>Curl Fume</p>
          <p className={styles["subtitle"]}>당신의 향기를 찾아드립니다</p>
          <div className={styles["startButton"]}>
            <button className={styles["testStart"]}>시작하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
