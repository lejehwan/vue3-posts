<template>
	<div>
		<h2>Home View</h2>
		<AppGrid :items="items" v-slot="{ item }" col-class="col-6">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
	</div>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';
import { ref } from 'vue';

const items = ref(['사과', '바나나', '포도', '배']);
</script>

<style lang="scss" scoped></style>
