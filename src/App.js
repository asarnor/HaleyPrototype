import React, { useState } from 'react';
import Welcome from './Welcome/Welcome';
import IndependenceCheckpoint from './IndependenceCheckpoint/IndependenceCheckpoint';
import './App.css';

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const advancePage = () => {
    setTimeout(() => setPageIndex(pageIndex + 1), 1000);
  };

  switch (pageIndex) {
    case 0:
      return <Welcome advancePage={advancePage} />;
    case 1:
      return <IndependenceCheckpoint />;
    case 2:
      return <div>Hello World</div>;
    default:
      return <Welcome advancePage={setPageIndex} />;
  }
};

export default App;
