import Vue from 'vue'
import App from './App.vue'

export const SERVER_SELECTED_CLICK_EVENT= "serverClicked";
export const SERVER_STATUS_CHANGED_EVENT= "serverStatusChanged";

export const serversEvent = new Vue({
    methods: {
        onServerClick(server) {
            this.$emit(SERVER_SELECTED_CLICK_EVENT, server)
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})
