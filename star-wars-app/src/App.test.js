import React from 'react';
import * as rtl from '@testing-library/react';
import StarWarsCharacters from './components/StarWarsCharacters';
import { getData as mockGetData} from './api';

jest.mock('./api')

test(' Made API call', async () => {
  mockGetData.mockResolvedValueOnce({
    results: 
     [{
       name: "Luke Skywalker",
       height: "172",
       mass: "77", 
     }]
  })
  
  const wrapper = rtl.render(<StarWarsCharacters />); 
  await wrapper.findByText(/luke/i);
    
  expect(mockGetData).toHaveBeenCalledTimes(1);


  await wrapper.getByText(/next/i);
  const nextButton = wrapper.getByText(/next/i)
   
    rtl.act(() => {
      rtl.fireEvent.click(nextButton)
    })


  await wrapper.getByText(/previous/i);
  const prevButton = wrapper.getByText(/previous/i)
     
    rtl.act(() => {
      rtl.fireEvent.click(prevButton)
    })
}) 

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