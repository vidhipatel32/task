import styles from "./ImageFill.module.css";

const ImageFill = () => {
  return (
    <div className={styles.imageFill}>
      <div className={styles.divdNone}>
        <div className={styles.listmargin}>
          <div className={styles.list}>
            <div className={styles.item}>
              <div className={styles.link}>
                <a
                  className={styles.allPosts32}
                  href="https://dont-copy.netlify.app/"
                  target="_blank"
                >
                  All Posts (32)
                </a>
              </div>
            </div>
            <div className={styles.item1}>
              <div className={styles.link1}>
                <a
                  className={styles.article}
                  href="https://dont-copy.netlify.app/"
                  target="_blank"
                >
                  Article
                </a>
              </div>
            </div>
            <div className={styles.item2}>
              <div className={styles.link2}>
                <div
                  className={styles.event}
                  
                  target="_blank"
                >
                  Event
                </div>
              </div>
            </div>
            <div className={styles.item3}>
              <div className={styles.link3}>
                <div
                  className={styles.education}
            
                  target="_blank"
                >
                  Education
                </div>
              </div>
            </div>
            <div className={styles.item4}>
              <div className={styles.link4}>
                <div
                  className={styles.job}
                  
                  target="_blank"
                >
                  Job
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divdFlexmargin}>
          <div className={styles.divdFlex}>
            <div className={styles.buttonWritePost}>
              <div className={styles.writePost}>Write Post</div>
              <div className={styles.image}>
                <div className={styles.imageFill1}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image-2@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.buttonJoinGroupmargin}>
              <div className={styles.buttonJoinGroup}>
                <div className={styles.image1}>
                  <div className={styles.imageFill2}>
                    <img
                      className={styles.imageIcon1}
                      alt=""
                      src="/image-3@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.joinGroup}>Join Group</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFill;
