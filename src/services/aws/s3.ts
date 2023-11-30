import { ExtFile } from "@dropzone-ui/react";
import AWS from "aws-sdk";

export const bucketName = "hari-bucket-123-321" as const;

export function uploadFiles(files: ExtFile[]) {
  const s3 = new AWS.S3();

  const base = "upload/";

  const promises = files.map((file) => {
    return s3
      .upload({
        Bucket: bucketName,
        Key: base + file.name,
        Body: file.file,
        ContentType: file.type,
      })
      .promise();
  });

  return Promise.all(promises);
}
