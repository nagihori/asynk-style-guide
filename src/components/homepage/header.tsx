import React from 'react';
import clsx from 'clsx';
import styles from './header.module.css';
import Link from '@docusaurus/Link';

export default function HomepageHeader() {
  return (
    <header 
      className={clsx('hero hero--primary', styles.heroBanner)}>
      <div 
        className="container">
        <h1 
          className="hero__title">
            Design is structure.
        </h1>
        <p 
          className="hero__subtitle">
          デザインとは、情報を伝えるために構造を整える行為です。
          美しさはその副産物であり、目的ではありません。
        </p>
        <div 
          className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            スタイルガイドを見る
          </Link>
        </div>
      </div>
    </header>
  );
}
