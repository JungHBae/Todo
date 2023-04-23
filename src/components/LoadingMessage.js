import React, { useState, useEffect } from "react";

const LoadingMessage = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => {
        if (dots.length >= 3) {
          return "";
        } else {
          return dots + ".";
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <div>Loading{dots}</div>;
};

export default LoadingMessage;
