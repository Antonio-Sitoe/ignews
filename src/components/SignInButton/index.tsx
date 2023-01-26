import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  let isUserLoggedIn = true;

  if (isUserLoggedIn)
    return (
      <button className={styles.signInButton}>
        <FaGithub color="#04d361" />
        Antonio Sitoe
        <FiX color="#737380" className={styles.closeIcon} />
      </button>
    );
  else
    return (
      <button className={styles.signInButton}>
        <FaGithub color="#eba417" />
        Sign In with GitHub
      </button>
    );
}
