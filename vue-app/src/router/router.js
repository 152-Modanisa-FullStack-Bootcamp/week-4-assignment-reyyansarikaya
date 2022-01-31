import VueRouter from "vue-router";
import Vue from "vue";
import MainPage from "../views/MainPage";
import WatchPage from "../views/WatchPage";

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/", component:MainPage},
        {path:"/watch", name: "watch", component:WatchPage}
    ]
});

export default router;