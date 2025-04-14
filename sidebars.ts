/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.
 */

// @ts-check

import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/** @type {SidebarsConfig} */
const sidebars: SidebarsConfig = {
  guideSidebar: [
    {
      type: 'category',
      label: 'Tokens',
      collapsible: true,
      collapsed: false,
      items: [
        'tokens/colors',
        'tokens/typography',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      collapsible: true,
      collapsed: false,
      items: [
        'components/button',
        'components/input',
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      collapsible: true,
      collapsed: false,
      items: [
        'usage/guidelines',
        'usage/anti-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsible: true,
      collapsed: true,
      items: [
        'resources/figma',
      ],
    },
  ],
};

module.exports = sidebars;