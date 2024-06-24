import React, {useState} from 'react';
import { Box, Center, Heading, Text} from '@chakra-ui/react';
import { data } from '../utils/data';
import SearchBar from '../components/ui/SearchBar';
import RecipeCard from '../components/ui/RecipeCard';




export const RecipeListPage = ({onSelectedRecipe}) => {
  const [searchTerm, setSearchTearm] = useState('');
  


  const filteredData = data.hits.filter(({recipe}) => recipe.label.toLowerCase().includes(searchTerm.toLowerCase()))



  

  return (
    <Center flexDir="column" py={10}>
      <Heading mb={10}>Recipe List</Heading>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTearm}/>
      <Box display='flex' flexWrap='wrap' justifyContent='center'>
        { filteredData.length > 0 ? (
          filteredData.map(({recipe}) => (
            <RecipeCard key={recipe.label} recipe={recipe} onSelectedRecipe={onSelectedRecipe}/>
          ))
        ) : (
          <Text fontSize='xl' mt ={5} >No Recipe Found</Text>
        )}

      </Box>
      
    </Center>
  );
};
