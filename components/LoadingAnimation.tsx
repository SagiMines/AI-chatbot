import styles from '@/styles/LoadingAnimation.module.css';

const LoadingAnimation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstLoadingDot}></div>
      <div className={styles.secondLoadingDot}></div>
      <div className={styles.thirdLoadingDot}></div>
    </div>
  );
};

export default LoadingAnimation;
