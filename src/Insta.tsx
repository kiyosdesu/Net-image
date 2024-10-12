import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, HStack, Text } from "@chakra-ui/react";

const Insta = () => {
  return (
    <Button
      // bg="#3d3d52"
      boxShadow="-20px -20px 60px #282836,
    20px 20px 60px #52526e;"
    >
      <HStack>
        <Text>Socials</Text>
        <ExternalLinkIcon />
      </HStack>
    </Button>
  );
};

export default Insta;
