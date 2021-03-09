import React from 'react';
import MarchSpot from './pages/eventMarch/MarchSpot/MarchSpot';
import MarchSummary from './pages/eventMarch/MarchSummary/MarchSummary';

function App() {
  return (
    <div className="event-march">
		<MarchSpot />
		<MarchSummary />
	</div>
  );
}

export default App;
