import React from 'react';
// import {connect} from 'react-redux';  //part of the library that bridges react/redux together
import { Grid } from 'semantic-ui-react';
import Inventory from './conponents/Inventory';

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>React - 16 Apr 2020</h1>
      </Grid.Row>

      <Grid.Row>
        { /* Products. */}
        <Inventory />
      </Grid.Row>

      <Grid.Row>
        { /* Cart. */}
      </Grid.Row>
    </Grid>
  );
}

export default App;
