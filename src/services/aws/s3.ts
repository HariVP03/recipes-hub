import { ExtFile } from "@dropzone-ui/react";
import AWS from "aws-sdk";

export const bucketName = "hari-bucket-123-321" as const;
export const cdnUrl = "d3n9nk4vbuo5sc.cloudfront.net";

export async function uploadFiles(files: ExtFile[]) {
  const s3 = new AWS.S3();

  const base = "upload/";

  const responses = files.map((file) => {
    return s3
      .upload({
        Bucket: bucketName,
        Key: base + file.name,
        Body: file.file,
        ContentType: file.type,
      })
      .promise();
  });

  const images = await Promise.all(responses);

  return images.map((image) => `https://${cdnUrl}/${image.Key}`);
}
