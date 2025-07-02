import styles from "./App.module.css";
import CriptoSearchForm from "./components/CriptoForm/CriptoSearchForm";

function App() {
  return (
    <div className="container">
      <h1 className={styles.appTitle}>
        Cryptocurrency <span className={styles.appTitleSpan}>Trader</span>{" "}
      </h1>
      <div className={styles.content}>
        <CriptoSearchForm/>
      </div>
    </div>
  );
}
export default App;
