import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './features.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'デザインは 見た目ではなく構造',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <p>デザインには見た目の美しさも含まれます。</p>
        <p>しかしその本質は文字通り「設計」であり、そこには見た目だけでなく以下のような要素が含まれます：</p>
        <ul>
          <li>視線や導線などの体験設計</li>
          <li>使いやすく目的達成しやすいインターフェイス・レイアウト設計</li>
          <li>情報をどう伝えるか・どう受け取ってもらうかという構造や動作の設計</li>
        </ul>
        <p>心地よく情報を受け取れる構造、それこそがデザインの本質です。</p>
      </>
    ),
  },
  {
    title: '最終目的は「よりよく伝えること」',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <p>デザインは以下のような整理と構造を含みます：</p>
        <ul>
          <li>情報を整理し 取り出しやすくすること</li>
          <li>言葉の順序や選び方で理解を助けること</li>
          <li>視線や思考の流れを妨げないこと</li>
        </ul>
        <p>これらはすべて、情報をどのように伝え、どのように受け取りやすくするか──そのために必要な設計です。</p>
      </>
    ),
  },
  {
    title: '美しさや技術もまた手段',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <p>以下のような要素も、すべては伝達のための設計対象です：</p>
        <ul>
          <li>目的をより早く達成するまでの導線</li>
          <li>UIやアニメーションの心地よさ</li>
          <li>体験の一貫性と視覚的な整合性</li>
          <li>ライティングで生み出される構造</li>
          <li>コードの記述ルール</li>
          <li>データベース構造とそのつながり</li>
          <li>データ受け渡し・REST APIのレスポンス構造</li>
        </ul>
        <p>これらはすべて、意味を正確に、効率よく、心地よく伝えるための手段です。</p>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.eyeCatch}>
        <Svg className={styles.featureSvg} role="img" />
        <Heading as="h3">{title}</Heading>
        {description}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
