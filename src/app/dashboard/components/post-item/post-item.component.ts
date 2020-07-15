import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Post } from '../../models/post.model';
import { PostDetailsModalComponent } from '../post-details-modal/post-details-modal.component';
import { Features } from '../../../permission/models/features.enum';
import { Permission } from '../../../permission/models/permissions.enum';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {

  @Input() post: Post;

  @Output() delete = new EventEmitter();

  features = Features;
  permission = Permission;

  constructor(private router: Router,
              private dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(PostDetailsModalComponent, {
      width: '450px',
      data: { post: this.post },
    });
  }

  onEdit() {
    this.router.navigateByUrl(`dashboard/posts/${ this.post.id }`);
  }
}
