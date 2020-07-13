import { createAction, props } from '@ngrx/store';

import { Post } from '../models/post.model';

export const editPost = createAction(
  '[Dashboard] Edit Post',
  props<{ post: Post }>(),
);
