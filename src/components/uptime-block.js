import React, { useMemo } from 'react';
import { formatDuration, fixed } from '../utils/helper';

const UptimeBlock = (props) => {

  const { data } = props;
  const { status, text } = useMemo(() => {
    let status = '';
    let text = data.date.format('YYYY-MM-DD');
    if (data.uptime >= 100) {
      status = 'ok';
      text += ` Uptime: ${fixed(data.uptime)}%`;
    }
    else if (data.uptime <= 0 && data.down.times === 0) {
      status = 'none';
      text += ' No data';
    }
    else {
      status = 'down';
      text += ` Uptime: ${fixed(data.uptime)}% ,Downtime: ${formatDuration(data.down.duration)} Error events: ${data.down.times} `;
    }
    return { status, text };
  }, [data]);

  return (
    <i className={status} data-tip={text}></i>
  );
}

export default UptimeBlock;