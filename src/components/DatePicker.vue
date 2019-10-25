<template>
    <div class="datepicker">
        <p>
            <label class="input-label" for="bday">Birthday</label>
            <select name="year" id="year" v-model="year" @change="changeBday" required>
                <option value="year" selected disabled hidden>Year</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
            </select>
            <select name="month" id="month" v-model="month" @change="changeBday" required>
                >
                <option value="month" selected disabled hidden>Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
            <select name="day" id="day" v-model="day" @change="changeBday" required>
                >
                <option value="day" selected disabled hidden>Day</option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
        </p>
    </div>
</template>

<script>
export default {
    name: "DatePicker",
    data() {
        return {
            year: "Year",
            month: "Month",
            day: "Day"
        };
    },
    methods: {
        changeBday() {
            this.$parent.birthday = `${this.year}/${this.month}/${this.day}`;
        },
    }
};
</script>

<style scoped>
select {
    width: 10rem;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    margin-right: 0.5rem;
    border-radius: 0.3rem;
}

.input-label {
    display: block;
    font-size: 1.5rem;
}

form p {
    margin-bottom: 2rem;
}
</style>
