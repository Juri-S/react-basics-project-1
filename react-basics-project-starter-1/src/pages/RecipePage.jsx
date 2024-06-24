import React from "react";
import { Box, Image, Text, Center, Button } from "@chakra-ui/react";
import NutrientItems from "../components/ui/NutrientItems";
import IngredientList from "../components/ui/IngredientList";

export const RecipePage = ({ recipe, onBack }) => {
  return (
    <Center flexDir="column" py={10}>
      <Button onClick={onBack}>Back</Button>
      <Box w="80%" borderWidth="1px" borderRadius="lg" overflow="hidden" mt={5}>
        <Image src={recipe.image} alt={recipe.label} w="500px" />
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Box>
              <Text
                mt="3"
                fontSize="3xl"
                fontWeight="semibold"
                lineHeight="short"
              >
                {recipe.label}
              </Text>
              <Text> {recipe.dietLabels}</Text>
              <Text>{recipe.cautions}</Text>
              <Text>{recipe.mealType}</Text>
              <Text>{recipe.dishType}</Text>
            </Box>
            <Text mt="1" fontSize="l" fontWeight="semibold" lineHeight="short">
              Health labels
            </Text>
            <NutrientItems nutrientItems={recipe.healthLabels} />
          </Box>
          <Box>
            <IngredientList recipe={recipe} />
          </Box>
          <Box>
            <Text mt="1" fontSize="l" fontWeight="semibold" lineHeight="short">
              Instructions
            </Text>
            <Text>{recipe.instructions}</Text>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};
