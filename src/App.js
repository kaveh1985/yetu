import styles from "./App.module.css";
import Header from "./components/header/Header";


function App() {
  return (
    <div className={styles.body}>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
