import { Box, VStack } from "@chakra-ui/react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { SearchProvider } from "./context/searchContext";

const App = () => {
  // const [searchQuery, setSearchQuery] = useState<string>("basketball");
  return (
    <SearchProvider>
      <VStack>
        <Box width="100%" display="flex" justifyContent="center">
          <NavBar />
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          mt="30vh"
        >
          <Main />
        </Box>
      </VStack>
    </SearchProvider>
  );
};

export default App;
