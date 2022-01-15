import React, { useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Uptime from './uptime';

const App = () => {

  const { ApiKeys, SiteName , SiteDescription } = window.Config;

  useEffect(() => {
    window.document.title = SiteName;
  }, [SiteName]);

  return (
    <>
      <Header />
      <div className="container">
        <div id="uptime">
          <div className="item">
            <div className="meta">
              <div className="info">
                <span className="name">{SiteDescription}</span>
              </div>
            </div>
          </div>
          {ApiKeys.map(i => (
            <Uptime key={i} apikey={i} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
