<script lang="ts" setup>
defineProps(['question', 'response'])
</script>
<template>
    <div class="question">
        <div class="question-header">
           <h3>{{ question }}</h3>
           <span class="question-btn">
            <IconsPlus class="plus"/><IconsMinus class="minus"/> 
           </span>
        </div>
        <div class="response">
            <p>{{ response }}</p>
        </div>
    </div>
</template>