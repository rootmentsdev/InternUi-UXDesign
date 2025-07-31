// Analytics utility for tracking visits and applications

export const trackVisit = () => {
  const visits = JSON.parse(localStorage.getItem('internship_visits') || '[]');
  visits.push({
    timestamp: new Date().toISOString(),
    page: window.location.pathname,
    userAgent: navigator.userAgent,
    referrer: document.referrer
  });
  localStorage.setItem('internship_visits', JSON.stringify(visits));
};

export const trackApplication = () => {
  const applications = JSON.parse(localStorage.getItem('internship_applications') || '[]');
  applications.push({
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    referrer: document.referrer
  });
  localStorage.setItem('internship_applications', JSON.stringify(applications));
};

export const getAnalytics = () => {
  const visits = JSON.parse(localStorage.getItem('internship_visits') || '[]');
  const applications = JSON.parse(localStorage.getItem('internship_applications') || '[]');
  
  const today = new Date().toDateString();
  const thisWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const thisMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  
  return {
    totalVisits: visits.length,
    totalApplications: applications.length,
    todayVisits: visits.filter(v => new Date(v.timestamp).toDateString() === today).length,
    todayApplications: applications.filter(a => new Date(a.timestamp).toDateString() === today).length,
    thisWeekVisits: visits.filter(v => new Date(v.timestamp) > thisWeek).length,
    thisWeekApplications: applications.filter(a => new Date(a.timestamp) > thisWeek).length,
    thisMonthVisits: visits.filter(v => new Date(v.timestamp) > thisMonth).length,
    thisMonthApplications: applications.filter(a => new Date(a.timestamp) > thisMonth).length,
    recentVisits: visits.slice(-10).reverse(),
    recentApplications: applications.slice(-10).reverse()
  };
};

export const clearAnalytics = () => {
  localStorage.removeItem('internship_visits');
  localStorage.removeItem('internship_applications');
}; 