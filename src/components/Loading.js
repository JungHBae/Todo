import React, { useState, useEffect } from "react";

const Loading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((dots) => {
        if (dots.length >= 3) {
          return "";
        } else {
          return dots + ".";
        }
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Loading{dots}</div>;
};

export default Loading;
