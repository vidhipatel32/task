import styles from "./DivcontainerFluid.module.css";

const DivcontainerFluid = () => {
  return (
    <section className={styles.divcontainerFluid}>
      <div className={styles.divcontainer}>
        <div className={styles.div}>
          <div className={styles.heading1}>
            <h1 className={styles.computerEngineering}>Computer Engineering</h1>
          </div>
          <div className={styles.ptextWhite}>
            <div className={styles.computerEngineersFollow}>
              142,765 Computer Engineers follow this
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivcontainerFluid;
