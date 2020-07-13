import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    });
  }

  onCancel() {
    this.router.navigateByUrl('dashboard/posts')
  }

  onSave() {
    console.log('saving');
  }
}
