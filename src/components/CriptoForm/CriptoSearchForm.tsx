import styles from "./CriptoSearchForm.module.css";
import { currencies } from "../../data/index";
// import { useCryptoStore } from "../../store";

export default function CriptoSearchForm() {
  // const fechCryptos = useCryptoStore((state) => state.fechCryptos);
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="currency" className={styles.label}>
          Currency
        </label>
        <select name="currency" id="currency" className={styles.select}>
          <option value=""> --Select--</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {" "}
              {currency.name}{" "}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="criptocurrency" className={styles.label}>
          Cryptocurrency
        </label>
        <select
          name="criptocurrency"
          id="criptocurrency"
          className={styles.select}
        >
          <option value=""> --Select--</option>
        </select>
      </div>

      <input type="submit" value={"Quote"} className={styles.submit} />
    </form>
  );
}
