import React from 'react';
// import Link from '@docusaurus/Link';
import styles from './summary.module.css';

export default function HomepageSummary() {
  return (
    <section className={styles.summarySection}>
      <div className="container">
        <h2>このドキュメントの目的</h2>
        <p>
          このドキュメントは、デザインにまつわる判断とその理由を記録し、共有するためのもの。実装のガイドではなく、思想の構造です。
        </p>
        <p>
          トークンやコンポーネントの定義、使用方法、アンチパターンの記録は、すべて「なぜそうするのか」を言語化するために存在しています。
        </p>
      </div>
    </section>
  );
}
