import React from "react";
import { Box, Image, Text, Badge } from "@chakra-ui/react";

const RecipeCard = ({ recipe, onSelectedRecipe }) => {
  return (
    <Box
      key={recipe.label}
      m={5}
      p={5}
      w="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={() => onSelectedRecipe(recipe)}
    >
      <Image src={recipe.image} alt={recipe.label} />
      <Text fontSize="xl" mt={2}>
        {recipe.label}
      </Text>
      <Text fontSize="md" mt={2}>
        {recipe.dietLabels && (
          <Badge colorScheme="green">{recipe.dietLabels[0]}</Badge>
        )}
      </Text>
      <Text fontSize="md" mt={2}>
        {recipe.cautions && (
          <Badge colorScheme="red">{recipe.cautions[0]}</Badge>
        )}
      </Text>
      <Text fontSize="md" mt={2}>
        {recipe.mealType}
      </Text>
      <Text fontSize="md" mt={2}>
        {recipe.dishType}
      </Text>
      <Text fontSize="md" mt={2}>
        {recipe.healthLabels.includes("Vegan") && (
          <Badge colorScheme="green">Vegan</Badge>
        )}
      </Text>
      <Text fontSize="md" mt={2}>
        {recipe.healthLabels.includes("Vegetarian") && (
          <Badge colorScheme="green">Vegetarian</Badge>
        )}
      </Text>
    </Box>
  );
};
export default RecipeCard;
