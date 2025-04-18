import React from 'react';
// import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageHeader from '@site/src/components/homepage/header';
import HomepageFeatures from '@site/src/components/homepage/features';
import HomepageSummary from '@site/src/components/homepage/summary';
import HomepageCTA from '@site/src/components/homepage/cta';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Design System"
      description="デザインとは構造である──思想と一貫性のためのガイド">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageSummary />
        <HomepageCTA />
      </main>
    </Layout>
  );
}
