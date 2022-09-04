<template>
    <div>
        <div class="ctl">
            STEP: <input type="range" v-model="step" min="1" max="100" />{{step}}
        </div>

        <div class="ctl">
            <button @click="counter = 0">Reset</button>
            <button @click="incrementCounter">Increment++</button>
            <button @click="decrementCounter">Decrement--</button>
        </div>

        <div class="ctl">
            VALUE: <b>{{count}}</b>
        </div>
        <div class="ctl">
            PARITY: <b>{{parity}}</b>
        </div>
        <div class="ctl">
            BIN: <b>{{bin}}</b>
        </div>
        <div class="ctl">
            OCT: <b>{{oct}}</b>
        </div>
        <div class="ctl">
            HEX: <b>{{hex}}</b>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function(){
            return {
                counter: 0,
                step: 5
            }
        },
        methods: {
            shift(sign){
                this.counter += sign * parseInt(this.step);
            },
            incrementCounter(){
                this.shift(1);
            },
            decrementCounter(){
                this.shift(-1);
            }
        },
        computed: {
            count: function () {
                return this.counter;
            },
            parity: function(){
                return this.counter % 2 == 0 ? "EVEN" : "ODD";
            },
            hex: function(){
                return this.counter.toString(16)
            },
            bin: function(){
                return this.counter.toString(2)
            },
            oct: function(){
                return this.counter.toString(8)
            }
        }
    };
</script>
<style scoped>
    .ctl {
        padding: 4px;
    }
</style>