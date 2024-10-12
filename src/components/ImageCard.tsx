// import { StarIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  imageSource: string;
  likes: number;
  // username: string;
  title: string;
}

const ImageCard = ({ imageSource, likes }: Props) => {
  const [imageHover, setImageHover] = useState<boolean>(false);
  return (
    <Box
      onMouseOver={() => setImageHover(true)}
      onMouseOut={() => setImageHover(false)}
    >
      <Card
        maxW="450px" // Fixed width for uniform size
        maxH="100%"
        overflow="hidden" // To handle any overflow of images
        margin="17px"
      >
        <CardBody padding="0" bg="black">
          <Image
            src={imageSource}
            objectFit="cover"
            width="100%" // Make sure the image covers the entire card width
            height="100%" // Make sure the image covers the entire card height
            opacity={imageHover ? "0.4" : ""}
            transition="0.5s"
          />
          <Stack>
            {imageHover && (
              <Heading
                display="flex"
                justifyContent="center"
                // alignItems="center"
                size="md"
                // marginTop="8px"
                ml="1.5vh"
                mb="1vh"
                position="absolute"
                textAlign="center"
                bottom="0"
              >
                <Box color="#E53E3E" padding="1vh" borderRadius="2vh">
                  {/* <StarIcon /> */}
                  {likes} likes
                </Box>
              </Heading>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ImageCard;
