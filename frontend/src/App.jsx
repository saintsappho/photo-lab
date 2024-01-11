import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import topics from "./mocks/topics";
import photos from "./mocks/photos";


// Note: Rendering a single component to build components in isolation
const App = () => {
  const data = {photos, topics}

  return (
    <div className="App">
      <HomeRoute data={data}/>
    </div>
  );
};

export default App;
