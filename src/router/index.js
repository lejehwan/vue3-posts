import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import postListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import Nested1View from '@/views/nested/Nested1View.vue';
import Nested2View from '@/views/nested/Nested2View.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
import MyPage from '@/views/MyPage.vue';

const routes = [
	{
		path: '/',
		component: HomeView,
	},
	{
		path: '/about',
		component: AboutView,
	},
	{
		path: '/posts/create',
		name: 'postCreate',
		component: PostCreateView,
	},
	{
		path: '/posts/:id',
		name: 'postDetail',
		component: PostDetailView,
		// props: route => {
		// 	return {
		// 		id: parseInt(route.params.id),
		// 	};
		// },
		props: true,
	},
	{
		path: '/posts/:id/edit',
		name: 'postEdit',
		component: PostEditView,
	},
	{
		path: '/posts',
		name: 'postList',
		component: postListView,
	},
	{
		path: '/nested',
		name: 'NestedView',
		component: NestedView,
		children: [
			{
				path: '',
				name: 'NestedHome',
				component: NestedHomeView,
			},
			{
				path: 'one',
				name: 'Nested1',
				component: Nested1View,
			},
			{
				path: 'two',
				name: 'Nested2',
				component: Nested2View,
			},
		],
	},
	{
		path: '/my',
		name: 'MyPage',
		component: MyPage,
		beforeEnter: [removeQueryString],
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
];

function removeQueryString(to) {
	if (Object.keys(to.query).length > 0) {
		return { path: to.path, query: {} };
	}
}

const router = createRouter({
	history: createWebHistory('/'),
	// history: createWebHashHistory(),
	routes,
});

// router.beforeEach((to, from) => {
// 	if (to.name == 'MyPage') return false;
// });

export default router;
