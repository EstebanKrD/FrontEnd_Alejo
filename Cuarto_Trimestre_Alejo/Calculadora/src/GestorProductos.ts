class Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;

  constructor(id: number, nombre: string, precio: number, stock: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

class Inventario {
  productos: Producto[] = [];
  agregar(productos: Producto): void {
    this.productos.push(productos);
  }
  buscarPorNombre(nombre: string): Producto | undefined {
    return this.productos.find((Producto) => Producto.nombre === nombre);
  }
  listarTodos() {
    this.productos.forEach((Producto) => console.log(Producto));
  }
  calcularValorTotal(): number {
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
