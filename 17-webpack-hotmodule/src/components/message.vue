<template>
<article class="message">
    <div class="message-header">
        <p>Hello World</p>
        <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
        <slot></slot>
    </div>
</article>
</template>

<script>
    export default {
        name: 'message'
    }
</script>

<style>
    
</style>
