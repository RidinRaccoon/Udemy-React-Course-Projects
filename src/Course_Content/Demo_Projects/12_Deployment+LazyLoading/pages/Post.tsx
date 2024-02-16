import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { PostItem } from '../components/_index';
import { TPost } from '../types/types';

export function PostPage() {
  const post = RRD.useLoaderData() as TPost;
  console.log(post);
  return <PostItem post={post} />;
}

// Get Post
export function loader({ params }: RRD.LoaderFunctionArgs) {
  const { id } = params;
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
}
