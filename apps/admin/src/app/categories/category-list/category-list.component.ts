import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories = [
    {
      id: 1,
      name: 'Category 1',
      icon: 'fa fa-home',
    },
    {
      id: 2,
      name: 'Category 2',
      icon: 'fa fa-home',
    },
    {
      id: 3,
      name: 'Category 3',
      icon: 'fa fa-home',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
