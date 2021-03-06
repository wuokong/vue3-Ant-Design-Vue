import { createStore } from 'vuex'
import router from '../router'
import { asyncRoutes } from '../router/data'
import setting from './setting'
import { message } from 'ant-design-vue'
const addRoutesPort = (aRoutes) => {
    aRoutes.map(about => {
        if (about.children ) { 
            addRoutesPort(about.children) }
        router.addRoute(about)
    })
}
// 动态获取当前路由列表的首个路由
const pathRoot = (route, openKeys = []) => {
    let i = 0
    for (let res of route) {
        if (!res.meta.hidden && i == 0) {
            i = 1
            if (res.children && res.children.length > 0 ) {
                openKeys.push(res.path)
                return pathRoot(res.children, openKeys)
            } else {
                return { 
                    path: res.path,
                    openKeys
                }
            }
        }
    }
}
export default createStore({
    // 设置 初始化值
    state: {
        total: 0,
        form: undefined,
        openKeys: [],
        selectedKeys: [],
        language: 'zh-cn'
    },
    // 引入模块
    modules: {
        setting
    },
    // 修改 this.$store.commit() state的值
    mutations: {
        SetTotal (state, total) {
            state.total = total
        },
        // 是否登录
        SET_INFO_FORM (state, form) {
            state.form = form
            sessionStorage.setItem('INFO_FORM', form)
        },
        // 路由菜单 默认展开项
        SetOpenKeys (state, openKeys) {
            state.openKeys = openKeys
            sessionStorage.setItem('OPEN_KEYS', openKeys)
        },
        // 默认选中路由
        SetSelectedKeys (state, selectedKeys) {
            state.selectedKeys = selectedKeys
            sessionStorage.setItem('SELECTED_KEYS', selectedKeys)
        },
        // 设置语言
        SetLanguage (state, language) {
            state.language = language
        },
    },
    // 异步操作 异步调用this.$store.dispatch()   （通过commit调用mutations 改变值）
    actions: {
        AddTotal ({ commit }, total) {
            let num = total * 2
            commit('SetTotal', num) // 调用 mutations
        },
        //登录
        async LoginOutlined({ commit, getters }, form) {
            const key = 'updatable';
            if (!form.load ) message.loading({ content: 'Loading...', key });
            commit('SET_INFO_FORM', form)
            sessionStorage.setItem('PRESENT_ROUTE', JSON.stringify(asyncRoutes))
            await addRoutesPort(asyncRoutes)
            if (getters.selectedKeys.length == 0 ) {
                let item = pathRoot(asyncRoutes)
                commit('SetSelectedKeys', JSON.stringify([item.path]))
                commit('SetOpenKeys', JSON.stringify(item.openKeys))
                router.replace(item.path)
            } else {
                router.replace(JSON.parse(getters.selectedKeys)[0])
            }
            if (!form.load ) message.success({ content: 'login success!', key, duration: 2 })
        },
        //检验
        ExamineLoginOutlined({ getters, dispatch }, to) {
            if (!getters.form) {
                if (to.path != '/') {
                    router.replace('/')
                }
                return
            }
            dispatch('LoginOutlined', {...getters.form, load: true, path: to.path})
        },
        // 退出登录
        async QuietLogin({ commit }) {
            const key = 'updatables'
            message.loading({ content: 'Loading...', key })
            commit('SET_INFO_FORM', '')
            commit('SetOpenKeys', '')
            commit('SetSelectedKeys', '')
            sessionStorage.setItem('PRESENT_ROUTE', '')
            location.reload()
            setTimeout(() => {
                message.success({ content: 'quiet success!', key, duration: 2 })
            }, 500)
        },
    },
    // get
    getters: {
        total: state => state.total,
        language: state => state.language,
        form: state => sessionStorage.getItem('INFO_FORM') || state.form,
        openKeys: state => sessionStorage.getItem('OPEN_KEYS') || state.openKeys,
        selectedKeys: state => sessionStorage.getItem('SELECTED_KEYS') || state.selectedKeys
    }
})