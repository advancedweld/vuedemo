type NavItem = {
  title: string
  path: string
}
type ImgItem = {
  path: string
}
type HeaderProps = {
  class?: string
  isShow: boolean
  activeTab: string
  /* 可选属性 */
  myProp?: string
}

export type { HeaderProps, NavItem, ImgItem }
