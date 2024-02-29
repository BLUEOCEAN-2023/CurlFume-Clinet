import React, { useState } from "react";
import Question6 from "../AskScreen/Question6";

// VoteCounter 컴포넌트
const VoteCounter = ({ onFinishedVoting }) => {
  const [votes, setVotes] = useState({
    Floral: 0,
    Musk: 0,
    Citrus: 0,
    Woody: 0,
  });

  const handleVote = (selectedId) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [selectedId]: prevVotes[selectedId] + 1,
    }));
  };

  // 모든 질문이 끝났다고 가정하고 결과를 추출합니다.
  const handleFinishVoting = () => {
    console.log(votes); // 각 아이디별 클릭 횟수 출력
    const mostVotedId = Object.keys(votes).reduce((a, b) =>
      votes[a] > votes[b] ? a : b
    );
    console.log(`가장 많이 선택된 아이디: ${mostVotedId}`);
    onFinishedVoting();
  };

  // Question 컴포넌트나 다른 로직에서 handleFinishVoting 호출 필요
  // <Question6 handleVote={handleVote} handleFinishVoting={handleFinishVoting} />;

  return (
    <div>
      {
        <Question6
          handleVote={handleVote}
          handleFinishVoting={handleFinishVoting}
        />
      }
    </div>
  );
};

export default VoteCounter;
