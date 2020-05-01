import Vue from 'vue/dist/vue.esm.browser';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import {router} from './router.js'
export { };
Vue.component('v-button',{
    data: function(){
        return {
            count : 0
        }
    },
    template:"<button @click='count++'>click {{count}} times</button>"
})
new Vue({
    el: '.root',
    data: {
        message: 'YesYesYes',
        kawayi:'今天天气真不错',
        name:'',
        gender:'',
        nameArr: [
            {id:0,name:'王大',gender:'男'},
            {id:1,name:'李二',gender:'男'},
            {id:2,name:'赵四',gender:'男'},
            {id:3,name:'张三',gender:'女'},
            {id:4,name:'王大',gender:'男'},
        ],
        title:'今日推荐',
        commentList:[
            {name:'张三',content:'不错不错'},
            {name:'李二',content:'海星还行'},
            {name:'赵四',content:'开心开心'}
        ]
    },
    computed:{
        nameAfterCom() {
            return this.message + ',' + this.kawayi;
        }
    },
    methods: {
        popMessage() {
            alert(this.kawayi);
        },
        deleteName(id){
            const index = this.nameArr.findIndex((item , index, arr)=>item.id === id);
            this.nameArr.splice(index,1);
        },
        addName(){
            const index = this.nameArr.length-1,
            id = index>=0 ? this.nameArr[index].id + 1 : index + 1;
            this.nameArr.push({id:id,name:this.name,gender:this.gender});
            this.name = this.gender = '';
        },
        submitComment(comment){
            this.commentList.push(comment);
        }
    },
    filters:{
        kawayiFilter(data){
            return [...data].join('~');
        }
    },
    directives:{
        color:{
            bind(el){
                console.log('v-color bind');
            },
            inserted(el,bingding){
                console.log('v-color inserted');
                el.style.backgroundColor = "red";
            }
        }
    },
    components:{
        'vlist':{
            props:['title'],
            data(){
                return{
                    list : [
                        {id:1,name:'百年孤独',price:20,ctime:new Date()},
                        {id:2,name:'活着',price:20,ctime:new Date()},
                        {id:3,name:'文化苦旅',price:20,ctime:new Date()},
                        {id:4,name:'围城',price:20,ctime:new Date()},
                        {id:5,name:'论语',price:20,ctime:new Date()},
                        {id:6,name:'唐诗三百首',price:20,ctime:new Date()}
                    ]
                }
            },
            methods:{
                remove(i){
                    this.list.splice(i,1);
                }
            },
            template:`<ol>
                        <li @click='$emit(\"listhover\")' v-for='(item,i) in list'>
                            {{title}} : {{item.name}}-----{{item.price}}元-----{{item.ctime}}
                            <a @click.prevent.stop='remove(i)'>删除</a>
                        </li>
                    </ol>`
        },
        'comment-list':{
            props:['item'],
            template:`<div class='comment'>
                        <p>评论人：</p>
                        <p>{{item.name}}</p>
                        <p>评论：</p>
                        <p>{{item.content}}</p>
                    </div>
                        `
        },
        'comment-add':{
            data(){
                return{
                    name:'',
                    content:''
                }
            },
            template:`<div>
            <span>评论人：</span>
            <input type='text' v-model='name'>
            <span>评论内容：</span>
            <input type='area' v-model='content'>
            <input type='button' value='提交评论' @click="$emit('submitcomment',{name,content})"></div>
            `
        }
    },
    created() {
        console.log('vm created');
    },
    router
})