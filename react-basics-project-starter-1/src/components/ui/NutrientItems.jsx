
import React from 'react';
import { Badge } from '@chakra-ui/react';

const NutrientItems = ({nutrientItems}) => {
    return (
        <>
        {nutrientItems.map((label) => (
            <Badge key={label} borderRadius="full" px="2" mr="3" colorScheme="teal">
            {label}
            </Badge>
        ))}
        </>
    )
    }

export default NutrientItems;