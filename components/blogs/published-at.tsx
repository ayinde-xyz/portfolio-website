import { POST_QUERYResult } from "@/sanity/sanity.types";
import dayjs from "dayjs";

type PublishedAtProps = {
  publishedAt: NonNullable<POST_QUERYResult>["date"];
};

export function PublishedAt({ publishedAt }: PublishedAtProps) {
  return publishedAt ? (
    <p className="text-base text-slate-700">
      {dayjs(publishedAt).format("D MMMM YYYY")}
    </p>
  ) : null;
}
