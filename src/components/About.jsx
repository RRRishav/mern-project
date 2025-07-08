import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-10">

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 text-transparent bg-clip-text animate-gradient-x">
          About Me
        </h1>

        {/* Paragraph */}
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide">
          I'm <span className="text-pink-400 font-semibold">Rishav Bhardwaj</span>, 
          a passionate developer currently pursuing my studies at{" "}
          <span className="text-indigo-400 font-semibold">
            Thapar Institute of Engineering and Technology
          </span>. I specialize in building sleek, fast, and responsive web applications
          using modern technologies. With a strong foundation in 
          <span className="text-purple-400"> JavaScript</span>,{" "}
          <span className="text-yellow-400">Node.js</span>,{" "}
          <span className="text-blue-400">React</span>, and{" "}
          <span className="text-orange-400">Firebase</span>, I love transforming ideas
          into real-world applications.
        </p>

        {/* Skills summary */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {[
            "JavaScript ✨",
            "Node.js 🟢",
            "React ⚛️",
            "Firebase 🔥",
            "Mongoose 🗄️",
            "C++ 💻",
            "Angular 🅰️",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-black/40 border border-purple-500 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-500 hover:text-white transition-all"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-10">
          <p className="text-gray-400">
            Interested in collaborating or just want to say hi?
            <a
              href="#contact"
              className="text-pink-400 hover:text-pink-300 underline underline-offset-4"
            >
              
            </a>
          </p>
        </div>
      </div>

      {/* Animate gradient background */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
