import React from 'react';
import Link from '@docusaurus/Link';
import styles from './cta.module.css';

export default function HomepageCTA() {
  return (
    <section className={styles.ctaSection}>
        <h2>参加のかたち</h2>
        <p>
            このスタイルガイドは、読み手・書き手・育て手すべてに開かれています。<br />
            興味を持った方は、ぜひドキュメントを編集してみてください。
        </p>
        <Link
            className="button button--primary button--lg margin-top--sm"
            to="/docs/intro">
            編集に参加する
        </Link>
    </section>
  );
}
