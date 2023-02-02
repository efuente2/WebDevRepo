import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROW_HIGH : { [id:number]: number} = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    cols = 3;
    rowHeight = ROW_HIGH[this.cols];
    catagory: string | undefined;
  
    constructor(private cartService: CartService) { }
  
    ngOnInit(): void {
    }

    onColumnsCountChange(coslsNumber: number){
      this.cols = coslsNumber;
      this.rowHeight = ROW_HIGH[this.cols];

    }

    onShowCategory(catagory: string): void{
      this.catagory = catagory;
    }

    onAddToCart(product: Product): void{
        this.cartService.addToCart({
          product: product.image,
          name: product.title,
          price: product.price,
          quantity: 1,
          id: product.id});
    }

}
