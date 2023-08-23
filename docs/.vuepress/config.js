module.exports = {
  themeConfig: {
    nav: [{ text: '组件', link: '/components/' }],
    sidebar: [
      {
        title: '组件', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/components/HelloWorld/']
      }
    ]
  }
}
