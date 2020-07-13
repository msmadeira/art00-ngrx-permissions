import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {

  @Input() post: Post;

  @Output() delete = new EventEmitter();

  constructor(private router: Router) {
  }

  onEdit() {
    this.router.navigateByUrl(`dashboard/posts/${this.post.id}`);
  }
}
