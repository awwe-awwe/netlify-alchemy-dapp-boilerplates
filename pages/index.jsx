import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1>Привет мир!</h1>
        <InstructionsComponent></InstructionsComponent>
      </main>
    </div>
  );
}
