import { Component, ViewChild, ViewChildren, ElementRef, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('listRow', [
      transition('void => *', [
        style({
          opacity: 1,
          border: '10px solid green',
          transform: 'translateX(-100px)'
        }),
        animate(400)]),
      transition('* => void', [
        style({
          opacity: 0,
          border: '10px solid red',
          transform: 'translateX(500px)',
          width: '80%'
        }),
        animate(200)])
    ]),
    trigger('displayItems', [
      state('add', style({
        opacity: 1,
        border: '2px solid black',
        transform: 'translateX(-300px)'
      })),
      state('delete', style({
        opacity: 0,
        border: '0px solid blue',
        transform: 'translateX(300px)'
      })),
      transition('add <=> delete', animate(300,
        style({
          opacity: 1,
          border: '2px solid black',
          transform: 'translateX(-300px)'
        }))),
      transition('delete <=> add', animate(300,
        style({
          opacity: 0,
          border: '2px solid black',
          transform: 'translateX(300px)'
        })))
    ])
  ]
})

export class AppComponent {
  title = 'Anuglar Animations';
  list = ['Apple', 'Banana', 'Custard Apple', 'Dragon Fruit', 'Elderberry'];
  @ViewChild('input') value: ElementRef;
  @ViewChildren('editModeValues') editModeValues: QueryList<any>;
  errorExists: boolean;
  errorMessage: string;
  editMode = [];
  editedText: string;
  onAdd(item) {
    if (item) {
      const isNew = this.list.includes(item);
      if (!isNew) {
        this.list.push(item);
        this.value.nativeElement.value = '';
        this.errorExists = false;
        this.errorMessage = '';
        this.editMode[this.list.length + 1] = false;
      } else {
        this.errorExists = true;
        this.errorMessage = 'Already Exists';
      }
    } else {
      this.errorExists = true;
      this.errorMessage = 'Enter any Value';
    }
  }

  onDelete(i) {
    this.editMode.splice(i, 1);
    this.list.splice(i, 1);
  }

  edit(i) {
    this.editMode[i] = true;
  }

  update(i) {
    const updatedValue = document.getElementById('editModeValue' + i)['value'];
    if (updatedValue !== '') {
    const newListData = JSON.parse(JSON.stringify(this.list));
    newListData.splice(i, 1);
    const isNew = newListData.includes(updatedValue);
    if (!isNew) {
      this.editMode[i] = false;
      this.list[i] = updatedValue;
      this.errorExists = false;
      this.errorMessage = "";
    } else {
      this.errorExists = true;
      this.errorMessage = 'Already Exists';
    }
  } else {
    this.errorExists = true;
    this.errorMessage = 'Enter any Value';
  }
  }
}
