import { Component } from '@angular/core';

import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent {

  mockedPost: Post = { id: 0, title: 'hmmm', content: 'daleee' };

  onDelete(postId: number) {
    console.log('to delete:' + postId);
  }
}
