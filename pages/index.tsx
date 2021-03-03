import Link from "next/link";
import LanguageCard from "../components/LanguageCard.jsx";
import SongCard from "../components/SongCard.jsx";
import styles from "../styles/Home.module.css";

const IndexPage = () => (
  // <Layout title="Home | Next.js + TypeScript Example">
  <main className={styles.home}>
    <div className={styles.leftPanel}>
      <LanguageCard language="English" />
      <LanguageCard language="Bengali" />
      <LanguageCard language="Hindi" />
      <LanguageCard language="Nepali" />
      <LanguageCard language="Tamil" />
      <LanguageCard language="Punjabi" />
    </div>
    <div className={styles.midPanel}>
      <SongCard />
      <div className={styles.midSplit}>
        <div className={styles.midLeft}>
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
        </div>
        <div className={styles.midRight}>
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
        </div>
      </div>
    </div>
    <div className={styles.rightPanel}></div>
  </main>
);

export default IndexPage;
