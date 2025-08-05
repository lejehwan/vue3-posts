<template>
	<div>
		<h2>Home View</h2>
		<AppGrid :items="items" v-slot="{ item }" col-class="col-6">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
		<hr class="my-4" />
		<!-- <h2>{{ $person.name }}</h2>
		<button class="btn btn-primary" @click="person.say">click person</button> -->

		<h2>{{ position }}</h2>
		<h2>{{ x }}, {{ y }}</h2>
	</div>
</template>

<script>
export default {
	created() {},
};
</script>

<script setup>
import { reactive, ref, toRefs } from 'vue';

const items = ref(['사과', '바나나', '포도', '배']);

// const person = inject('person');
// console.log(person.name);

const position = reactive({
	x: 100,
	y: 1000,
});
// const x = toRef(position, 'x');
// const y = toRef(position, 'y');
const { x, y } = toRefs(position);
</script>

<style lang="scss" scoped></style>
