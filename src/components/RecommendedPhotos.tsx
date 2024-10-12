import {
  Button,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useSearch } from "../context/searchContext";

const RecommendedPhotos = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  const recommendedPhotos = [
    "nature",
    "sports",
    "technology",
    "space",
    "vehicle",
  ];

  return (
    <VStack gap="8vh">
      <Text fontSize="3xl">Quick Search</Text>
      <UnorderedList
        display="flex"
        flexDirection="row"
        gap="7"
        listStyleType="none"
      >
        {recommendedPhotos.map((rec, ind) => (
          <Button
            boxShadow="-15px 15px 0px #000000,
                    15px -15px 0px #000000;"
            // bg="#3d3d52"
            rounded="md"
            px="9"
            py="5"
            key={ind}
            onClick={() => {
              setSearchQuery(rec);

              console.log(searchQuery);
            }}
          >
            <ListItem fontSize="3vh">{rec}</ListItem>
          </Button>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default RecommendedPhotos;
