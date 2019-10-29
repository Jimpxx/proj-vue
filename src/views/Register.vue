<template>
    <div class="container">
        <form class id="register-form" @submit="doRegister" method="post" action>
            <h1>Register</h1>
            <p>
                <label class="input-label" for="name">Name</label>
                <input
                    class="input-field"
                    type="text"
                    name="name"
                    id="name"
                    v-model="name"
                    required
                />
            </p>
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
                <label class="input-label" for="password">Password (Atleast 8 characters)</label>
                <input
                    class="input-field"
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                    required
                    minlength="8"
                />
            </p>
            <DatePicker birthday />
            <p>
                <input type="submit" value="Submit" class="button" id="formSubBtn" />
            </p>
        </form>
    </div>
</template>

<script>
import DatePicker from "../components/DatePicker";
export default {
    name: "Register",
    components: {
        DatePicker
    },
    data() {
        return {
            name: null,
            email: null,
            password: null,
            birthday: null
        };
    },
    methods: {
        doRegister: function(e) {
            e.preventDefault();
            const dataObject = {
                name: this.name,
                email: this.email,
                password: this.password,
                birthday: this.birthday
            };

            return fetch("http://localhost:3333/user/register", {
                // return fetch("https://me-api.jimmyandersson.me/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataObject)
            })
                .then(res => {
                    this.$router.push("/login");
                    return res;
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
