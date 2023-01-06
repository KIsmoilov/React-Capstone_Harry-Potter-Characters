import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';

describe('Testing Navigation', () => {
  test('Test for Navbar component', () => {
    render(
      <nav className="navBar">
        <ul className="menuNav">
          <li>
            /
          </li>
        </ul>
      </nav>,
    );

    useEvent.click(screen.getByText('/'));
  });
});
