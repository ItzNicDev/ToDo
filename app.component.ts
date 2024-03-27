import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  toDoValue: string = "";
  toDoList: string[] = [];


  ngOnInit() {
    let gespeicherteDate: string | null = localStorage.getItem("gespeicherteListe");
    if (gespeicherteDate != null) {
      this.toDoList = gespeicherteDate.split(',');
    }
  }

  save() {
    if (this.toDoValue != "") {
      this.toDoList.push(this.toDoValue);
      localStorage.setItem("gespeicherteListe", this.toDoList.toString());
    }

    this.toDoValue = "";
  }

  deleteItem(index: number) {
    this.toDoList.splice(index, 1);
    localStorage.setItem("gespeicherteListe", this.toDoList.toString());
  }

}
