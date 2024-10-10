import { Text, HStack, Box, Button } from "@chakra-ui/react";
import useImage from "../hooks/useImage";
import ImageCard from "./ImageCard";
import { useSearch } from "../context/searchContext";

const ImageContainer = () => {
  const { searchQuery } = useSearch();
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useImage(searchQuery);

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Text>Loading...</Text>;

  return (
    <>
      <HStack
        flexWrap="wrap"
        justifyContent="center"
        overflow="hidden"
        width="100%"
        // margin="10px"
      >
        {data?.pages
          .flatMap((page) => page.results)
          .map((imageData, index) => (
            <ImageCard
              imageSource={imageData.urls.small}
              key={index}
              title={imageData.description}
              likes={imageData.likes}
            />
          ))}
      </HStack>
      <Box my="5vh">
        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </Button>
        )}
      </Box>
    </>
  );
};

export default ImageContainer;
