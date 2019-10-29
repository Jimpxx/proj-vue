<template>
    <div class="container">
        <!-- <pre>
            {{chartData}}
        </pre>-->
        <!-- <div class="chart-window"> -->
        <!-- <line-chart v-if="loaded" :height="400" :chartData="chartData" /> -->
        <!-- <line-chart v-if="loaded" :chartData="chartData" /> -->
        <!-- <line-chart v-if="loaded" :width="300" :height="300" :chartData="chartData" /> -->
        <line-chart v-if="loaded" :width="null" :height="null" :chartData="chartData" />
        <!-- <line-chart v-if="loaded" :styles="myStyles" :chartData="chartData" /> -->
        <!-- </div> -->
        <div class="all-companies">
            <h2>Available stocks</h2>
            <div class="stocks">
                <div class="company-card" v-for="company in allCompanies" :key="company._id">
                    <h3>{{ company.label }}</h3>
                    <p>Price: {{company.data[company.data.length - 1]}}</p>
                    <button @click="buyStock(company)" type="button" name="buy">Buy</button>
                    <button @click="sellStock(company)" type="button" name="sell">Sell</button>
                </div>
            </div>
            <div class="holdings">
                <h2>My holdings</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Amount</th>
                            <th>Buyin</th>
                            <th>Value</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="holding in myHoldings" :key="holding._id">
                            <td>{{ holding.name }}</td>
                            <td>{{ holding.amount }}</td>
                            <td>{{ holding.buyin }}</td>
                            <td>{{ getValue(holding.name, holding.amount) }}</td>
                            <td>{{ getCurrentPrice(holding.name) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2>Current balance in my account: {{ money }}</h2>
            <p>{{errorMsg}}</p>
        </div>
    </div>
</template>

<script>
import io from "socket.io-client";
import LineChart from "../components/LineChart.vue";
import axios from "axios";
export default {
    name: "Stocks",
    components: { LineChart },
    data() {
        return {
            email: this.$store.getters.getLoggedInUser.email,
            loaded: false,
            chartData: null,
            money: this.$store.getters.getLoggedInUser.money,
            allCompanies: [],
            myHoldings: this.$store.getters.getLoggedInUser.holdings,
            token: this.$store.getters.getToken,
            errorMsg: "",
            socket: io("https://project-api.jimmyandersson.me")
            // socket: io("http://localhost:3333")
        };
    },

    methods: {
        getValue(company, amount) {
            let stock = this.allCompanies.filter(stock => {
                return stock.label == company;
            });
            // console.log(stock[0]);
            return (
                Math.round(
                    amount * stock[0].data[stock[0].data.length - 1] * 100
                ) / 100
            );
        },

        getCurrentPrice(company) {
            let stock = this.allCompanies.filter(stock => {
                return stock.label == company;
            });
            return stock[0].data[stock[0].data.length - 1];
        },

        buyStock(company) {
            // console.log(`Buying stock: ${company.label}`);
            // console.log(this.$store.getters.getLoggedInUser.email);
            axios
                .post(
                    "https://project-api.jimmyandersson.me/user/order",
                    // "http://localhost:3333/user/order",
                    {
                        email: this.$store.getters.getLoggedInUser.email,
                        type: "buy",
                        company: company.label,
                        price: company.data[company.data.length - 1],
                        amount: 1
                    },
                    {
                        headers: {
                            "x-access-token": this.token
                        }
                    }
                )
                .then(user => {
                    this.$store.dispatch("changeUser", user.data);
                    this.myHoldings = this.$store.getters.getLoggedInUser.holdings;
                    this.money = this.$store.getters.getLoggedInUser.money;
                })
                .catch(err => {
                    // console.error(err);
                    this.errorMsg = err.message;
                });
        },

        sellStock(company) {
            // console.log(`Selling stock: ${company.label}`);
            // console.log(this.$store.getters.getLoggedInUser.email);
            axios
                .post(
                    "https://project-api.jimmyandersson.me/user/order",
                    // "http://localhost:3333/user/order",
                    {
                        email: this.$store.getters.getLoggedInUser.email,
                        type: "sell",
                        company: company.label,
                        price: company.data[company.data.length - 1],
                        amount: 1
                    },
                    {
                        headers: {
                            "x-access-token": this.token
                        }
                    }
                )
                .then(user => {
                    this.$store.dispatch("changeUser", user.data);
                    this.myHoldings = this.$store.getters.getLoggedInUser.holdings;
                    this.money = this.$store.getters.getLoggedInUser.money;
                })
                .catch(err => {
                    // console.error(err);
                    this.errorMsg = err.message;
                });
        }
    },

    mounted() {
        this.socket.on("stocks", companies => {
            this.allCompanies = companies;
            this.chartData = {
                datasets: companies,
                labels: [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ]
            };
            this.loaded = true;
        });
    },

    computed: {
        myStyles() {
            return {
                height: "40vh",
                position: "relative"
            };
        }
    }
};
</script>
<style>
.company-card {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    padding: 1rem;
}

/* Table style */

th,
td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

table {
    margin: 0 auto;
}

@media only screen and (max-width: 535px) {
    th,
    td {
        padding: 0.2rem;
        text-align: left;
    }
}
</style>
