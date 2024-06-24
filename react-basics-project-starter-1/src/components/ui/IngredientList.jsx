import React from "react";
import { Text } from "@chakra-ui/react";

const IngredientList = ({ recipe }) => {
  return (
    <>
      <Text mt="1" fontSize="l" fontWeight="semibold" lineHeight="short">
        Ingredients
      </Text>
      <Text>{recipe.ingredientLines.join(", ")}</Text>
    </>
  );
};

export default IngredientList;
