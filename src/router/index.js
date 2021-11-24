import router from './routers'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

NProgress.configure({ showSpinner: false })// NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start()
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  next()
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
