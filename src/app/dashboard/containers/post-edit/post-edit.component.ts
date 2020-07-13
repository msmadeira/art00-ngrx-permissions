import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Post } from '../../models/post.model';
import * as dashboardActions from '../../state/dashboard.actions';
import * as dashboardSelectors from '../../state/dashboard.selectors';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
})
export class PostEditComponent implements OnInit, OnDestroy {

  form: FormGroup;

  private postId: number;
  private onDestroy$ = new Subject<boolean>();

  constructor(private router: Router,
              private store: Store) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    });

    this.store
      .pipe(
        select(dashboardSelectors.selectPost),
        takeUntil(this.onDestroy$),
      )
      .subscribe(post => {
        if (!!post) {
          this.postId = post.id;
          this.form.controls['title'].setValue(post.title);
          this.form.controls['content'].setValue(post.content);
        }
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

  onCancel() {
    this.router.navigateByUrl('dashboard/posts')
  }

  onSave() {
    const post = new Post();
    const formValues = this.form.value;

    post.id = this.postId;
    post.title = formValues['title'];
    post.content = formValues['content'];

    this.store.dispatch(dashboardActions.editPost({ post }));
  }
}
