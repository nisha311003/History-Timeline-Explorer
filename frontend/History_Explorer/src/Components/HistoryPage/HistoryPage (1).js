import React from 'react';
import './HistoryPage.css';
import MainPanel from '../MainPanel/MainPanel';
import HeaderPanel from '../HeaderPanel/HeaderPanel';
function HistoryPage() {
  return (
    <div className="app-container">
          <HeaderPanel />
          <div className="horizontal-divider"></div>
          <div className="main-container">
            <MainPanel />
          </div>
        </div>
  )
}

export default HistoryPage
