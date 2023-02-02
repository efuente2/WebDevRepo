import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = "desc";
  itemsShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(sort: string): void {
    this.sort = sort;
  }

  onItemsUpdated(items: number): void {
    this.itemsShowCount = items;
  }

  onColumnsUpdated(columns: number): void {
    this.columnsCountChange.emit(columns);
  }

}
