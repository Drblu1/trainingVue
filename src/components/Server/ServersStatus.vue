<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
                <app-server :server="server" v-for="server in servers">
                </app-server>
        </ul>
    </div>
</template>

<script>
    import Server from "./Server.vue";

    export default {
        data: function () {
            return {
                servers: [
                    {
                        'serverId': "1",
                        'serverStatus': "Offline"
                    },
                    {
                        'serverId': "2",
                        'serverStatus': "Online"
                    }
                ]
            }
        },
        components: {
            'app-server': Server,
        }
    }
</script>

<style scoped>
</style>
