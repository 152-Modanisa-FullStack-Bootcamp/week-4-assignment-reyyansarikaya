import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        videos: []
    },
    getters: {
        videos: state => {
            return state.videos;
        }
    },
    mutations: {
        SET_Videos(state, videos) {
            state.videos = videos
        }
    },
    actions: {
        loadVideos({commit}) {
            axios
                .get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos")
                .then(res => res.data)
                .then(videos => {
                    commit('SET_Videos', videos)
                });
        },
    },
});

