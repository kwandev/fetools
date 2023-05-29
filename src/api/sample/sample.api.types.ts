export const SampleDocs = {
  postList: () => '/posts',
  postDetail: (uid: string) => `/posts/${uid}`,
  commentList: () => '/comments',
} as const;

export type APIPostListParams = {
  id?: number;
  userId?: number;
};

export type APIPostListItem = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
