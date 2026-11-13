import {Producto} from "./Producto";

export class ItemOrden {
  private readonly _producto: Producto;
  private _cantidad: number;

  constructor(producto: Producto, cantidad:number){
      this._producto = producto;
      this._cantidad = cantidad;
  }

  public get producto(): Producto {
      return this._producto;
  }
  public get cantidad(): number {
      return this._cantidad;
  }

  public calcularSubtotal(): number {
      return this._producto.precio * this._cantidad;
  }
}
