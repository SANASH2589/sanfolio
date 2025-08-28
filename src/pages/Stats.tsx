import { ExternalLink } from "lucide-react";

const Stats = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <h1 className="text-5xl font-bold text-white mb-10">📊 Coding Platform Stats</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* LeetCode Card */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 p-4">
          <h2 className="text-2xl font-semibold text-white mb-4">LeetCode Progress</h2>
          <iframe
            src="https://leetcard.jacoblin.cool/SanAsh_2589?theme=dark&font=Karma&ext=heatmap"
            className="w-full h-[500px] rounded-lg border border-gray-700"
            title="LeetCode Stats"
          />
        </div>

        {/* HackerRank Card */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 p-4">
          <h2 className="text-2xl font-semibold text-white mb-4">HackerRank Profile</h2>
          <iframe
            src="https://www.hackerrank.com/profile/SanAsh_2589"
            className="w-full h-[500px] rounded-lg border border-gray-700"
            title="HackerRank Stats"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
