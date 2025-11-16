import { ReactNode } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Skills Timeline', href: '/' },
    { name: 'Gap Analysis', href: '/gap-analysis' },
    { name: 'Economic Impact', href: '/economic-impact' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const hash = href.split('#')[1];
    if (hash) {
      const element = document.getElementById(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.dispatchEvent(new CustomEvent('navigate', { detail: href }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              {/* changed */}
              <img
  src="https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/en/thumb/0/0e/Delhi_Technological_University_seal.png/600px-Delhi_Technological_University_seal.png"
  alt="DTU Logo"
  className="w-10 h-10 object-contain"
/>

  
              <div>
                <h1 className="text-xl font-bold text-gray-900">Team Rohini</h1>
                <p className="text-xs text-gray-600">Delhi Technological University</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50"
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* changed */}
               <img
  src="https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/en/thumb/0/0e/Delhi_Technological_University_seal.png/600px-Delhi_Technological_University_seal.png"
  alt="DTU Logo"
  className="w-10 h-10 object-contain"
/>


                <h3 className="text-lg font-bold">Team Rohini</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Data-driven insights for transforming India's workforce through strategic skilling interventions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => scrollToSection('/')} className="hover:text-white transition-colors">Skills Timeline</button></li>
                <li><button onClick={() => scrollToSection('/gap-analysis')} className="hover:text-white transition-colors">Gap Analysis</button></li>
                <li><button onClick={() => scrollToSection('/economic-impact')} className="hover:text-white transition-colors">Economic Impact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Data Sources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>World Economic Forum (2023)</li>
                <li>PM Garib Kalyan Anna Yojana</li>
                <li>India Today Reports</li>
                <li>National Skills Development</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; Team Rohini, DTU. All rights reserved. Built for policy impact analysis.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
