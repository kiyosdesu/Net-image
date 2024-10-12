import { Box, HStack, Show, VStack, useColorMode } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import RecommendedPhotos from "./RecommendedPhotos";
import ColorModeSwitch from "./ColorModeSwitch";
import TItle from "./TItle";
import Insta from "../Insta";
// import CustomDrawer from "./CustomDrawer";

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <VStack width="100%">
        <Box
          // alignSelf="flex-start"
          id="TITLE"
          width="100%"
          bg={colorMode === "dark" ? "#2D3748" : "#F7FAFC"}
          position="fixed"
          zIndex="10"
          p="0"
        >
          <HStack width="90%" ml="1vh">
            <TItle />
            <SearchBar />
            <Box>
              <Show above="sm">
                <HStack>
                  <Insta />
                  <ColorModeSwitch />
                </HStack>
              </Show>
            </Box>
            {/* <Show below="sm">
              <CustomDrawer />
            </Show> */}
          </HStack>
        </Box>
        {/* <Box width="100%" mt="50px" id="SEACHBAR">
          <HStack>
            <SearchBar />
          </HStack>
        </Box> */}
        <Show above="sm">
          <Box id="RECOMMENDEDPHOTOS" mt="12vh">
            <RecommendedPhotos />
          </Box>
        </Show>
      </VStack>
    </>
  );
};

export default NavBar;
