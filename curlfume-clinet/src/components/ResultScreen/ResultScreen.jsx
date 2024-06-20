import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "../../css/ResultScreen/ResultScreen.scss";
import PopupData from "./PopupDataList.json";
import ResultList from "./ResultList.json";
import Loading from "./Loading";
import headerImg from "../../IMG/ResultScreen/header.jpg";
import homeIcon from "../../IMG/ResultScreen/homeIcon.png";

const ResultScreen = () => {
  const { result } = useParams();
  const data = ResultList.find((item) => item.path === result);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(null);
  const [totalN, setTotalN] = useState(0);
  const [includeN, setIncludeN] = useState(0);
  const [percent, setPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const movePage = useNavigate();

  if (!data) {
    return <div>데이터를 찾을 수 없습니다.</div>;
  }

  const mainPicture = data.picture;
  const perfumes = data.perfume.map((perfume) => ({
    ...perfume,
    image: perfume.image,
  }));
  const keywords = data.keyword;
  const chartColors = data.chartColor;

  // 모달창
  const openModal = (popup) => {
    setSelectedPopup(popup);
    setModalIsOpen(true);
    document.body.classList.add("body-no-scroll");
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPopup(null);
    document.body.classList.remove("body-no-scroll");
  };

  // useEffect 사용하여 컴포넌트 언마운트 시 스크롤 방지 해제
  useEffect(() => {
    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, []);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 클래스 추가
    document.body.classList.add("result-body-page");

    // 컴포넌트가 언마운트될 때 클래스 제거
    return () => {
      document.body.classList.remove("result-body-page");
    };
  }, []);

  // 홈버튼
  const goToHome = () => {
    movePage("/");
  };

  // 결과 그래프 관련
  const perfume = data.path;

  // perfume 값을 서버에 저장하고 totalN, includeN, percent 값 가져오기
  useEffect(() => {
    fetch("/api/fetch_TypeData.php", {
      // 프록시 설정에 맞게 경로 변경
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ perfume }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setTotalN(data.totalN);
        setIncludeN(data.includeN);
        setPercent(data.percent);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [perfume]);

  // 그래프의 원의 둘레 구하기 (2 * Math.PI * 반지름)
  const circumference = 2 * Math.PI * 90;
  // 그래프의 채워진 부분 계산 (percent에 비례)
  const filled = (percent / 100) * circumference;
  // 그래프의 빈 부분 계산
  const unfilled = circumference - filled;

  // useEffect 사용하여 스크롤바 색상 설정
  useEffect(() => {
    const scrollbarStyle = document.createElement("style");
    scrollbarStyle.innerHTML = `
      .result-body-page::-webkit-scrollbar {
        width: 0.9vw;
      }
      
      .result-body-page::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, ${chartColors
          .map((color) => `${color.color} ${color.offset}`)
          .join(", ")});
        border-radius: 0.7vw;
      }

      .result-body-page::-webkit-scrollbar-track {
        background: #ffffff;
      }

      .modal-scroll-custom::-webkit-scrollbar {
        width: 0.5vw;
      }

      .modal-scroll-custom::-webkit-scrollbar-thumb {
        background: black;
        border-radius: 0.5vw;
      }

      .modal-scroll-custom::-webkit-scrollbar-track {
        background: #d9d9d9;
      }
    `;
    document.head.appendChild(scrollbarStyle);

    return () => {
      document.head.removeChild(scrollbarStyle);
    };
  }, [chartColors]);

  // 로딩 중 화면을 보여주기 위한 조건부 렌더링
  if (isLoading) {
    return (
      <div className="loading-screen">
        <Loading />
        <p className="loading-text">결과를 가져오는 중입니다...</p>
      </div>
    );
  }

  return (
    <div className="result-screen">
      <header>
        <img src={headerImg} alt="Header" className="header-img" />
      </header>

      <main>
        {/* 해당결과 그림 */}
        <div className="header-content">
          <img
            src={mainPicture}
            alt={`${data.path} Picture`}
            className="main-picture"
          />
          <div className="keywords">
            {keywords.map((keyword, index) => (
              <h1 key={index} className="keyword">
                # {keyword.content}
              </h1>
            ))}
          </div>
        </div>

        {/* 추천향수정보 */}
        <div className="perfumes">
          {perfumes.map((perfume, index) => (
            <div key={index} className="perfume">
              <img
                className="perfume-img"
                src={perfume.image}
                alt={`${perfume.title} Image`}
              />
              <p className="perfume-title">{perfume.title}</p>
              <p className="perfume-detail">{perfume.detail}</p>
            </div>
          ))}
        </div>

        {/* 그래프 */}
        <div className="chart-container">
          <div className="blank-container">
            <div className="chart">
              <svg viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#E2E2E2"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeDasharray={`${filled} ${unfilled}`}
                  strokeDashoffset={circumference / 4}
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    {chartColors.map((color, index) => (
                      <stop
                        key={index}
                        offset={color.offset}
                        stopColor={color.color}
                      />
                    ))}
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="24"
                  fill="black"
                >
                  {percent}%
                </text>
              </svg>
            </div>

            <div className="text-container">
              <p className="chart-text-perfume">{perfume}</p>
              <hr />
              <p className="chart-text-percent">
                {totalN}명 중 {includeN}명
              </p>
            </div>
          </div>
        </div>

        {/* 모달창 버튼*/}
        <div className="button-container">
          {PopupData.map((popup, index) => (
            <button
              key={index}
              onClick={() => openModal(popup)}
              className="popup-button"
            >
              <img
                src={`/IMG/popup/${popup.id}`}
                alt={`${popup.title} Button`}
                className="popup-button-image"
              />
              <span className="popup-button-text">{popup.title}</span>
            </button>
          ))}
        </div>

        {/* 모달창 구현 */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="popup-modal modal-scroll-custom"
          // overlayClassName="popup-overlay"
        >
          <div className="popup-content-container">
            {selectedPopup && (
              <div className="popup-content">
                <p className="popup-title">{selectedPopup.title}</p>
                <div className="popup-grid">
                  {selectedPopup.data.map((item, idx) => (
                    <div key={idx} className="popup-item">
                      <img
                        src={`/IMG/popup/${item.image}`}
                        className="popup-item-image"
                        alt={`${item.content}`}
                      />
                      <p className="item-title-content">{item.title}</p>
                      <p className="item-content">{item.content}</p>
                    </div>
                  ))}
                </div>
                <button onClick={closeModal} className="close-button">
                  닫기
                </button>
              </div>
            )}
          </div>
        </Modal>
      </main>

      <footer>
        <img src={headerImg} alt="Footer" className="footer-img" />
        <button onClick={goToHome} className="home-button">
          <img src={homeIcon} alt="Home" className="home-icon" />
        </button>
      </footer>
    </div>
  );
};

export default ResultScreen;
