import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";

const CustomDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const placement = "right";
  return (
    <>
      <Button
        colorScheme="blue"
        onClick={onOpen}
        bg="#3d3d52"
        boxShadow="  #000000;"
      >
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <HStack>
            <Button onClick={onClose}>Close</Button>
            <Box>
              <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            </Box>
          </HStack>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
