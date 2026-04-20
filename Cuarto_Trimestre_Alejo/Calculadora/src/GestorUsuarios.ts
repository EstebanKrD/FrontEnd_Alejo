interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    activo: boolean;
}

class UsuarioService {
    usuario: Usuario [] = [];

    crear(usuario: Usuario): void {
        this.usuario.push(usuario)
    }

    desactivar(id: number): void {
        const usuario = this.usuario.find((Usuario)=> Usuario.id === id);
        if(usuario) {
            usuario.activo = false;
        }
    }

    listarActivos(): Usuario[] {
        return this.usuario.filter((Usuario) => Usuario.activo === true);
    }
}

const service = new UsuarioService();

service.crear({ id: 1, nombre: "Ana", correo: "ana@mail.com", activo: true });
service.crear({ id: 2, nombre: "Luis", correo: "luis@mail.com", activo: true });

service.desactivar(1);

console.log(service.listarActivos());