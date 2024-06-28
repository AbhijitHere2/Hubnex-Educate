import React, { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Confet = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
  };

  return (
    <>
    <div className="text-center mt-5">
      <button onClick={handleClick} className="  p-3 rounded-lg bg-blue-500 text-black">
        Confetti
        {showConfetti && <Confetti width={width} height={height} />}
      </button>
      </div>
    </>
  );
};

export default Confet;
