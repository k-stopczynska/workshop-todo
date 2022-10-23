import { Component, OnInit} from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  form: FormGroup = this.fb.group({
    item: [''],
  });

  listOfItems: string[] = ['cleaning', 'walking'];


  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {}

  onSubmit(): void {
    this.listOfItems.push(this.item.value);
  }

  get item(): AbstractControl {
    return this.form.get('item');
  }
}
