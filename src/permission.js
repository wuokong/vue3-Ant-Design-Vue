import router from './router'
import store from './store'

// 全局前置守卫
router.beforeEach(async (to) => {
    console.log(to)
    if (router.getRoutes().length == 1) {
        store.dispatch('ExamineLoginOutlined', to)
    }
    if (to.matched.length == 0) {
        // store.dispatch('QuietLogin')
    }
    // next({path: '/'})
    return true
})
