import { useEffect, useState } from "react";
import { Post, getPost } from "../services/aws/dynamo";
import { Loader } from "../components/loader";
import { Flex, chakra } from "@chakra-ui/react";

interface Props {}

export function ViewPost({}: Props) {
  const id = window.location.href.split("/post/")[1];

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      return;
    }

    getPost(id).then((res) => {
      setPost(res);
      console.log(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Flex p="6" bg="#edf3f8" mt="80px" flexDir="column">
      <chakra.h1 fontSize="5xl" mb="1">
        {post?.title}
      </chakra.h1>

      <chakra.h2 fontSize="lg" mb="2">
        by {post?.user}
      </chakra.h2>

      {post?.ratings && post?.ratings.length > 0 && (
        <chakra.h3 fontSize="md">
          rated{" "}
          {post?.ratings?.reduce((a, b) => a + b, 0) / post.ratings.length}
        </chakra.h3>
      )}

      <chakra.p mt="72px" whiteSpace="pre-wrap">
        {post?.description}
      </chakra.p>

      {post?.files?.images && post.files.images.length > 0 && (
        <>
          <chakra.h2 mt="80px" fontSize="2xl">
            Images
          </chakra.h2>

          <Flex flexWrap="wrap">
            {post?.files.images.map((e, i) => (
              <chakra.img
                src={e}
                key={i}
                maxW="400px"
                maxH="400px"
                objectFit="cover"
                m="2"
              />
            ))}
          </Flex>
        </>
      )}

      {post?.files?.videos && post.files.videos.length > 0 && (
        <>
          <chakra.h2 mt="80px" fontSize="2xl">
            Videos
          </chakra.h2>

          <Flex flexWrap="wrap">
            {post?.files.images.map((e, i) => (
              <chakra.video
                src={e}
                key={i}
                maxW="400px"
                maxH="400px"
                objectFit="cover"
                m="2"
              />
            ))}
          </Flex>
        </>
      )}
    </Flex>
  );
}
