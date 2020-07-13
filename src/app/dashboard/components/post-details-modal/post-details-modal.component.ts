import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-details-modal',
  templateUrl: './post-details-modal.component.html',
})
export class PostDetailsModalComponent {

  post: Post;

  constructor(public dialogRef: MatDialogRef<PostDetailsModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { post: Post }) {
    this.post = data.post;
  }
}

