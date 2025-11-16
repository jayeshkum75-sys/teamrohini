import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import SkillsTimeline from './pages/SkillsTimeline';
import GapAnalysis from './pages/GapAnalysis';
import EconomicImpact from './pages/EconomicImpact';

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  useEffect(() => {
    const handleNavigate = (event: Event) => {
      const customEvent = event as CustomEvent;
      setCurrentPage(customEvent.detail);
    };

    window.addEventListener('navigate', handleNavigate);
    return () => window.removeEventListener('navigate', handleNavigate);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case '/gap-analysis':
        return <GapAnalysis />;
      case '/economic-impact':
        return <EconomicImpact />;
      default:
        return <SkillsTimeline />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;
