import { useCallback } from "react";
import styles from "./Div.module.css";

const Div = () => {
  const onLinkContainerClick = useCallback(() => {
  
  }, []);

  return (
    <header className={styles.div}>
      <div className={styles.divcontainer}>
        <div className={styles.link} onClick={onLinkContainerClick}>
          <div className={styles.logoS2lihr8ksvg}>
            <div className={styles.logoS2lihr8ksvgFill}>
              <img
                className={styles.logoS2lihr8ksvgIcon}
                loading="lazy"
                alt=""
                src="/logos2lihr8ksvg@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.button}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
          </div>
          <div className={styles.inputSearch}>
            <div className={styles.diveditingViewPort}>
              <div className={styles.searchForYour}>
                Search for your favorite groups in ATG
              </div>
            </div>
          </div>
        </div>
        <div className={styles.horizontalFlexContainer}>
          <div className={styles.button1}>
            <div className={styles.createAccountItsContainer}>
              <span className={styles.createAccount} >{`create Account. `}</span>
              <b className={styles.itsFree}>It's Free!</b>
            </div>
          </div>
          <div className={styles.image}>
            <img className={styles.imageIcon1} alt="" src="/image-1@2x.png" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Div;
