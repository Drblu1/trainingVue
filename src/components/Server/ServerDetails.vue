<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="serverSelected">
            <div class="row">
                <p>Server #{{serverSelected.serverId}}</p>
                <p>server status: {{serverSelected.serverStatus}}</p>
                <button @click="changeServerStatus()">Change Server Status</button>
            </div>
        </template>
        <template v-else>
            <p>Please select a server</p>
        </template>
    </div>
</template>

<script>
    import {serversEvent} from "../../main.js";
    import {SERVER_SELECTED_CLICK_EVENT} from "../../main.js";

    export default {
        data() {
            return {
                serverSelected: undefined,
            }
        },
        methods: {
            changeServerStatus() {
                if(this.serverSelected.serverStatus === "Online"){
                    this.serverSelected.serverStatus = "Offline";
                }else {
                    this.serverSelected.serverStatus = "Online"
                }
                serversEvent.onclickChangeServerStatus(this.serverSelected.serverStatus);
            }
        },
        created() {
            serversEvent.$on(SERVER_SELECTED_CLICK_EVENT, (server) => {
                this.serverSelected = server;
            });
        }
    }
</script>

<style scoped>

</style>
