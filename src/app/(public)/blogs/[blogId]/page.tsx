import React from "react";

export default async function BlogDetailsPage({
  params,
}: {
  params: { blogId: string };
}) {
    const { blogId } = params;
    console.log(blogId);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`, {
    cache: "no-store", // optional: prevents stale cache
  });
  const { data: post } = await res.json();
  console.log(post);

  return <div>{post?.id}</div>;
}
