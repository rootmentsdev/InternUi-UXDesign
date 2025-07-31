import React from 'react'
import Main from './pages/Main'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import { Analytics } from '@vercel/analytics/react'
import './App.css'

function App() {
  // Check if user wants to see analytics dashboard
  const isAnalyticsPage = window.location.pathname === '/analytics';
  
  return (
    <div className="App">
      {isAnalyticsPage ? <AnalyticsDashboard /> : <Main />}
      <Analytics />
    </div>
  )
}

export default App
