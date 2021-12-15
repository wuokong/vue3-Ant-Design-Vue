import router from './router'
import store from './store'

// 全局前置守卫
router.beforeEach(async (to) => {
    if (router.getRoutes().length == 1) {
        store.dispatch('ExamineLoginOutlined', to)
    }
    // next({path: '/'})
    return true
})
