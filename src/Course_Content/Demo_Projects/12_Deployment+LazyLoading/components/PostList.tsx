import * as React from 'react';
import * as RRD from 'react-router-dom';
import classes from './PostList.module.css';
// Components & Types
import { TPost } from '../types/types';

export function PostList(props: //
{
  posts: TPost[];
}) {
  const { posts } = props;
  return (
    <ul className={classes.list}>
      {posts.map((post) => (
        <li key={post.id}>
          <RRD.Link to={post.id.toString()}>{post.title}</RRD.Link>
        </li>
      ))}
    </ul>
  );
}
