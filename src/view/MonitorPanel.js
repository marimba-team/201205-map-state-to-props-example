import React  from 'react';
import MonitorA from '../container/MonitorA';
import MonitorB from '../container/MonitorB';
import MonitorC from '../container/MonitorC';

function MonitorPanel() {
  return (
    <div id="monitor-area">
      <MonitorA />
      <MonitorB />
      <MonitorC />
    </div>
  );
}

export default MonitorPanel;
