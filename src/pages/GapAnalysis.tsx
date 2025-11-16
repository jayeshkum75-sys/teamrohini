import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ArrowRight, Briefcase, TrendingDown } from 'lucide-react';

export default function GapAnalysis() {
  const currentData = [
    { metric: 'Skill Mismatch', value: 50, color: '#ef4444' },
    { metric: 'Avg Job Search', value: 8, color: '#f59e0b', unit: 'months' },
    { metric: 'Unemployment Rate', value: 7.8, color: '#dc2626' },
  ];

  const projectedData = [
    { metric: 'Skill Mismatch', value: 25, color: '#22c55e' },
    { metric: 'Avg Job Search', value: 2, color: '#10b981', unit: 'months' },
    { metric: 'Unemployment Rate', value: 5.0, color: '#16a34a' },
  ];

  const policyImpacts = [
    {
      policy: 'Policy 1: Regional Skill Excellence Centers',
      impact: '3M workers trained annually',
      metrics: ['₹15,000 Cr remittances', '30% regional unemployment reduction'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      policy: 'Policy 2: Skills-to-Jobs Compact (1:10 Ratio)',
      impact: '2M qualified jobs created annually',
      metrics: ['Skill mismatch: 50% → 25%', '60% apprentice hiring mandate'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      policy: 'Policy 3: SkillBridge India Platform',
      impact: 'AI-powered job matching in 22 languages',
      metrics: ['Job search: 8mo → 2mo', '40% better job-skill matching'],
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border-2 border-gray-300 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{data.metric}</p>
          <p className="text-lg font-bold" style={{ color: data.color }}>
            {data.value}{data.unit ? ' ' + data.unit : '%'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Skill Mismatch Gap Analysis
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Transforming India's Workforce Through Strategic Policy Interventions
        </p>
        <p className="text-sm text-gray-500">
          Projected Impact: 2025-2030
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-red-500">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Current State</h2>
            <div className="bg-red-100 p-3 rounded-full">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={currentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="metric"
                angle={-15}
                textAnchor="end"
                height={80}
                style={{ fontSize: '12px', fontWeight: '600' }}
              />
              <YAxis style={{ fontSize: '12px' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {currentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="font-semibold text-red-900">50% Skill Mismatch</p>
                <p className="text-sm text-red-700">Half the workforce lacks market-relevant skills</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <span className="text-2xl">⏱️</span>
              <div>
                <p className="font-semibold text-amber-900">8-Month Job Search</p>
                <p className="text-sm text-amber-700">Extended unemployment periods drain savings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-500">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Projected Impact</h2>
            <div className="bg-green-100 p-3 rounded-full">
              <Briefcase className="w-6 h-6 text-green-600" />
            </div>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={projectedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="metric"
                angle={-15}
                textAnchor="end"
                height={80}
                style={{ fontSize: '12px', fontWeight: '600' }}
              />
              <YAxis style={{ fontSize: '12px' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {projectedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-semibold text-green-900">25% Skill Mismatch</p>
                <p className="text-sm text-green-700">50% reduction through targeted training</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-semibold text-emerald-900">2-Month Job Search</p>
                <p className="text-sm text-emerald-700">75% faster placement through AI matching</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-red-500 to-green-500 p-1 rounded-xl">
          <div className="bg-white rounded-lg p-6 h-full">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent mb-2">
                50%
              </div>
              <div className="text-gray-600 font-semibold">Reduction in Skill Mismatch</div>
              <div className="text-sm text-gray-500 mt-2">From 50% to 25%</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-green-500 p-1 rounded-xl">
          <div className="bg-white rounded-lg p-6 h-full">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-green-600 bg-clip-text text-transparent mb-2">
                75%
              </div>
              <div className="text-gray-600 font-semibold">Faster Job Placement</div>
              <div className="text-sm text-gray-500 mt-2">From 8 to 2 months</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-1 rounded-xl">
          <div className="bg-white rounded-lg p-6 h-full">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
                5M
              </div>
              <div className="text-gray-600 font-semibold">Jobs Created Annually</div>
              <div className="text-sm text-gray-500 mt-2">Through all 3 policies</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Policy Interventions Bridge</h2>
          <p className="text-gray-600">Three Strategic Policies to Transform India's Workforce</p>
        </div>

        <div className="space-y-6">
          {policyImpacts.map((policy, index) => (
            <div key={index} className="relative">
              <div className={`bg-gradient-to-r ${policy.color} p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-shadow`}>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{policy.policy}</h3>
                    <p className="text-sm opacity-90 mb-3">{policy.impact}</p>
                    <div className="flex flex-wrap gap-2">
                      {policy.metrics.map((metric, idx) => (
                        <span key={idx} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs font-semibold">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {index < policyImpacts.length - 1 && (
                <div className="flex justify-center my-4">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl shadow-2xl p-8 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Return on Investment</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div>
              <div className="text-3xl font-bold mb-1">₹500 Cr</div>
              <div className="text-sm opacity-90">Total Investment (3 years)</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">0.5%</div>
              <div className="text-sm opacity-90">Of Education Budget</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">5M</div>
              <div className="text-sm opacity-90">Jobs Created/Year</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">₹15K Cr</div>
              <div className="text-sm opacity-90">Annual Remittances</div>
            </div>
          </div>
          <p className="mt-6 text-sm opacity-90">
            Revenue-neutral model through reduced unemployment benefits and expanded tax base
          </p>
        </div>
      </div>
    </div>
  );
}
