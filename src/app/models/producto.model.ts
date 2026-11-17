export interface Producto {
    id: number;
    price: number;
    title: string;
    description: string;
    category: string;
    image:string;
    rating:number;
    rate:number;
    count:number;
    

}

//Extracción de las propiedades necesarias para crear un nuevo producto
export type ProductoInput = Pick<Producto, 'title'| 'price'| 'description'| 'category'| 'image'>;