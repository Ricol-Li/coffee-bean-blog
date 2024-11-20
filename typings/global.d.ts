// docs/global.d.ts
declare interface GlobalSideBarItemType {
  text: string
  collapsed?: boolean
  link?: string
  items: Array<{ text: string; link: string }>
}
