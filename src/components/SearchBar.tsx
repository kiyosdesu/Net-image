import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import { useSearch } from "../context/searchContext";

const SearchBar = () => {
  // const [searchQuery, setSearchQuery] = useState<string>();
  const { setSearchQuery } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  const HandleSearch = () => {
    if (inputRef.current?.value) {
      // console.log(searchQuery);
      setSearchQuery(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <InputGroup>
      <Box width="100%">
        {" "}
        <Input
          ref={inputRef}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              HandleSearch();
            }
          }}
          placeholder="Search for images"
          py="4vh"
        />
        <InputRightElement height="100%">
          <Button onClick={HandleSearch} variant="ghost">
            <SearchIcon />
          </Button>
        </InputRightElement>
      </Box>
    </InputGroup>
  );
};

export default SearchBar;
