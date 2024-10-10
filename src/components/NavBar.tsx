import { Box, HStack, Show, VStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import RecommendedPhotos from "./RecommendedPhotos";
import TItle from "./TItle";
import Insta from "../Insta";
// import CustomDrawer from "./CustomDrawer";

const NavBar = () => {
  return (
    <>
      <VStack width="100%">
        <Box
          // alignSelf="flex-start"
          id="TITLE"
          width="100%"
          bg="#3d3d52"
          position="fixed"
          zIndex="10"
          p="0"
        >
          <HStack width="90%" ml="1vh">
            <TItle />
            <SearchBar />
            <Box>
              <Show above="sm">
                <Insta />
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
