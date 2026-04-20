"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioService {
    usuario = [];
    crear(usuario) {
        this.usuario.push(usuario);
    }
    desactivar(id) {
        const usuario = this.usuario.find((Usuario) => Usuario.id === id);
        if (usuario) {
            usuario.activo = false;
        }
    }
    listarActivos() {
        return this.usuario.filter((Usuario) => Usuario.activo === true);
    }
}
const service = new UsuarioService();
service.crear({ id: 1, nombre: "Ana", correo: "ana@mail.com", activo: true });
service.crear({ id: 2, nombre: "Luis", correo: "luis@mail.com", activo: true });
service.desactivar(1);
console.log(service.listarActivos());
