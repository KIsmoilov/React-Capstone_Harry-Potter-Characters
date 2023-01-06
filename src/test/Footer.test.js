import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../components/Footer';

it('renders correctly', () => {
  const navbar = renderer
    .create(<Router><Footer /></Router>)
    .toJSON();
  expect(navbar).toMatchSnapshot();
});
