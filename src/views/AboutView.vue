<template>
	<div>
		<h2>About View</h2>
		<h2>Store</h2>
		<p>counter: {{ store.counter }}</p>
		<p>double: {{ store.doubleCount }}</p>
		<button @click="store.incremet">Click!</button>
	</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
</script>

<style lang="scss" scoped></style>
