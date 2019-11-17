import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product;
  id: string;
  constructor(private proSer: ProductServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.product = this.proSer.getProductsById(this.id);
    this.route.params.subscribe((param:Params) => {
      this.product = this.proSer.getProductsById(param['id']);
    })
  }

}
