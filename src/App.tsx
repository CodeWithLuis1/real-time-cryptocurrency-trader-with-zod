import { useEffect } from "react";
import styles from "./App.module.css";
import CriptoSearchForm from "./components/CriptoForm/CriptoSearchForm";
import { useCryptoStore } from "./store";

function App() {
  const fetchCryptos = useCryptoStore ((state)=> state.fechCryptos)
  useEffect(()=>{
    fetchCryptos()
  },[])
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


