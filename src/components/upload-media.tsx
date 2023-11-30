import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Input,
  InputGroup,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { Dropzone, FileMosaic, ExtFile } from "@dropzone-ui/react";
import { uploadFiles } from "../services/aws/s3";

interface Props {}

export function UploadMedia({}: Props) {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<{
    title: string;
    description: string;
    files: {
      images: string[];
      videos: string[];
    };
  }>({
    title: "",
    description: "",
    files: {
      images: [],
      videos: [],
    },
  });

  const [files, setFiles] = useState<ExtFile[]>([]);

  function onSave() {
    setLoading(true);
    uploadFiles(files)
      .then((res) => {
        setData({
          ...data,
          files: {
            images: res.filter((res, index) =>
              files?.[index]?.type?.includes("image")
            ),
            videos: res.filter((res, index) =>
              files?.[index]?.type?.includes("video")
            ),
          },
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Box
      _dark={{
        bg: "#111",
      }}
      p={10}
      h="calc(100vh-80px)"
      maxH="calc(100vh-80px)"
      mt="80px"
    >
      <Box>
        <SimpleGrid
          display={{
            base: "initial",
            md: "grid",
          }}
          columns={{
            md: 3,
          }}
          spacing={{
            md: 6,
          }}
        >
          <GridItem
            colSpan={{
              md: 1,
            }}
          >
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                Upload your recipe story!
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
              >
                You can upload your recipe images or videos here!
              </Text>
            </Box>
          </GridItem>
          <GridItem
            mt={[5, null, 0]}
            colSpan={{
              md: 2,
            }}
          >
            <chakra.form
              shadow="base"
              rounded={[null, "md"]}
              overflow={{
                sm: "hidden",
              }}
            >
              <Stack
                px={4}
                py={5}
                bg="white"
                _dark={{
                  bg: "#141517",
                }}
                spacing={6}
                p={{
                  sm: 6,
                }}
              >
                <SimpleGrid columns={3} spacing={6}>
                  <FormControl id="title" as={GridItem} colSpan={[3, 2]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Title
                    </FormLabel>
                    <InputGroup size="sm">
                      <Input
                        type="tel"
                        value={data.title}
                        onChange={(e) =>
                          setData({ ...data, title: e.target.value })
                        }
                        placeholder="My amazing recipe"
                        focusBorderColor="brand.400"
                        rounded="md"
                      />
                    </InputGroup>
                  </FormControl>
                </SimpleGrid>
                <div>
                  <FormControl id="description" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      About
                    </FormLabel>
                    <Textarea
                      placeholder="Here's what I did!"
                      value={data.description}
                      onChange={(e) =>
                        setData({ ...data, description: e.target.value })
                      }
                      mt={1}
                      rows={3}
                      shadow="sm"
                      focusBorderColor="brand.400"
                      fontSize={{
                        sm: "sm",
                      }}
                    />
                    <FormHelperText>
                      Brief description for your recipe.
                    </FormHelperText>
                  </FormControl>
                </div>
                <FormControl>
                  <FormLabel
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    Cover photo
                  </FormLabel>
                  <Flex
                    mt={1}
                    justify="center"
                    px={6}
                    pt={5}
                    pb={6}
                    borderWidth={2}
                    _dark={{
                      color: "gray.500",
                    }}
                    borderStyle="dashed"
                    rounded="md"
                  >
                    <Dropzone onChange={setFiles} value={files}>
                      {files.map((file: any, i) => (
                        <FileMosaic
                          {...file}
                          backgroundBlurImage={false}
                          alwaysActive
                          preview
                          key={i}
                        />
                      ))}
                    </Dropzone>
                  </Flex>
                </FormControl>
                <Flex gap="12px">
                  <Button
                    type="submit"
                    flex={1}
                    variant="solid"
                    as="a"
                    href="/"
                    py="12px"
                  >
                    Back
                  </Button>

                  <Button
                    onClick={() => onSave()}
                    flex={1}
                    isLoading={loading}
                    variant="solid"
                    colorScheme="blue"
                    py="12px"
                  >
                    Save
                  </Button>
                </Flex>
              </Stack>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
