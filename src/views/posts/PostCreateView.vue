<template>
	<div>
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<AppError v-if="error" :message="error.message"></AppError>
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="save"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-dark me-2"
					@click="goListPage"
				>
					목록
				</button>

				<button class="btn btn-primary" :disabled="loading">
					<template v-if="loading">
						<span
							class="spinner-grow spinner-grow-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status">Loading...</span>
					</template>
					<template v-else> 저장 </template>
				</button>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/hooks/useAxios';

const router = useRouter();
const { vAlert, vSuccess } = useAlert();

const form = ref({
	title: null,
	content: null,
});

const { error, loading, execute } = useAxios(
	'/posts',
	{
		method: 'post',
	},
	{
		immediate: false,
		onSuccess: () => {
			router.push({ name: 'postList' });
			vAlert('등록이 완료되었습니다', vSuccess);
		},
		onError: err => {
			vAlert(err.messaege);
		},
	},
);

const save = async () => {
	execute({ ...form.value, createdAt: Date.now() });
};

// const save = async () => {
// 	try {
// 		loading.value = true;
// 		await createPost({
// 			...form.value,
// 			createdAt: Date.now(),
// 		});
// 		router.push({ name: 'postList' });
// 		vAlert('등록이 완료되었습니다', vSuccess);
// 	} catch (err) {
// 		vAlert(err.messaege);
// 		error.value = err;
// 	} finally {
// 		loading.value = false;
// 	}
// };
const goListPage = () => {
	router.push({ name: 'postList' });
};
</script>

<style lang="scss" scoped></style>
