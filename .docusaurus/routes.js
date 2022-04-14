
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/',
    component: ComponentCreator('/blog/','48e'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/','73a'),
    exact: true
  },
  {
    path: '/blog/first-blog-post/',
    component: ComponentCreator('/blog/first-blog-post/','954'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/','317'),
    exact: true
  },
  {
    path: '/blog/tags/easylogic/',
    component: ComponentCreator('/blog/tags/easylogic/','28f'),
    exact: true
  },
  {
    path: '/blog/tags/sapa/',
    component: ComponentCreator('/blog/tags/sapa/','27a'),
    exact: true
  },
  {
    path: '/blog/tags/start/',
    component: ComponentCreator('/blog/tags/start/','a19'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/','7dc'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/','4ac'),
    routes: [
      {
        path: '/docs/intro/',
        component: ComponentCreator('/docs/intro/','688'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/class-features/',
        component: ComponentCreator('/docs/tutorial-basics/class-features/','d7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/core-system-design/',
        component: ComponentCreator('/docs/tutorial-basics/core-system-design/','f19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/dom-based-class/',
        component: ComponentCreator('/docs/tutorial-basics/dom-based-class/','6af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/dom-event-system/',
        component: ComponentCreator('/docs/tutorial-basics/dom-event-system/','727'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/life-cycle/',
        component: ComponentCreator('/docs/tutorial-basics/life-cycle/','2b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/messaging-system/',
        component: ComponentCreator('/docs/tutorial-basics/messaging-system/','f45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/start-sapa/',
        component: ComponentCreator('/docs/tutorial-basics/start-sapa/','1e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions/',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions/','bc2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site/',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site/','dad'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','61a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
