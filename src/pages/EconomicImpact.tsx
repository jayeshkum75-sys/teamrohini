import { Users, GraduationCap, Briefcase, TrendingDown, AlertTriangle } from 'lucide-react';

export default function EconomicImpact() {
  const pyramidLayers = [
    {
      title: "Food Subsidy Dependence",
      stat: "80 Crore Indians",
      percentage: "56% of Population",
      description: "Receiving subsidized food through PM Garib Kalyan Anna Yojana",
      color: "from-red-600 to-red-700",
      icon: Users,
      width: "100%",
      urgent: true
    },
    {
      title: "Graduate Unemployability Crisis",
      stat: "50%+ Graduates",
      percentage: "Unemployable",
      description: "Over half of India's graduates lack market-ready skills",
      color: "from-orange-600 to-orange-700",
      icon: GraduationCap,
      width: "85%"
    },
    {
      title: "Extreme Job Competition",
      stat: "24.76 Lakh Applicants",
      percentage: "For 53,749 Peon Jobs",
      description: "Including PhD, MBA & Law graduates applying for basic positions",
      color: "from-amber-600 to-amber-700",
      icon: Briefcase,
      width: "70%"
    },
    {
      title: "Available Skilled Workforce",
      stat: "Critical Gap",
      percentage: "Insufficient for Growth",
      description: "Current skilled workforce inadequate for manufacturing, logistics, energy sectors",
      color: "from-yellow-600 to-yellow-700",
      icon: TrendingDown,
      width: "50%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold text-sm">CRITICAL ECONOMIC VULNERABILITY</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            India's Economic Vulnerability Pyramid
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2">
            From Dependence to Productivity: The Case for Skilling as Economic Empowerment
          </p>
          <p className="text-sm text-gray-400">
            Source: PM Garib Kalyan Anna Yojana Data, India Today Report (Rajasthan Recruitment)
          </p>
        </div>

        <div className="relative mb-12">
          <div className="space-y-6">
            {pyramidLayers.map((layer, index) => (
              <div
                key={index}
                className="relative mx-auto transition-all duration-300 hover:scale-105"
                style={{ width: layer.width }}
              >
                <div className={`bg-gradient-to-r ${layer.color} rounded-lg shadow-2xl overflow-hidden`}>
                  <div className="p-6 text-white">
                    <div className="flex items-start gap-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-lg flex-shrink-0">
                        <layer.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">{layer.title}</h3>
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="text-3xl md:text-4xl font-black">{layer.stat}</span>
                          {layer.urgent && (
                            <span className="bg-white bg-opacity-30 px-2 py-1 rounded text-xs font-bold">
                              URGENT
                            </span>
                          )}
                        </div>
                        <p className="text-base md:text-lg font-semibold mb-2 opacity-95">{layer.percentage}</p>
                        <p className="text-sm opacity-90 leading-relaxed">{layer.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {index < pyramidLayers.length - 1 && (
                  <div className="flex justify-center my-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-gray-400 to-gray-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">56%</div>
              <div className="text-sm font-semibold opacity-90">Of India's Population</div>
              <div className="text-xs opacity-75 mt-2">Dependent on food subsidies</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">461:1</div>
              <div className="text-sm font-semibold opacity-90">Applicant-to-Job Ratio</div>
              <div className="text-xs opacity-75 mt-2">24.76L applicants for 53,749 positions</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white shadow-xl hover:shadow-2xl transition-shadow">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50%+</div>
              <div className="text-sm font-semibold opacity-90">Graduate Unemployability</div>
              <div className="text-xs opacity-75 mt-2">Lacking market-ready skills</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              The Transformation Path
            </h2>
            <p className="text-gray-600">
              Vocational Training: From Beneficiaries to Contributors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-4 border-red-200 rounded-xl p-6 bg-red-50">
              <div className="text-center mb-4">
                <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  CURRENT REALITY
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-xl flex-shrink-0">×</span>
                  <span className="text-gray-700">Tertiary education demands excessive time & money</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-xl flex-shrink-0">×</span>
                  <span className="text-gray-700">80 crore Indians dependent on subsidies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-xl flex-shrink-0">×</span>
                  <span className="text-gray-700">PhD holders competing for peon positions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-xl flex-shrink-0">×</span>
                  <span className="text-gray-700">Deep economic vulnerabilities persist</span>
                </li>
              </ul>
            </div>

            <div className="border-4 border-green-200 rounded-xl p-6 bg-green-50">
              <div className="text-center mb-4">
                <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  SKILLING SOLUTION
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Employability within months, not years</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Transform dependence into productivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Beneficiaries become job creators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Economic policy meets social empowerment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 rounded-2xl shadow-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Economic Imperative</h2>
            <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-6">
              In a developing economy where <span className="font-bold">basic needs outweigh formal qualifications</span>,
              skill development stands as both economic policy and social empowerment. Vocational training enables
              <span className="font-bold"> employability within months</span>, transforming 80 crore subsidy recipients
              from dependents into <span className="font-bold">productive contributors</span> who can earn, save, and create jobs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 hover:bg-opacity-20 transition-all">
                <div className="text-2xl md:text-3xl font-bold mb-1">Months</div>
                <div className="text-sm opacity-90">Not Years to Employment</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 hover:bg-opacity-20 transition-all">
                <div className="text-2xl md:text-3xl font-bold mb-1">80 Crore</div>
                <div className="text-sm opacity-90">Potential Workforce</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 hover:bg-opacity-20 transition-all">
                <div className="text-2xl md:text-3xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">Economic Inclusion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
