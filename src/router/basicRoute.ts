import Opt1 from '../options/option1.vue'
import Opt2 from '../options/option2.vue'
import Popup from '../popup/index.vue'
import Page1 from '../pages/page1.vue'

export const basicRoutes = [
    {
        name: 'Popup',
        path: '/',
        component: Popup,
        meta: {
            title: '首页',
            layout: 'empty',
        },
    },
    {
        name: 'Opt1',
        path: '/opt1',
        component: Opt1,
    }, {
        name: 'Opt2',
        path: '/opt2',
        component: Opt2,
    },{
        name: 'page1',
        path: '/page1',
        component: Page1,
    },
]