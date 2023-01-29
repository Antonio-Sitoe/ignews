import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { getPrismicClient } from "../../services/Prismic";
import styles from "./styles.module.scss";

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  return {
    props: {},
  };
};
function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de marco de 2021</time>
            <strong>
              Saleor – A headless, GraphQL-first, open-source e-commerce
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              sapiente eos adipisci, veniam maxime reiciendis! Maiores soluta,
              distinctio cupiditate magnam sed, quod, repellat sapiente dolorum
              quia non porro repellendus at.
            </p>
          </a>
          <a href="">
            <time>12 de marco de 2021</time>
            <strong>
              Saleor – A headless, GraphQL-first, open-source e-commerce
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              sapiente eos adipisci, veniam maxime reiciendis! Maiores soluta,
              distinctio cupiditate magnam sed, quod, repellat sapiente dolorum
              quia non porro repellendus at.
            </p>
          </a>
          <a href="">
            <time>12 de marco de 2021</time>
            <strong>
              Saleor – A headless, GraphQL-first, open-source e-commerce
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              sapiente eos adipisci, veniam maxime reiciendis! Maiores soluta,
              distinctio cupiditate magnam sed, quod, repellat sapiente dolorum
              quia non porro repellendus at.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export default Posts;
