// 결과 화면 구성 컴포넌트

import React from "react";
import styles from "../../css/ResultScreen/ResultScreen.module.css";

function ResultScreen() {
  const progressPercentage = 70;

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
        <div className={styles["information"]}>
          <div className={styles["imageWithText"]}>
            <p className={styles["img1"]}>이미지 1</p>
            <p className={styles["title1"]}>조말론 향수</p>
            <p className={styles["content"]}>
              안녕하세요... 이것은 향수 취향에 적합한 조말론 향수 설명칸입니다..
              🧴
            </p>
          </div>
          <div className={styles["imageWithText"]}>
            <p className={styles["img2"]}>이미지 2</p>
            <p className={styles["title2"]}>로얄워터 향수</p>
            <p className={styles["content"]}>
              안녕하세요... 이것은 향수 취향에 적합한 로얄워터 향수
              설명칸입니다.. 🧴
            </p>
          </div>
        </div>
        <div className={styles["importance"]}>
          <p className={styles["proportion"]}>나와 같은 결과가 나온 비율</p>
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
        <div className={styles["share"]}>
          <div className={styles["sharetitle"]}>
            <p className={styles["resulttext"]}>결과공유</p>
          </div>
          <div className={styles["shareimg"]}>
            <div className={styles["instagram"]}>
              <img
                src="../../img/ResultScreen/instagram.png"
                alt="인스타그램"
              />
            </div>
            <div className={styles["kakao"]}>
              <img src="../../img/ResultScreen/kakaotalk.png" alt="카카오톡" />
            </div>
            <div className={styles["x"]}>
              <img src="../../img/ResultScreen/x.png" alt="x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultScreen;
