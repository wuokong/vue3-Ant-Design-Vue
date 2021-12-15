import { createStore } from 'vuex'
import router from '../router'
import { asyncRoutes } from '../router/data'
import setting from './setting'
import { message } from 'ant-design-vue'
import { toRaw } from "vue"
const addRoutesPort = (aRoutes) => {
    aRoutes.map(about => {
        if (about.children ) { 
            addRoutesPort(about.children) }
        router.addRoute(about)
    })
}

export default createStore({
    // 设置 初始化值
    state: {
        total: 0,
        form: undefined,
        openKeys: [],
        selectedKeys: []
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
        SET_INFO_FORM (state, form) {
            state.form = form
            sessionStorage.setItem('INFO_FORM', form)
        },
        SetOpenKeys (state, openKeys) {
            state.openKeys = openKeys
            sessionStorage.setItem('OPEN_KEYS', openKeys)
        },
        SetSelectedKeys (state, selectedKeys) {
            state.selectedKeys = selectedKeys
            sessionStorage.setItem('SELECTED_KEYS', selectedKeys)
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
            console.log(toRaw(getters.selectedKeys))
            if (getters.selectedKeys.length == 0 ) {
                commit('SetSelectedKeys', JSON.stringify(['/WkButton']))
                router.replace('/WkButton')
            } else {
                router.replace(JSON.parse(getters.selectedKeys)[0])
            }
            if (!form.load ) message.success({ content: 'login success!', key, duration: 2 })
        },
        ExamineLoginOutlined({ getters, dispatch }, to) {
            console.log(getters.form)
            console.log(to)
            if (!getters.form) {
                if (to.path != '/') {
                    router.replace('/')
                }
                return
            }
            dispatch('LoginOutlined', {...getters.form, load: true, path: to.path})
        },
        async QuietLogin({ commit }) {
            const key = 'updatables'
            message.loading({ content: 'Loading...', key })
            // asyncRoutes.map(about => {
            //     router.removeRoute(about.name)
            // })
            commit('SET_INFO_FORM', '')
            commit('SetOpenKeys', '')
            commit('SetSelectedKeys', '')
            // router.replace('/')
            location.reload()
            setTimeout(() => {
                message.success({ content: 'quiet success!', key, duration: 2 })
            }, 500)
        },
    },
    // get
    getters: {
        total: state => state.total,
        form: state => sessionStorage.getItem('INFO_FORM') || state.form,
        openKeys: state => sessionStorage.getItem('OPEN_KEYS') || state.openKeys,
        selectedKeys: state => sessionStorage.getItem('SELECTED_KEYS') || state.selectedKeys
    }
})