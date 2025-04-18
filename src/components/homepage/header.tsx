import React from 'react';
// import clsx from 'clsx';
import styles from './header.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HomepageHeader() {
  return (
    <header 
      className={styles.heroBanner}>
      <div 
        className="container">
        <h1 
          className={styles.heroTitle}>
            Design is structure.
        </h1>
        <p 
          className={styles.heroSubtitle}>
          デザインとは、情報を伝えるために構造を整える行為です。
          美しさはその副産物であり、目的ではありません。
        </p>
        <div 
          className={styles.buttons}>
          <Link
            className={clsx(
              'button button--secondary button--lg',styles.heroButton)}
            to="/docs/intro">
            スタイルガイドを見る
          </Link>
        </div>
      </div>
    </header>
  );
}
