import { useRouter } from "next/router";
import * as React from "react";

export interface PostProps {}

export default function Post(props: PostProps) {
  const router = useRouter();
  return <div>{JSON.stringify(router.query)}</div>;
}
