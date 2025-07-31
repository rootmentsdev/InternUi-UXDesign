import React, { useState, useEffect } from 'react';
import { getAnalytics, clearAnalytics } from '../utils/analytics';
import './AnalyticsDashboard.css';

const AnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const loadAnalytics = () => {
      const data = getAnalytics();
      setAnalytics(data);
    };

    loadAnalytics();
    // Refresh data every 30 seconds
    const interval = setInterval(loadAnalytics, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all analytics data?')) {
      clearAnalytics();
      setAnalytics(getAnalytics());
    }
  };

  if (!analytics) {
    return <div className="analytics-loading">Loading analytics...</div>;
  }

  return (
    <div className="analytics-dashboard">
      <div className="analytics-header">
        <h1>📊 Internship Analytics Dashboard</h1>
        <button onClick={handleClearData} className="clear-btn">
          🗑️ Clear Data
        </button>
      </div>

      <div className="analytics-tabs">
        <button 
          className={activeTab === 'overview' ? 'active' : ''} 
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'details' ? 'active' : ''} 
          onClick={() => setActiveTab('details')}
        >
          Details
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="analytics-overview">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>👥 Total Visits</h3>
              <p className="stat-number">{analytics.totalVisits}</p>
            </div>
            <div className="stat-card">
              <h3>📝 Total Applications</h3>
              <p className="stat-number">{analytics.totalApplications}</p>
              <p className="stat-subtitle">Apply button clicks</p>
            </div>
            <div className="stat-card">
              <h3>📊 Conversion Rate</h3>
              <p className="stat-number">
                {analytics.totalVisits > 0 
                  ? ((analytics.totalApplications / analytics.totalVisits) * 100).toFixed(1) 
                  : 0}%
              </p>
            </div>
            <div className="stat-card">
              <h3>📅 Today's Visits</h3>
              <p className="stat-number">{analytics.todayVisits}</p>
            </div>
            <div className="stat-card">
              <h3>📅 Today's Applications</h3>
              <p className="stat-number">{analytics.todayApplications}</p>
            </div>
            <div className="stat-card">
              <h3>📅 This Week's Visits</h3>
              <p className="stat-number">{analytics.thisWeekVisits}</p>
            </div>
            <div className="stat-card">
              <h3>📅 This Week's Applications</h3>
              <p className="stat-number">{analytics.thisWeekApplications}</p>
            </div>
            <div className="stat-card">
              <h3>📅 This Month's Visits</h3>
              <p className="stat-number">{analytics.thisMonthVisits}</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'details' && (
        <div className="analytics-details">
          <div className="details-section">
            <h3>🕒 Recent Visits (Last 10)</h3>
            <div className="details-list">
              {analytics.recentVisits.map((visit, index) => (
                <div key={index} className="detail-item">
                  <span className="detail-time">
                    {new Date(visit.timestamp).toLocaleString()}
                  </span>
                  <span className="detail-info">
                    {visit.page} • {visit.referrer || 'Direct'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="details-section">
            <h3>📝 Recent Applications (Last 10)</h3>
            <div className="details-list">
              {analytics.recentApplications.map((app, index) => (
                <div key={index} className="detail-item">
                  <span className="detail-time">
                    {new Date(app.timestamp).toLocaleString()}
                  </span>
                  <span className="detail-info">
                    {app.referrer || 'Direct'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsDashboard; 