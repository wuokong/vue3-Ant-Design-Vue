import ParentView from '@/components/ParentView';
export const asyncRoutes = [{
    path: "/Home",
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/view/Home.vue'),
    meta: {
        hidden: false
    },
    children: [
        {
            path: "/ty",
            name: '通用',
            component: ParentView,
            meta: {
                hidden: false
            },
            children: [
                {
                    path: "/WkButton",
                    name: 'Button按钮',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/general/WkButton.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'ty', 'WkButton']
                    }
                },
                {
                    path: "/WkIcon",
                    name: 'Icon图标',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/general/WkIcon.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'zj', 'WkIcon']
                    }
                },
                {
                    path: "/WkTypography",
                    name: 'Typography排版',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/general/WkTypography.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'zj', 'WkTypography']
                    }
                }
            ]
        },
        {
            path: "/Layout",
            name: '布局',
            component: ParentView,
            meta: {
                hidden: false
            },
            children: [
                {
                    path: "/WkDivider",
                    name: 'Divider分割线',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/layout/WkDivider.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'layout', 'WkDivider']
                    }
                },
                {
                    path: "/WkGrid",
                    name: 'Grid栅格布局',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/layout/WkGrid.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'layout', 'WkGrid']
                    }
                },
                {
                    path: "/WkLayout",
                    name: 'Layout布局',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/layout/WkLayout.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'layout', 'WkLayout']
                    }
                },
                {
                    path: "/WkSpace",
                    name: 'Space间距',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/layout/WkSpace.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'layout', 'WkSpace']
                    }
                }
            ]
        },
        {
            path: "/Navigation",
            name: '导航',
            component: ParentView,
            meta: {
                hidden: false
            },
            children: [
                {
                    path: "/WkAffix",
                    name: 'Affix固钉',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/navigation/WkAffix.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'navigation', 'WkAffix']
                    }
                },
                {
                    path: "/WkBreadcrunmb",
                    name: 'Breadcrunmb面包屑',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/navigation/WkBreadcrunmb.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'navigation', 'WkBreadcrunmb']
                    }
                },
                {
                    path: "/WkDropdown",
                    name: 'Dropdown下拉菜单',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/navigation/WkDropdown.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'navigation', 'WkDropdown']
                    }
                },
                {
                    path: "/WkMenu",
                    name: 'Menu导航菜单',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/navigation/WkMenu.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'navigation', 'WkMenu']
                    }
                },
                {
                    path: "/WkPageHeader",
                    name: 'PageHeader页头',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/navigation/WkPageHeader.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'navigation', 'WkPageHeader']
                    }
                },
                {
                    path: "/WkPagination",
                    name: 'Pagination分页',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/navigation/WkPagination.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'navigation', 'WkPagination']
                    }
                },
                {
                    path: "/WkSteps",
                    name: 'Steps步骤条',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/navigation/WkSteps.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'navigation', 'WkSteps']
                    }
                }
            ]
        },
        {
            path: "/entering",
            name: '数据录入',
            component: ParentView,
            meta: {
                hidden: false
            },
            children: [
                {
                    path: "/WkAutoComplete",
                    name: 'AutoComplete自动完成',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkAutoComplete.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkAutoComplete']
                    }
                },
                {
                    path: "/WkCascader",
                    name: 'Cascader联级选择',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkCascader.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkCascader']
                    }
                },
                {
                    path: "/WkCheckbox",
                    name: 'Checkbox多选框',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkCheckbox.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkCheckbox']
                    }
                },
                {
                    path: "/WkDatePicker",
                    name: 'DatePicker日期选择',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkDatePicker.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkDatePicker']
                    }
                },
                {
                    path: "/WkForm",
                    name: 'Form表单',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkForm.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkForm']
                    }
                },
                {
                    path: "/WkInput",
                    name: 'Input输入框',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkInput.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkInput']
                    }
                },
                {
                    path: "/WkInputNumber",
                    name: 'InputNumber数字输入框',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkInputNumber.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkInputNumber']
                    }
                },
                {
                    path: "/WkMentions",
                    name: 'Mentions提及@',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkMentions.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkMentions']
                    }
                },
                {
                    path: "/WkRadio",
                    name: 'WkRadio单选',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkRadio.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkRadio']
                    }
                },
                {
                    path: "/WkRate",
                    name: 'Rate评分',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkRate.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkRate']
                    }
                },
                {
                    path: "/WkSelect",
                    name: 'Select选择器',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkSelect.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkSelect']
                    }
                },
                {
                    path: "/WkSlider",
                    name: 'Slider滑动输入条',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkSlider.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkSlider']
                    }
                },
                {
                    path: "/WkSwitch",
                    name: 'Switch开关',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkSwitch.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkSwitch']
                    }
                },
                {
                    path: "/WkTimePicker",
                    name: 'TimePicker时间选择',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkTimePicker.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkTimePicker']
                    }
                },
                {
                    path: "/WkTransfer",
                    name: 'Transfer穿梭框',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkTransfer.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkTransfer']
                    }
                },
                {
                    path: "/WkTreeSelect",
                    name: 'TreeSelect树选择',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkTreeSelect.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkTreeSelect']
                    }
                },
                {
                    path: "/WkUpload",
                    name: 'Upload上传',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/entering/WkUpload.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'entering', 'WkUpload']
                    }
                }
            ]
        },
        {
            path: "/scale",
            name: 'scale',
            component: ParentView,
            meta: {
                hidden: false
            },
            children: [
                {
                    path: "/WkAxios",
                    name: 'Axios',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/scale/WkAxios.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'scale', 'WkAxios']
                    }
                },
                {
                    path: "/WkStore",
                    name: 'VUEX状态管理',
                    component: () => import(/* webpackChunkName: "about" */ '@/components/scale/WkStore.vue'),
                    meta: {
                        hidden: false,
                        openKey: ['Home', 'scale', 'WkStore']
                    }
                }
            ]
        },
        {
            path: "/WkConfig",
            name: 'WkConfig',
            component: () => import(/* webpackChunkName: "about" */ '@/components/WkConfig.vue'),
            meta: {
                hidden: false,
                openKey: ['Home']
            }
        }
    ]
}]