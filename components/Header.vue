<template>
    <div class="header">
        <h6>{{label}}</h6>
    </div>
</template>

<script>
    module.exports = {
        props: ['label']
    }
</script>

<style scoped>
.header {
    padding: 4px;
}
</style>