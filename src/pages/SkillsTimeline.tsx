import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function SkillsTimeline() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    const data = {
      labels: ['2020', '2022', '2024', '2027', '2030'],
      datasets: [
        {
          type: 'bar' as const,
          label: 'Jobs Displaced by Automation',
          data: [15, 35, 55, 85, 110],
          backgroundColor: 'rgba(239, 68, 68, 0.8)',
          borderColor: 'rgba(239, 68, 68, 1)',
          borderWidth: 1,
          yAxisID: 'y',
          order: 2
        },
        {
          type: 'bar' as const,
          label: 'New Skill-Based Jobs Created',
          data: [18, 42, 63, 97, 135],
          backgroundColor: 'rgba(34, 197, 94, 0.8)',
          borderColor: 'rgba(34, 197, 94, 1)',
          borderWidth: 1,
          yAxisID: 'y',
          order: 2
        },
        {
          type: 'line' as const,
          label: '% of Workers\' Skills Disrupted',
          data: [20, 28, 36, 44, 52],
          borderColor: 'rgba(59, 130, 246, 1)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 3,
          pointRadius: 6,
          pointBackgroundColor: 'rgba(59, 130, 246, 1)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          yAxisID: 'y1',
          order: 1,
          tension: 0.4
        }
      ]
    };

    chartInstanceRef.current = new Chart(ctx, {
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              padding: 20,
              font: {
                size: 13,
                weight: '500'
              },
              usePointStyle: true,
              pointStyle: 'rect'
            }
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            titleColor: '#1e293b',
            bodyColor: '#64748b',
            borderColor: '#e2e8f0',
            borderWidth: 2,
            padding: 12,
            displayColors: true,
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.datasetIndex === 2) {
                  label += context.parsed.y + '%';
                } else {
                  label += context.parsed.y + 'M jobs';
                }
                return label;
              },
              afterBody: function (tooltipItems) {
                if (tooltipItems[0].label === '2027') {
                  return '\n→ WEF 2023 Projection';
                }
                return '';
              }
            }
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            title: {
              display: true,
              text: 'Jobs (Millions)',
              font: {
                size: 14,
                weight: '600'
              }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            },
            ticks: {
              font: {
                size: 12
              }
            }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            title: {
              display: true,
              text: 'Skills Disrupted (%)',
              font: {
                size: 14,
                weight: '600'
              }
            },
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              font: {
                size: 12
              },
              callback: function (value) {
                return value + '%';
              }
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 13,
                weight: '600'
              }
            }
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            The AI-Driven Skills Disruption Timeline
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Automation Displaces 85M Jobs but Creates 97M New Skill-Based Roles
          </p>
          <p className="text-sm text-gray-500">
            Source: World Economic Forum (2023) Future of Jobs Report
          </p>
        </div>

        <div className="relative h-[500px] mb-8">
          <canvas ref={chartRef}></canvas>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold text-red-500 mb-2">85M</div>
            <div className="text-sm text-gray-700 font-medium">Jobs Displaced by 2027</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold text-green-500 mb-2">97M</div>
            <div className="text-sm text-gray-700 font-medium">New Skill-Based Jobs by 2027</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="text-5xl font-bold text-blue-500 mb-2">44%</div>
            <div className="text-sm text-gray-700 font-medium">Skills Disrupted by 2027</div>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">Key Insight:</span> The transition creates a net positive of 12 million jobs, but only for workers with relevant skills. Without strategic skilling infrastructure, India risks leaving millions behind in this transformation.
          </p>
        </div>
      </div>
    </div>
  );
}
