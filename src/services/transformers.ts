import { ExtFile } from "@dropzone-ui/react";

export function transformCdnResponse(res: string[], files: ExtFile[]) {
  return {
    images: res.filter((res, index) => files?.[index]?.type?.includes("image")),
    videos: res.filter((res, index) => files?.[index]?.type?.includes("video")),
  };
}
