import frontEndBasic from './front-end-basic.ts'
import frontEndTs from './front-end-ts.ts'
import frontEndDesignPatterns from './front-end-design-patterns.ts'
const sideBar = {
  '/front-end/': [
    { text: '前端', link: '/front-end/front-end/' },
    frontEndBasic,
    frontEndTs,
    frontEndDesignPatterns,
  ],
}

export default sideBar
