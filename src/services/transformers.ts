import { ExtFile } from "@dropzone-ui/react";

export function transformCdnResponse(res: string[], files: ExtFile[]) {
  return {
    images: res.filter((_res, index) =>
      files?.[index]?.type?.includes("image")
    ),
    videos: res.filter((_res, index) =>
      files?.[index]?.type?.includes("video")
    ),
  };
}
