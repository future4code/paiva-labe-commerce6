import React from 'react';
import Filters from './components/Filters/Filter'
import styled from 'styled-components';
import {Cart} from './components/Cart/Cart';


class App extends React.Component {
  render() {

  return (
    <div className="App">     
      <div>
        <Cart></Cart>
        <Filters/>
      </div>
    </div>
  );
}

}
export default App;
