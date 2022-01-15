import React, { useMemo } from 'react';
import htmr from 'htmr';
import ReactTooltip from 'react-tooltip';
import UptimeBlock from './uptime-block';
import Link from './link';
import { formatDuration } from '../utils/helper';

const { URLreplacer } = window.Config;

const UptimeItem = (props) => {

  const { ShowLink, CountDays } = window.Config;
  const { monitor } = props;

  const status = {
    ok: 'Operational',
    down: 'Down',
    unknow: 'Unknown'
  };

  const total = useMemo(() => {
    return monitor.total.times
      ? `Error events: ${monitor.total.times} in recent ${CountDays} days. Total: ${formatDuration(monitor.total.duration)} Overall Uptime: ${monitor.average}%`
      : `Overall Uptime: ${monitor.average}% in recent ${CountDays} days.`;
  }, [CountDays, monitor]);

  const initial = useMemo(() => {
    return monitor.daily[monitor.daily.length - 1].date;
  }, [monitor]);

  let SiteTitle = <span className="name">{htmr(monitor.name)}</span>

  if (ShowLink){
    SiteTitle = 
    <a href={URLreplacer(monitor.url)}>
      <span className="name">{htmr(monitor.name)}</span>
    </a>
  }

  return (
    <div className="item">
      <div className="meta">
        <div className="info">
        {SiteTitle}
        {ShowLink && <Link className="link" to={URLreplacer(monitor.url)} text={htmr(monitor.name)} />}
        </div>
        <div className="expand"></div>
        <div className="foot">{total}</div>
        <div className={`status ${monitor.status}`}>{status[monitor.status]}</div>
      </div>
      <div className="timeline">
        {monitor.daily.map((value, index) => (
          <UptimeBlock key={index} data={value} />
        ))}
      </div>
      <ReactTooltip className="tooltip" place="top" type="dark" effect="solid" />
    </div>
  );
}

export default UptimeItem;
