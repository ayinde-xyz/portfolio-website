import { POST_QUERYResult } from "@/sanity/sanity.types";
import dayjs from "dayjs";

type PublishedAtProps = {
  publishedAt: NonNullable<POST_QUERYResult>["date"];
};

export function PublishedAt({ publishedAt }: PublishedAtProps) {
  return publishedAt ? (
    <p className="text-base">
      <span className="hidden md:inline-block">
        {dayjs(publishedAt).format("MMMM D, YYYY")}
      </span>
      <span className="md:hidden inline-block">
        {dayjs(publishedAt).format("DD/MM/YYYY")}
      </span>
    </p>
  ) : null;
}
