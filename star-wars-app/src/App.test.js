import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';
import StarWarsCharacters from './components/StarWarsCharacters';
import { getData as mockGetData} from './api';

// test("Render the heading", async () => {  
//   const wrapper = rtl.render(<App />);   
//   await wrapper.findAllByAltText(/logo/i);
// });

// test("Previous Button", async () => {
//   const wrapper = rtl.render(<StarWarsCharacters />); 
//   await wrapper.getByText(/previous/i);

//   const prevButton = wrapper.getByText(/previous/i)
 
//   rtl.act(() => {
//     rtl.fireEvent.click(prevButton)
//   })
// })

// test("Next Button", async () => {
//   const wrapper = rtl.render(<StarWarsCharacters />); 
//   await wrapper.getByText(/next/i);

//   const nextButton = wrapper.getByText(/next/i)
 
//   rtl.act(() => {
//     rtl.fireEvent.click(nextButton)
//   })
// })

jest.mock('./api')

test(' Made API call', async () => {
  mockGetData.mockResolvedValueOnce({results: 
    [{
      name: "Luke Skywalker",
      height: "172",
      mass: "77", 

    }]
  })
  
  const wrapper = rtl.render(<StarWarsCharacters />); 
  await wrapper.findByText(/luke/i);
    
  expect(mockGetData).toHaveBeenCalled();
}) 