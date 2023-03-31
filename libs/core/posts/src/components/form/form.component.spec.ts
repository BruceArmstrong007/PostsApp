import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { PostService } from '../../services/post.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let postService: PostService;
  let name : any, content : any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    postService = TestBed.inject(PostService);
    component = fixture.componentInstance;
    name = component.postForm.controls['name'];
    content = component.postForm.controls['content'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate required fields',()=>{
    name.setValue('');
    content.setValue('');
    expect(name.errors?.required).toBeTruthy();
    expect(content.errors?.required).toBeTruthy();
  });


});
