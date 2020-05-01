import Vue from 'vue/dist/vue.esm.browser';
import VueRouter from 'vue-router/dist/vue-router.esm.browser'

Vue.use(VueRouter);

const main = {
    template:`<div class='main'>
    <div class='main-header'>
        <router-link to='/menu' tag='div' class='main-header-side'><i class="icon-font i-list2"></i></router-link>
        <div class='main-header-tap'>
            <router-link to='/main/songlist' tag='div'>歌单</router-link>
            <router-link to='/main/my' tag='div'>我的</router-link>
            <router-link to='/main/discover' tag='div'>发现</router-link>
            <router-link to='/main/search' tag='div'>搜索</router-link>
        </div>
        <router-link to='/person' tag='div' class='main-header-side'><i class="icon-font i-center"></i></router-link>
    </div>
    <transition name='router' mode="out-in">
        <router-view tag='div' class='main-content'></router-view>
    </transition>
    <div class='main-footer'>
        <div>旋转专辑封面</div>
        <div>滚动歌词</div>
        <div>暂停/播放</div>
    </div>
    </div>`
}
const songlist = {
    props:['message','kawayi','nameAfterCom'],
    template:`<div>songlist</div>`
}
const my = {
    template:`<div>my</div>`
}
const discover = {
    template:`<div>discover</div>`
}
const search = {
    template:`<div>search</div>`
}
var router = new VueRouter({
    routes:[
        {
            path:'/main',
            component:main,
            name:'main',
            children:[
                {
                    path: 'songlist',
                    name: 'songlist',
                    component: songlist
                },
                {
                    path: 'my',
                    name: 'my',
                    component: my
                },
                {
                    path: 'discover',
                    name: 'discover',
                    component: discover
                },
                {
                    path: 'search',
                    name: 'search',
                    component: search
                }
            ]
        },
        {
            path:'/person',
            component:{
                template:`<div>Person</div>`
            },
            name:'person'
        },
        {
            path:'/menu',
            component:{
                template:`<div>Menu</div>`
            },
            name:'menu'
        },
        {path:'/',redirect:'/main/songlist'},
        {path:'*',redirect:'/main/songlist'}//全不匹配的情况下，返回404，路由按顺序从上到下，依次匹配。最后一个*能匹配全部，
    ]
})
export {router}