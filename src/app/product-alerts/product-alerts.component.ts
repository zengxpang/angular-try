import { Component,Input,Output,EventEmitter } from '@angular/core';

import { IProduct } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
//   处理组件的功能
  // @Input() 装饰器表示属性值从组件的父组件 ProductListComponent 传入。
  @Input() product: IProduct | undefined;

  // notify 属性的值更改时发出事件
  @Output() notify = new EventEmitter();
}
