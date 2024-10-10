import { Box, Show, Text } from "@chakra-ui/react";

const TItle = () => {
  return (
    <div>
      {" "}
      <Box>
        <Show below="sm">
          <Text fontSize="1xl">WhereIsMyImage</Text>
        </Show>
        <Show above="sm">
          <Text fontSize="5xl">WhereIsMyImage</Text>
        </Show>
      </Box>
    </div>
  );
};

export default TItle;
