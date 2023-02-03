import Head from "next/head";
import React from "react";
import styles from "./post.module.scss";

interface IPostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

function Post({ post }: IPostProps) {
  return (
    <>
      <Head>
        <title>
          <title>{post.title} | Ignews</title>
        </title>
      </Head>

      <main></main>
    </>
  );
}

export default Post;
