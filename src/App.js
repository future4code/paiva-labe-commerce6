import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  render() {

  return (
    <div className="App">     
      <div>
        <Filters></Filters> 
        <Cart></Cart> 
        <Products></Products>
      </div>
    </div>
  );
}

}
export default App;
