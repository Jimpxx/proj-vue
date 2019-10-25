<template>
    <div class="container">
        <pre>
            {{chartData}}
        </pre>
    </div>
</template>

<script>
import io from "socket.io-client";
export default {
    data() {
        return {
            // user: "",
            // message: "",
            // time: null,
            chartData: [],
            // socket: io("https://socket-server.jimmyandersson.me")
            socket: io("http://localhost:3333")
        };
    },

    mounted() {
        this.socket.on("stocks", companies => {
            this.chartData = companies;
            // you can also do this.messages.push(data)
        });
    }
};
</script>

<style>
</style>
