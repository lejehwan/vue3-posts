<template>
	<div>
		<ul class="nav">
			<li class="nav-item">
				<RouterLink
					class="nav-link"
					active-class="active"
					:to="{ name: 'Nested1', replace: true }"
				>
					Nested 1
				</RouterLink>
			</li>
			<li class="nav-item">
				<RouterLink class="nav-link" active-class="active" to="/nested/two">
					Nested 2
				</RouterLink>
			</li>
		</ul>
		<hr class="my-4" />
		<RouterView> </RouterView>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
