import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Characters from '../pages/HomePage';
import store from '../redux/configureStore';

it('Builds the snapchot of the Home component Details', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Characters />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
