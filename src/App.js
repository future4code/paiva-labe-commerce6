import React from 'react';
import Filters from './components/Filters/Filter'
import styled from 'styled-components';


class App extends React.Component {
  render() {

  return (
    <div className="App">     
      <div>
        <Filters/>
      </div>
    </div>
  );
}

}
export default App;
