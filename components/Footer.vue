<template>
    <div class="footer">
        <h6>{{title}}</h6>
    </div>
</template>

<script>
    module.exports = {
        props: ['title']
    }
</script>

<style scoped>
.footer {
    padding: 4px;
}
</style>