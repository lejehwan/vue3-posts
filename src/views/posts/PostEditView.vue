<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
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
				<button class="btn btn-primary">수정</button>
			</template>
		</PostForm>
		<AppAlert :items="alerts"> </AppAlert>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const form = ref({
	title: null,
	content: null,
});

const fectchPost = async () => {
	try {
		const { data } = await getPostById(id);
		setForm(data);
	} catch (error) {
		console.error(error);
		vAlert(error.message);
	}
};

const setForm = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
};

fectchPost();

const edit = async () => {
	try {
		await updatePost(id, { ...form.value, createdAt: Date.now() });
		// router.push({ name: 'postDetail', params: { id } });
		vAlert('수정이 완료되었습니다.', 'success');
	} catch (error) {
		console.error(error);
		vAlert(error.message);
	}
};

const goDetailPage = () => {
	router.push({ name: 'postDetail', params: { id } });
};
// alert
const alerts = ref([]);
const vAlert = (message, type = 'error') => {
	alerts.value.push({ message, type });
	setTimeout(() => {
		alerts.value.shift();
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
