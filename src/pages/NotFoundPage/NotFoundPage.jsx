import { Helmet } from "react-helmet-async";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <main className={styles.notFound}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Page not found</p>
        <a className={styles.link} href="/">
          Go to Home
        </a>
      </main>
    </>
  );
};

export default NotFoundPage;
