import { useMemo } from "react";
import styles from "./DivdFlex.module.css";

const DivdFlex = ({
  natureRDsfVg8ljpg,
  article,
  whatIfFamousBrandsHadRegu,
  regulaBrands,
  user1COSOQoOXjpg,
  image2,
  propRowGap,
}) => {
  const divdFlexStyle = useMemo(() => {
    return {
      rowGap: propRowGap,
    };
  }, [propRowGap]);

  return (
    <div className={styles.divdFlex}>
      <img
        className={styles.natureRdsfvg8ljpgIcon}
        loading="lazy"
        alt=""
        src={natureRDsfVg8ljpg}
      />
      <div className={styles.articleParent}>
        <h2 className={styles.article}>{article}</h2>
        <div className={styles.divdFlexWrapper}>
          <div className={styles.divdFlex1} style={divdFlexStyle}>
            <div className={styles.heading4margin}>
              <div className={styles.heading4}>
                <div className={styles.whatIfFamousContainer}>
                  <p className={styles.whatIfFamous}>
                    {whatIfFamousBrandsHadRegu}
                  </p>
                  <p className={styles.regulabrands}>{regulaBrands}</p>
                </div>
              </div>
            </div>
            <div className={styles.divbtn}>
              <div className={styles.div}>
                <div className={styles.image}>
                  <div className={styles.imageFill}>
                    <img className={styles.imageIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divFlexDiv}>
          <div className={styles.iveWorkedIn}>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </div>
        </div>
        <div className={styles.divdFlex2}>
          <div className={styles.divdFlex3}>
            <img
              className={styles.user1CosoqooxjpgIcon}
              loading="lazy"
              alt=""
              src={user1COSOQoOXjpg}
            />
            <div className={styles.divdFlex4}>
              <div className={styles.divtextWrapper}>
                <div className={styles.siddharthGoyal}>Siddharth Goyal</div>
              </div>
            </div>
          </div>
          <div className={styles.divdFlex5}>
            <div className={styles.divdNone}>
              <div className={styles.image1}>
                <div className={styles.imageFill1}>
                  <img
                    className={styles.imageIcon1}
                    alt=""
                    src="/image-5.svg"
                  />
                </div>
              </div>
              <div className={styles.kViews}>1.4k views</div>
            </div>
            <div className={styles.button}>
              <div className={styles.image2}>
                <div className={styles.imageFill2}>
                  <img className={styles.imageIcon2} alt="" src={image2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivdFlex;
