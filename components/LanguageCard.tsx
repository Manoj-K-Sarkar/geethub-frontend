import React from "react";

import styles from "../styles/LanguageCard.module.css";

type Props = {
  language: string;
};

const LanguageCard = ({ language }: Props) => {
  return <div className={styles.languageCard}>{language}</div>;
};

export default LanguageCard;
