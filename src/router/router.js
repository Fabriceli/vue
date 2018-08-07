import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在indexRouter里
export const topnavRouter = [
    {
        path: '/error-page',
        icon: 'android-sad',
        title: '人物',
        name: 'errorpage',
        component: Main,
        children: [
            { path: 'index', title: '人物', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
        ]
    },
    {
        path: '/error-page',
        icon: 'android-sad',
        title: '机构',
        name: 'errorpage',
        component: Main,
        children: [
            { path: 'index', title: '机构', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
        ]
    },
    {
        path: '/error-page',
        icon: 'android-sad',
        title: '数据',
        name: 'errorpage',
        component: Main,
        children: [
            { path: 'index', title: '数据', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
        ]
    },
    {
        path: '/error-page',
        icon: 'android-sad',
        title: '工具',
        name: 'errorpage',
        component: Main,
        children: [
            { path: 'index', title: '工具', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
        ]
    }
];
// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/cryto',
        icon: 'social-buffer',
        name: 'cryto',
        title: '虚拟货币',
        component: Main,
        children: [
            {
                path: 'cryto-index',
                icon: 'arrow-graph-up-right',
                name: 'cryto-index',
                title: '综合数据',
                component: () => import('@/views/johnkee-components/cryto/index.vue')
            },
            {
                path: 'crpto-list',
                icon: 'compose',
                name: 'crpto-list',
                title: 'EOS系列列表页',
                component: () => import('@/views/johnkee-components/cryto/list.vue')
            },
            {
                path: 'crpto-detail',
                icon: 'pound',
                name: 'crpto-detail',
                title: 'ETH系列详细页',
                component: () => import('@/views/johnkee-components/cryto/detail.vue')
            },
            {
                path: 'crpto-update',
                icon: 'pound',
                name: 'crpto-update',
                title: 'BTC系列修改页',
                component: () => import('@/views/johnkee-components/cryto/update.vue')
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: 'DAPP数据',
                component: () => import('@/views/my-components/image-editor/image-editor.vue')
            }
        ]
    },
    {
        path: '/news',
        icon: 'social-buffer',
        name: 'news',
        title: '事件',
        component: Main,
        children: [
            {
                path: 'news-list',
                icon: 'compose',
                name: 'news-list',
                title: '未来事件列表页',
                component: () => import('@/views/johnkee-components/news/list.vue')
            },
            {
                path: 'news-detail',
                icon: 'compose',
                name: 'news-detail',
                title: '最近事件详细页',
                component: () => import('@/views/johnkee-components/news/detail.vue')
            },
            {
                path: 'news-update',
                icon: 'compose',
                name: 'news-update',
                title: '历史事件更改页',
                component: () => import('@/views/johnkee-components/news/update.vue')
            }
        ]
    },
    {
        path: '/component',
        icon: 'earth',
        name: 'component3',
        title: '国家经济',
        component: Main,
        children: [
            {
                path: 'text-editor',
                icon: 'arrow-graph-up-right',
                name: 'text-editor',
                title: '综合数据',
                component: () => import('@/views/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: '中国数据',
                component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '美国数据',
                component: () => import('@/views/my-components/image-editor/image-editor.vue')
            }
        ]
    },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component4',
        title: '期货市场',
        component: Main,
        children: [
            {
                path: 'text-editor',
                icon: 'arrow-graph-up-right',
                name: 'text-editor',
                title: '综合数据',
                component: () => import('@/views/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: '大豆期货',
                component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '黑色期货',
                component: () => import('@/views/my-components/image-editor/image-editor.vue')
            }
        ]
    },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component5',
        title: '股票市场',
        component: Main,
        children: [
            {
                path: 'text-editor',
                icon: 'compose',
                name: 'text-editor',
                title: '综合对比',
                component: () => import('@/views/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: '中国股票',
                component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '美国股票',
                component: () => import('@/views/my-components/image-editor/image-editor.vue')
            }
        ]
    },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: '特别项目',
        component: Main,
        children: [
            {
                path: 'text-editor',
                icon: 'compose',
                name: 'text-editor',
                title: 'F3DP3D',
                component: () => import('@/views/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: 'EOSRAM',
                component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: 'MFC',
                component: () => import('@/views/my-components/image-editor/image-editor.vue')
            }
        ]
    },
    {
        path: '/access',
        icon: '',
        name: 'access',
        title: '',
        component: Main,
        children: [
            { path: 'index', title: '', name: 'access_index', component: () => import('@/views/access/access.vue') }
        ]
    },
    {
        path: '/access',
        icon: '',
        name: 'access',
        title: '',
        component: Main,
        children: [
            { path: 'index', title: '', name: 'access_index', component: () => import('@/views/access/access.vue') }
        ]
    },
    {
        path: '/access',
        icon: '',
        name: 'access',
        title: '',
        component: Main,
        children: [
            { path: 'index', title: '', name: 'access_index', component: () => import('@/views/access/access.vue') }
        ]
    },
    {
        path: '/access',
        icon: '',
        name: 'access',
        title: '',
        component: Main,
        children: [
            { path: 'index', title: '', name: 'access_index', component: () => import('@/views/access/access.vue') }
        ]
    },
    {
        path: '/access',
        icon: '',
        name: 'access',
        title: '',
        component: Main,
        children: [
            { path: 'index', title: '', name: 'access_index', component: () => import('@/views/access/access.vue') }
        ]
    },
    {
        path: '/access',
        icon: '',
        name: 'access',
        title: '',
        component: Main,
        children: [
            { path: 'index', title: '', name: 'access_index', component: () => import('@/views/access/access.vue') }
        ]
    },
    {
        path: '/access',
        icon: 'key',
        name: 'access',
        title: '权限管理',
        component: Main,
        children: [
            { path: 'index', title: '权限管理', name: 'access_index', component: () => import('@/views/access/access.vue') }
        ]
    },
    {
        path: '/access-test',
        icon: 'lock-combination',
        title: '权限测试页',
        name: 'accesstest',
        access: 0,
        component: Main,
        children: [
            { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: () => import('@/views/access/access-test.vue') }
        ]
    },
    {
        path: '/international',
        icon: 'earth',
        title: {i18n: 'international'},
        name: 'international',
        component: Main,
        children: [
            { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: () => import('@/views/international/international.vue') }
        ]
    },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: '组件',
        component: Main,
        children: [
            {
                path: 'text-editor',
                icon: 'compose',
                name: 'text-editor',
                title: '富文本编辑器',
                component: () => import('@/views/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: 'Markdown编辑器',
                component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '图片预览编辑',
                component: () => import('@/views/my-components/image-editor/image-editor.vue')
            },
            {
                path: 'draggable-list',
                icon: 'arrow-move',
                name: 'draggable-list',
                title: '可拖拽列表',
                component: () => import('@/views/my-components/draggable-list/draggable-list.vue')
            },
            {
                path: 'area-linkage',
                icon: 'ios-more',
                name: 'area-linkage',
                title: '城市级联',
                component: () => import('@/views/my-components/area-linkage/area-linkage.vue')
            },
            {
                path: 'file-upload',
                icon: 'android-upload',
                name: 'file-upload',
                title: '文件上传',
                component: () => import('@/views/my-components/file-upload/file-upload.vue')
            },
            {
                path: 'scroll-bar',
                icon: 'android-upload',
                name: 'scroll-bar',
                title: '滚动条',
                component: () => import('@/views/my-components/scroll-bar/scroll-bar-page.vue')
            },
            {
                path: 'count-to',
                icon: 'arrow-graph-up-right',
                name: 'count-to',
                title: '数字渐变',
                // component: () => import('@/views/my-components/count-to/count-to.vue')
                component: () => import('@/views/my-components/count-to/count-to.vue')
            },
            {
                path: 'split-pane-page',
                icon: 'ios-pause',
                name: 'split-pane-page',
                title: 'split-pane',
                component: () => import('@/views/my-components/split-pane/split-pane-page.vue')
            }
        ]
    },
    {
        path: '/form',
        icon: 'android-checkbox',
        name: 'form',
        title: '表单编辑',
        component: Main,
        children: [
            { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: () => import('@/views/form/article-publish/article-publish.vue') },
            { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: () => import('@/views/form/work-flow/work-flow.vue') }

        ]
    },
    // {
    //     path: '/charts',
    //     icon: 'ios-analytics',
    //     name: 'charts',
    //     title: '图表',
    //     component: Main,
    //     children: [
    //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
    //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

    //     ]
    // },
    {
        path: '/tables',
        icon: 'ios-grid-view',
        name: 'tables',
        title: '表格',
        component: Main,
        children: [
            { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: () => import('@/views/tables/dragable-table.vue') },
            { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: () => import('@/views/tables/editable-table.vue') },
            { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: () => import('@/views/tables/searchable-table.vue') },
            { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: () => import('@/views/tables/exportable-table.vue') },
            { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: () => import('@/views/tables/table-to-image.vue') }
        ]
    },
    {
        path: '/advanced-router',
        icon: 'ios-infinite',
        name: 'advanced-router',
        title: '高级路由',
        component: Main,
        children: [
            { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
        ]
    },
    {
        path: '/error-page',
        icon: 'android-sad',
        title: '错误页面',
        name: 'errorpage',
        component: Main,
        children: [
            { path: 'index', title: '错误页面', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    ...topnavRouter,
    page500,
    page403,
    page404
];
