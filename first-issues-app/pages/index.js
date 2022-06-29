import Head from "next/head";
import styles from "../styles/Home.module.css";


export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/issues`);
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

      <body>
        <div className={styles.containerglass}>
      
      {/* <main className={styles.main}> */}
        <h1 className={styles.title}>Looking for a Good First Issue?</h1>
        <p className={styles.description}>If you refresh the page you should be able to see new Repos.  </p>
      <ul>
        <p className={styles.text}>RepoName: {data.title}</p>
        <p className={styles.text}>Name: { data.author }</p>
        <p className={styles.text}>Labels: {data.labels.join(", ")}</p>
      </ul>

       
    <a className={styles.btn} href={ data.url }>To The Repo!</a>

      {/*   </main> */}
      </div>  {/* Container-glass*/}

      <footer className={styles.footer}>Powered by Open Source</footer>
      </body>
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