<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from "./components/Shared/Header.vue";
    import ServersStatus from "./components/Server/ServersStatus.vue";
    import Footer from "./components/Shared/Footer.vue";
    import ServerDetails from "./components/Server/ServerDetails.vue";

    export default {
        components: {
            'app-header': Header,
            'app-servers': ServersStatus,
            'app-server-details': ServerDetails,
            'app-footer' : Footer,
        }
    }
</script>

<style>

</style>
