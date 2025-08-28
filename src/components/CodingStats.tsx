import React from "react";

const CodingStats = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-white mb-10">💻 Coding Platforms</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* LeetCode Card */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">📊 LeetCode Progress</h3>
          <iframe
            src="https://leetcard.jacoblin.cool/SanAsh_2589?theme=dark&font=Karma&ext=heatmap"
            className="w-full h-[500px] rounded-xl shadow-lg border border-gray-600"
            title="LeetCode Stats"
          />
        </div>

        {/* HackerRank Card */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-green-400 mb-6">🏆 HackerRank Profile</h3>
          <a
            href="https://www.hackerrank.com/san_ash_2589"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-md transition"
          >
            View My HackerRank
          </a>
          <img
            src="https://img.shields.io/badge/HackerRank-Profile-brightgreen?logo=hackerrank&logoColor=white"
            alt="HackerRank Badge"
            className="mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default CodingStats;
