import { Menu, X } from "lucide-react";

export default function DashboardCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
      {/* TOP LEFT LOGO */}
      <div className="absolute top-4 left-4 p-0">
        <img
          src="https://we-recycle.org/wp-content/uploads/2014/03/dtu-logo.png"
          alt="DTU"
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* MENU BUTTON */}
      <button className="absolute top-4 right-4 text-gray-600 hover:text-black">
        <Menu className="w-6 h-6" />
      </button>

      {/* CONTENT */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Live Metrics</h2>
        <p className="text-gray-500 mt-1">
          Real-time analytics from your dashboard.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900">Active Users</h3>
            <p className="text-3xl font-bold mt-2">1,284</p>
            <p className="text-green-600 mt-1">+12.4% today</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900">Server Load</h3>
            <p className="text-3xl font-bold mt-2">68%</p>
            <p className="text-green-600 mt-1">Stable</p>
          </div>
        </div>
      </div>

      {/* FOOTER WITH SAME LOGO */}
      <div className="mt-10 flex items-center justify-between pt-6 border-t">
        <div className="flex items-center gap-2">
          <img
            src="https://we-recycle.org/wp-content/uploads/2014/03/dtu-logo.png"
            alt="DTU"
            className="w-6 h-6 object-contain"
          />
          <span className="text-gray-600">DTU Analytics</span>
        </div>

        <button className="text-gray-600 hover:text-black">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
