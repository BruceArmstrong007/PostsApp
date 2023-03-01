import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'akur8-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  postForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });
  postsService = inject(PostService);
  addPost(){
    if(!this.postForm.valid){
      return;
    }
    const formValue = this.postForm.getRawValue();
    const timestamp = new Date().getTime().toString();
    const randomString = Math.random().toString(36).substring(2);
    const uniqueId = timestamp + '-' + randomString
    this.postsService.addPost({
      id: uniqueId,
      ...formValue
    });
    this.postForm.reset();
  }

  get f(){
    return (this.postForm as FormGroup)?.controls;
  }

  get isSubmit(){
    return !(this.postForm as FormGroup).valid;
  }

  get isReset(){
    return !this.f['name']?.value && !this.f['content']?.value
  }

}

