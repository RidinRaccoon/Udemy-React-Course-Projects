import * as React from 'react';
import * as RRD from 'react-router-dom';
// Components
import { PostList } from '../components/_index';
import { TPost } from '../types/types';

export function BlogPage() {
  const posts = RRD.useLoaderData() as TPost[];
  return <PostList posts={posts} />;
}

// Get Posts
export function loader() {
  return fetch('https://jsonplaceholder.typicode.com/posts');
}

// TODO: Add Error page and error handling