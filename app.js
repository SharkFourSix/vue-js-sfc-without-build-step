
const App = {
    el: '#app',

    mounted() {
        console.log('application mounted. ')
    },

    created() {
        console.log('application created')
    },

    components: {
        'v-header': httpVueLoader('./components/Header.vue'),
        'v-footer': httpVueLoader('./components/Footer.vue'),
        'v-content': httpVueLoader('./components/Content.vue')
    }
};

window.addEventListener('load', () => {
    var app = new Vue(App);
});