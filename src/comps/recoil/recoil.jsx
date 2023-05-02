import { atom } from "recoil"

export const user = atom({ key: 'user', default: null })
export const drawerWidth = atom({ key: 'drawerWidth', default: 240 })
export const isMobile = atom({ key: 'isMobile', default: false })
export const toggleMenu = atom({ key: 'toggleMenu', default: false })