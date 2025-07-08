import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-purple-700">
        <h2 className="text-2xl font-semibold text-center mb-6 text-purple-400">
          Contact Me
        </h2>

        <div className="space-y-4 text-sm">
          <div>
            <strong className="text-gray-300">Location:</strong>
            <p className="text-gray-400">Himachal Pradesh, India</p>
          </div>

          <div>
            <strong className="text-gray-300">Email:</strong>
            <p className="break-all text-indigo-400 hover:underline">
              <a href="mailto:rishav2592004@outlook.com">
                rishav2592004@outlook.com
              </a>
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">Feel free to reach out any time!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
