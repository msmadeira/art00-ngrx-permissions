import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from '../../models/post.model';
import * as dashboardActions from '../../state/dashboard.actions';
import * as dashboardSelectors from '../../state/dashboard.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.posts$ = this.store.pipe(select(dashboardSelectors.selectPosts));
  }

  onDelete(postId: number) {
    this.store.dispatch(dashboardActions.deletePost({ postId }));
  }
}
