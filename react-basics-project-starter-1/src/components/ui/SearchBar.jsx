import React from 'react';
import { Input } from '@chakra-ui/react';


const SearchBar = ({searchTerm, setSearchTerm}) => {
  return (
    <Input 
      placeholder="Search Recipe" 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      mb={5}
      width="50%"
    />
  )
}   
export default SearchBar;
