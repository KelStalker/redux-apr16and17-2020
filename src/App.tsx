import React from 'react';
import {connect} from 'react-redux';  //part of the library that bridges react/redux together
import { Grid, GridRow, Button } from 'semantic-ui-react';

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>React - 16 Apr 2020</h1>
      </Grid.Row>

      <Grid.Row>
        { /* Products. */}
      </Grid.Row>

      <Grid.Row>
        { /* Cart. */}
      </Grid.Row>
    </Grid>
  );
}

export default App;
