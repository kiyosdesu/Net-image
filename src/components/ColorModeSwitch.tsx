import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      {/* <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} /> */}
      <IconButton
        aria-label="toggle color mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </>
  );
};

export default ColorModeSwitch;
