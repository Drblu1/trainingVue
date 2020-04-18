<template>
    <li class="list-group-item"
        @click="displaySelectedServer(server)"
        style="cursor: pointer"
    >
        Server #{{ server.serverId}}
    </li>
</template>

<script>
    import {serversEvent} from "../../main";

    export default {
        props: {
            server: {
                type: Object,
                required: true,
            },
        },
        methods: {
            displaySelectedServer(server) {
                serversEvent.onServerClick(server);
            }
        },
    }
</script>

<style scoped>

</style>
