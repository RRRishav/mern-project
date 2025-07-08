import React, { useState, useEffect } from "react";

function Home() {
  const [lightning, setLightning] = useState(false);
  const [thunder, setThunder] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        setLightning(true);
        setThunder(true);
        setTimeout(() => setLightning(false), 150);
        setTimeout(() => setThunder(false), 800);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const technologies = [
    "Mongoose 🗄️",
    "Node.js 🟢",
    "JavaScript ✨",
    "C++ 💻",
    "Firebase 🔥",
    "React ⚛️",
    "Angular 🅰️",
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white p-6 overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-black">
      {/* Video background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        src="/starry-night.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-60 sm:opacity-70 z-10" />

      {/* Lightning flash */}
      {lightning && (
        <div className="fixed inset-0 bg-white opacity-20 animate-pulse pointer-events-none z-20" />
      )}

      {/* Scrolling tech background */}
      <div className="pointer-events-none fixed top-1/3 sm:top-1/2 left-0 w-full overflow-hidden z-15 -translate-y-1/2">
        <div className="flex whitespace-nowrap animate-scrollTech">
          {[...Array(3)].map((_, idx) =>
            technologies.map((tech, i) => (
              <span
                key={idx * technologies.length + i}
                className="mx-6 sm:mx-10 text-2xl sm:text-4xl md:text-5xl font-extrabold text-purple-400 opacity-40 sm:opacity-30 select-none"
              >
                {tech}
              </span>
            ))
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-30 bg-black bg-opacity-70 rounded-2xl p-6 sm:p-10 max-w-lg w-full text-center shadow-xl border border-purple-700">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent tracking-wide">
          Hi, I'm Rishav
        </h1>
        <p className="mb-6 text-gray-300 text-base sm:text-lg">
          I study at{" "}
          <span className="font-semibold text-indigo-400">
            Thapar Institute of Engineering and Technology
          </span>
          .
        </p>

        <p className="text-gray-400 text-sm tracking-wide">
          Welcome to the{" "}
          <span className="text-pink-400 font-semibold">Admin-panel</span>
        </p>
      </div>

      {/* Thunder indicator */}
      {thunder && (
        <div className="fixed top-6 right-6 text-yellow-400 font-bold animate-pulse select-none z-40">
          ⚡ Thunder
        </div>
      )}

      <style jsx>{`
        @keyframes scrollTech {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33%);
          }
        }

        .animate-scrollTech {
          animation: scrollTech 40s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-scrollTech span {
            font-size: 1.25rem;
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
