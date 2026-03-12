import { useTaskContext } from "../../contexts/TaskContext";
import styles from "./styles.module.css";

export function CountDown() {
  const { state } = useTaskContext();
  //console.log(taskContext);

  return (
    <div className={styles.container}>{state.formmatedSecondsRemaining}</div>
  );
}
