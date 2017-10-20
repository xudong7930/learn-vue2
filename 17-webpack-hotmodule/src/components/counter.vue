<template>
    <div>
        <p>
            the count is now: {{ count }}
        </p>
        <button @click="count += 1">click me</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                count: 0
            }
        }
    }
</script>
