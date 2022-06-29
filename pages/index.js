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
        <meta name="description" content="GitHub: Good-First-Issue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.containerglass}>
          <h1 className={styles.title}>GitHub : Good First Issue</h1>
          <p className={styles.description}>Looking for a project to contribute to?</p>
          <ul className={styles.text}>
            <p>Name: { data.author }</p>
            <p>Description: { data.title }</p>
            <p>Labels: { data.labels.join(", ")}</p>
          </ul>

          <a className={styles.glassBtn} href={ data.url }>To The Repo!</a>
        </div>

      <footer className={styles.footer}><a href="https://github.com/Hopelezz/FirstIssuesApp">Powered by Open Source</a></footer>
    </div>
  );
}