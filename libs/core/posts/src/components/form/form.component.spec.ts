import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let postService: PostService;
  const name = component.postForm.controls.name;
  const content = component.postForm.controls.content;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [PostService]
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    postService = TestBed.inject(PostService);
    component = fixture.componentInstance;
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
