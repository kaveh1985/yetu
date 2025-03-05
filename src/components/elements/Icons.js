import { PiCirclesFour} from "react-icons/pi";
import { IoSearchCircleOutline } from "react-icons/io5";
import styles from "./Icons.module.css"

export default function Icons() {
  return (
    <div className={styles.icons}>
      <PiCirclesFour size={25}/>
      <IoSearchCircleOutline size={31}/>
    </div>
  )
}
