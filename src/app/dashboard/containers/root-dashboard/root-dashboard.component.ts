import { Component } from '@angular/core';

import { Post } from '../../models/post.model';

@Component({
  selector: 'app-root-dashboard',
  templateUrl: './root-dashboard.component.html',
  styleUrls: ['./root-dashboard.component.scss'],
})
export class RootDashboardComponent {
  mockedPost: Post = { id: 0, title: 'hmmm', text: 'daleee' };
}
