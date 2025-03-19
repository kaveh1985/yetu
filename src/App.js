import styles from "./App.module.css";
import Header from "./components/header/Header";
import Options from "./components/options/Options"


function App() {
  return (
    <div className={styles.body}>
      <div>
        <Header />
        <Options />
      </div>
    </div>
  );
}

export default App;
