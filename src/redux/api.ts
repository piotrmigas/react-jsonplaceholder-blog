import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Comment = { name: string; email: string; body: string; postId: number; id: number };

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], number>({
      query: (userId) => `/posts?userId=${userId}`,
    }),
    getPost: builder.query<Post, number>({
      query: (postId) => `/posts/${postId}`,
    }),
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: '/posts',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            api.util.updateQueryData('getPosts', data.userId, (draft) => {
              return [...draft, data];
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    deletePost: builder.mutation<Post, { postId: number; userId: number }>({
      query: ({ postId }) => ({
        url: `/posts/${postId}`,
        method: 'DELETE',
      }),
      async onQueryStarted({ postId, userId }, { dispatch }) {
        dispatch(
          api.util.updateQueryData('getPosts', userId, (draft) => {
            return draft.filter((post) => post.id !== postId);
          })
        );
      },
    }),
    getUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
    getUser: builder.query<User, number>({
      query: (userId) => `/users/${userId}`,
    }),
    getComments: builder.query<Comment[], number>({
      query: (postId) => `/posts/${postId}/comments`,
    }),
    addComment: builder.mutation<Comment, Partial<Comment>>({
      query: (body) => ({
        url: '/comments',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            api.util.updateQueryData('getComments', data.postId, (draft) => {
              return [...draft, data];
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useAddCommentMutation,
  useGetCommentsQuery,
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useDeletePostMutation,
} = api;
