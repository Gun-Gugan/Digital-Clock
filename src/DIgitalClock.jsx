import React, { useState, useEffect } from "react";

const DigitalWatch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex mt-10 items-center justify-center h-screen bg-black">
      <div className="relative flex items-center justify-center p-10 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20">
      
        <div className="absolute inset-0 animate-pulse rounded-2xl bg-blue-500 opacity-30 blur-3xl"></div>

        <div className="relative text-7xl font-mono font-bold text-white tracking-widest drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default DigitalWatch;
