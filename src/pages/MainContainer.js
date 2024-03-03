import Div from "../components/Div";
import DivcontainerFluid from "../components/DivcontainerFluid";
import ImageFill from "../components/ImageFill";
import DivmxAuto from "../components/DivmxAuto";
import styles from "./MainContainer.module.css";

const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <main className={styles.appByHtml}>
        <Div />
        <DivcontainerFluid />
        <div className={styles.separator} />
        <section className={styles.divFlexContainer}>
          <ImageFill />
          <DivmxAuto />
        </section>
      </main>
    </div>
  );
};

export default MainContainer;
