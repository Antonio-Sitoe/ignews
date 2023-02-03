import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { getPrismicClient } from "../../services/Prismic";
import styles from "./styles.module.scss";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "publication")],
    {
      fetch: ["publication.type", "publication.content"],
      pageSize: 100,
    }
  );
  console.clear();

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: post?.data?.title ? RichText.asText(post?.data?.title) : "",
      excerpt:
        post.data.content.find((content) => content?.type === "paragraph")
          ?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}
function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => {
            return (
              <Link href={`/posts/${post.slug}`} key={post.slug}>
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Posts;
