import React from 'react';
// import functions from react testing lib
// render component in simulated DOM
// clean up will remove components from DOM to prevent memory leaking
import { render, cleanup } from '@testing-library/react';
// import jest-dom package
import '@testing-library/jest-dom/extend-expect';
// import the about component so it can be tested
import Nav from '..';

// call cleanup function using global function from Jest
afterEach(cleanup);

// use describe to declare the component being tested
describe('Nav component', () => {
    // first test - verify component is rendering
    it('renders', () => {
        render(<Nav />);
    });

    // second test - compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav />);
        // compare whether expected and actual match
        expect(asFragment()).toMatchSnapshot();
    })
});

// test to see fi camera emoji is visibile
// describe('emoji is visible', () => {
//     it('inserts emoji into the h2', () => {
//         // Arrange - query to return the element containing the emoji in the JSX
//         const { getByLabelText } = render(<Nav />);
//         // Assert
//         expect(getByLabelText('camera')).toHaveTextContent('📸');
//     });
// })

// test to see if links are visible
// describe('links are visible', () => {
//     it('inserts text into the links', () => {
//       // Arrange
//       const { getByTestId } = render(<Nav />);
//       // Assert
//       expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
//       expect(getByTestId('about')).toHaveTextContent('About me');
//     });
// })