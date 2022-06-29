import Head from "next/head";
import styles from "../styles/Home.module.css";


export async function getServerSideProps() {
  const res = await fetch(`https://first-issues.vercel.app/api/issues`);
  const data = await res.json();

  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daily Issues</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.containerglass}>
          <h1 className={styles.title}>Looking for a Good First Issue?</h1>
          <p className={styles.description}>If you refresh the page to get a different issue.</p>
          <ul>
            <p className={styles.text}>Name: { data.author }</p>
            <p className={styles.text}>Description: {data.title}</p>
            <p className={styles.text}>Labels: {data.labels.join(", ")}</p>
          </ul>

          <a className={styles.glassBtn} href={ data.url }>To The Repo!</a>
        </div>

      <footer className={styles.footer}>Powered by Open Source</footer>
    </div>
  );
}


// export default function Home({ data }) {
//   return (
//     <div className={styles.container-glass}>
//       <img class="img" src="">
//     </div>
//     );
//   }