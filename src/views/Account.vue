<template>
    <div class="container">
        <h1>Account for {{ username }}</h1>
        <p>This account has {{ money }} SEK available</p>
        <form class="deposit-form" @submit="makeDeposit">
            <input type="number" name="money" id="money" v-model="insertedMoney" />
            <button type="submit">Insert money</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Account",
    data() {
        return {
            username: this.$store.getters.getLoggedInUser.name,
            money: this.$store.getters.getLoggedInUser.money,
            token: this.$store.getters.getToken,
            insertedMoney: 0
        };
    },

    methods: {
        makeDeposit: function(e) {
            console.log("Making deposit..");
            e.preventDefault();
            axios
                .post(
                    "https://project-api.jimmyandersson.me/user/deposit",
                    // "http://localhost:3333/user/deposit",
                    {
                        email: this.$store.getters.getLoggedInUser.email,
                        amount: this.insertedMoney
                    },
                    {
                        headers: {
                            "x-access-token": this.token
                        }
                    }
                )
                .then(user => {
                    this.$store.dispatch("changeUser", user.data);
                    this.insertedMoney = 0;
                    this.money = this.$store.getters.getLoggedInUser.money;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>

<style>
</style>
