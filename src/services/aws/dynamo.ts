import AWS from "aws-sdk";
import { nanoid } from "nanoid";

const postsTableName = "posts";
const cartTableName = "cart";

export type Post = {
  id: string;
  calories: number;
  title: string;
  description: string;
  files: {
    images: string[];
    videos: string[];
  };
  user: string;
  ratings: number[];
};

export type Cart = {
  id: string;
  meals: string[];
};

export async function persistPost(post: Post) {
  const dynamo = new AWS.DynamoDB.DocumentClient();

  return dynamo
    .put({
      TableName: postsTableName,
      Item: post,
    })
    .promise();
}

export async function getPosts() {
  const dynamo = new AWS.DynamoDB.DocumentClient();

  return dynamo
    .scan({
      TableName: postsTableName,
    })
    .promise()
    .then((result) => result.Items as Post[]);
}

export async function getPost(id: string) {
  const dynamo = new AWS.DynamoDB.DocumentClient();

  return dynamo
    .get({
      TableName: postsTableName,
      Key: {
        id,
      },
    })
    .promise()
    .then((result) => result.Item as Post);
}

export async function persistCart(user: string, meal: string) {
  const dynamo = new AWS.DynamoDB.DocumentClient();

  const currentCart = await dynamo
    .get({
      TableName: cartTableName,
      Key: {
        id: user,
      },
    })
    .promise()
    .then((result) => result.Item as Cart)
    .catch((e) => {
      return undefined;
    });

  if (!currentCart) {
    return dynamo
      .put({
        TableName: cartTableName,
        Item: {
          id: user,
          user,
          meals: [meal],
        },
      })
      .promise();
  }

  return dynamo
    .update({
      Key: {
        id: user,
      },
      TableName: cartTableName,
      UpdateExpression: `SET meals = list_append(meals, :newMeal)`,
      ExpressionAttributeValues: {
        ":newMeal": [meal],
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();
}
