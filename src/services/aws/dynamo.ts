import AWS from "aws-sdk";

const tableName = "posts";

export type Post = {
  id: string;
  title: string;
  description: string;
  files: {
    images: string[];
    videos: string[];
  };
  user: string;
  ratings: number[];
};

export async function persistPost(post: Post) {
  const dynamo = new AWS.DynamoDB.DocumentClient();

  return dynamo
    .put({
      TableName: tableName,
      Item: post,
    })
    .promise();
}

export async function getPosts() {
  const dynamo = new AWS.DynamoDB.DocumentClient();

  return dynamo
    .scan({
      TableName: tableName,
    })
    .promise()
    .then((result) => result.Items as Post[]);
}
