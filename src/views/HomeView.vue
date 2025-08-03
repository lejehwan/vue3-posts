<template>
	<div>
		<h2>Home View</h2>
		<AppGrid :items="items" v-slot="{ item }" col-class="col-6">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
		<hr class="my-4" />
		<h2>{{ $person.name }}</h2>
		<button class="btn btn-primary" @click="person.say">click person</button>
	</div>
</template>

<script>
export default {
	created() {},
};
</script>

<script setup>
import { inject, ref } from 'vue';

const items = ref(['사과', '바나나', '포도', '배']);

const person = inject('person');
// console.log(person.name);
</script>

<style lang="scss" scoped></style>
