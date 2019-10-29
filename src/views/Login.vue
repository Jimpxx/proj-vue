<template>
    <div class="container">
        <form class id="login-form" @submit="doLogin" method="post" action="http://localhost:1337">
            <h1>Login</h1>
            <p>
                <label class="input-label" for="email">Email</label>
                <input
                    class="input-field"
                    type="email"
                    name="email"
                    id="email"
                    v-model="email"
                    required
                />
            </p>
            <p>
                <label class="input-label" for="password">Password</label>
                <input
                    class="input-field"
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                    required
                />
            </p>
            <p>
                <input type="submit" value="Login" class="button" id="loginBtn" />
            </p>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    components: {},
    data() {
        return {
            email: null,
            password: null
        };
    },
    methods: {
        doLogin: function(e) {
            e.preventDefault();

            const dataObject = {
                email: this.email,
                password: this.password
            };

            fetch("https://project-api.jimmyandersson.me/user/login", {
                // fetch("http://localhost:3333/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataObject)
            })
                .then(res => {
                    return res.text();
                })
                .then(text => {
                    return JSON.parse(text);
                })
                .then(user => {
                    this.changeToken(user);
                })
                .catch(err => {
                    return err.message;
                });
        },

        changeToken(user) {
            this.$store
                .dispatch("addTokenToState", user.token)
                .then(response => {
                    this.$store.dispatch("changeUser", user.user);
                    this.$router.push("/account");
                    return response;
                })
                .catch(err => {
                    return err.message;
                });
        }
    }
};
</script>

<style scoped>
.input-label {
    display: block;
    font-size: 1.5rem;
}

form p,
form h1 {
    margin-bottom: 2rem;
}

.input-field {
    width: 90%;
    padding: 0.5rem 0.75rem;
    font-size: 1.25rem;
}

.input-field:focus {
    outline: 1px solid #2828d3;
}

.button {
    width: 7rem;
    padding: 0.5rem 1rem;
}

@media (min-width: 768px) {
    .input-field {
        width: 50vw;
    }
}
</style>
