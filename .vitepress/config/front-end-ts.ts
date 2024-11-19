interface SideBarItemType {
  text: string
  collapsed?: boolean
  items: Array<{ text: string; link: string }>
}

const frontEndTs: SideBarItemType = {
  text: 'TypeScript',
  collapsed: false,
  items: [
    { text: 'tsconfig', link: '/front-end/02.typescript/00.tsconfig' },
    { text: '泛型和泛型约束', link: '/front-end/02.typescript/泛型和泛型约束' },
    {
      text: 'keyof和typeof运算符',
      link: '/front-end/02.typescript/keyof和typeof',
    },
  ],
}

export default frontEndTs
