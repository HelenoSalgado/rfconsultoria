<script lang="ts" setup>
defineProps(['question', 'response'])
</script>
<template>
    <div class="question">
        <div class="question-header">
           <h3>{{ question }}</h3><IconsPlus class="question-plus"/> <IconsMinus class="question-minus"/> 
        </div>
        <div class="response">
            <p>{{ response }}</p>
        </div>
    </div>
</template>