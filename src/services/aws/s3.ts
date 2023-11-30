import AWS from "aws-sdk";

const bucketName = "hari-bucket-123-321" as const;

export const S3 = new AWS.S3();
