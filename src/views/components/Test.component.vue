<template>
    <div>
        Component Test: {{ isApple1 }}
        <button  @click="$emit('SuccessEvent', 'ok success')">Emit</button>
    </div>
</template>

<script setup lang="ts">
    // const props = defineProps(['isApple1'])
    defineProps({
        isApple1: String
    })
</script>