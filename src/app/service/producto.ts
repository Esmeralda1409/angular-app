import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Producto, ProductoInput } from '../models/producto.model';



@Service()
export class Productos {
    updateProduct(id: number, form: ProductoInput) {
      throw new Error('Method not implemented.');
    }

    private readonly url='https://fakestoreapi.com/products'

    private readonly http= inject(HttpClient)

    obtenerProductos():Observable<Producto[]>
    {
        return this.http.get<Producto[]>(this.url)

    }

    //CREAR PRODUCTO
    crearProducto(producto:ProductoInput)
    {
        return this.http.post<Producto>(this.url,producto)
    }

    //Actualizar producto
    actualizarProducto(id:number,producto:ProductoInput)
    {
        return this.http.put<Producto>(`${this.url}/${id}`,producto)
    }

    //Eliminar producto
    eliminarProducto(id:number)
    {
        return this.http.delete(`${this.url}/${id}`)
    }

     getCategories(): Observable<string[]> 
    {
       return this.http.get<string[]>(`${this.url}/categories`);
    }

    
}
