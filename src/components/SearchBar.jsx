import React from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

function SearchBar() {
  return (
    <MDBInputGroup>
    <MDBInput label='Search' />
    <MDBBtn rippleColor='dark'>
      <MDBIcon icon='search' />
    </MDBBtn>
  </MDBInputGroup>
  )
}

export default SearchBar