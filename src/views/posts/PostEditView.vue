<template>
	<AppLoading v-if="loading"></AppLoading>

	<AppError v-else-if="error" :message="error.message"></AppError>
	<div v-else>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<AppError v-if="editError" :message="editError.message"></AppError>
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="edit"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-danger"
					@click="goDetailPage"
				>
					취소
				</button>

				<button class="btn btn-primary" :disabled="editLoading">
					<template v-if="editLoading">
						<span
							class="spinner-grow spinner-grow-sm"
							aria-hidden="true"
						></span>
						<span class="visually-hidden" role="status">Loading...</span>
					</template>
					<template v-else> 수정 </template>
				</button>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/hooks/useAxios';

const router = useRouter();
const route = useRoute();
const id = route.params.id;
const { vAlert, vSuccess } = useAlert();
const { error, loading, data: form } = useAxios(`/posts/${id}`);

const {
	error: editError,
	loading: editLoading,
	execute,
} = useAxios(
	`/posts/${id}`,
	{ method: 'patch' },
	{
		immediate: false,
		onSuccess: () => {
			router.push({ name: 'postDetail', params: { id } });
			vAlert('수정이 완료되었습니다.', vSuccess);
		},
		onerror: err => {
			vAlert(err.message);
		},
	},
);

const edit = () => {
	execute({
		...form.value,
	});
};

const goDetailPage = () => {
	router.push({ name: 'postDetail', params: { id } });
};
</script>

<style lang="scss" scoped></style>
