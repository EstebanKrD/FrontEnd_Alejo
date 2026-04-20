"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
  id;
  nombre;
  precio;
  stock;
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}
class Inventario {
  productos = [];
  agregar(productos) {
    this.productos.push(productos);
  }
  buscarPorNombre(nombre) {
    return this.productos.find((Producto) => Producto.nombre === nombre);
  }
  listarTodos() {
    this.productos.forEach((Producto) => console.log(Producto));
  }
  calcularValorTotal() {
    return this.productos.reduce(
      (total, Producto) => total + Producto.precio * Producto.stock,
      0,
    );
  }
}
const inventario = new Inventario();
inventario.agregar(new Producto(1, "Arroz", 2500, 10));
inventario.agregar(new Producto(2, "Leche", 3000, 5));
inventario.listarTodos();
console.log(inventario.buscarPorNombre("Arroz"));
console.log(inventario.calcularValorTotal());
