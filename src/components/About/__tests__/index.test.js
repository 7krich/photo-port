import React from 'react';

// import functions from react testing lib
// render component in simulated DOM
// clean up will remove components from DOM to prevent memory leaking
import { render, cleanup } from '@testing-library/react';

// import jest-dom package
import '@testing-library/jest-dom/extend-expect';

// import the about component so it can be tested
import About from '..';

// call cleanup function using global function from Jest
afterEach(cleanup);

// use describe to declare the component being tested
describe('About component', () => {
    // first test - verify component is rendering
    it('renders', () => {
        render(<About />);
    });

    // second test - compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        // compare whether expected and actual match
        expect(asFragment()).toMatchSnapshot();
    })
})
