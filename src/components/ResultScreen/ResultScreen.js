// 결과 화면 구성 컴포넌트

import React from "react";
import styles from "../../css/ResultScreen/ResultScreen.module.css";

function ResultScreen() {
  const progressPercentage = 70;

  return (
    <>
      <div className={styles["header"]}>
        <p>결과 나타내는 키워드</p>
      </div>
      <div className={styles["body"]}>
        <div className={styles["container"]}>
          <div className={styles["topContainer"]}></div>
          <div className={styles["middleContainer"]}></div>
          <div className={styles["baseContainer"]}></div>
        </div>
        <div className={styles["incense"]}>
          <p className={styles["topExplan"]}>탑</p>
          <p className={styles["middleExplan"]}>미들</p>
          <p className={styles["baseExplan"]}>베이스</p>
        </div>
        <div className={styles["information"]}>
          <div className={styles["imageWithText"]}>
            <p className={styles["img"]}>이미지 1</p>
            <p className={styles["title"]}>조말론 향수</p>
            <p className={styles["content"]}>
              안녕하세요... 이것은 향수 취향에 적합한 조말론 향수 설명칸입니다..
              🧴
            </p>
          </div>
          <div className={styles["imageWithText"]}>
            <p className={styles["img"]}>이미지 2</p>
            <p className={styles["title"]}>로얄워터 향수</p>
            <p className={styles["content"]}>
              안녕하세요... 이것은 향수 취향에 적합한 로얄워터 향수
              설명칸입니다.. 🧴
            </p>
          </div>
        </div>
        <div className={styles["percent"]}>
          <p>나와 같은 결과가 나온 비율</p>
          <div className={styles["progressBarContainer"]}>
            <div
              className={styles["progressBar"]}
              style={{ width: `${progressPercentage}%` }}
            >
              <span
                className={styles["progressText"]}
              >{`${progressPercentage}%`}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["footer"]}>
        <div className={styles["sharetitle"]}>
          <p className={styles["resulttext"]}>결과공유</p>
        </div>
        <div className={styles["shareimg"]}>
          <img src="../../img/ResultScreen/kakaotalk.png" alt="카카오톡" />
          <img src="../../img/ResultScreen/instagram.png" alt="인스타그램" />
          <img src="../../img/ResultScreen/x.png" alt="x" />
        </div>
      </div>
    </>
  );
}

export default ResultScreen;
