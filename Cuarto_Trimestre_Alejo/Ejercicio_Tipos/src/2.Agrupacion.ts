type TipoTransferencia = "ingreso" | "egreso";

interface Transferencia {
    id: number;
    tipo: TipoTransferencia;
    categoria: string;
    monto: number;
}

function agrupar(transacciones: Transferencia[]): { ingreso: number; egreso: number } {
    let ingreso = 0;
    let egreso = 0;
     transacciones.forEach((transaccion) => {
        if (transaccion.tipo === "ingreso") {
            ingreso += transaccion.monto;
        } else if (transaccion.tipo === "egreso") {
            egreso += transaccion.monto;
        } 
});
    return { ingreso, egreso };
}

const transacciones: Transferencia[] = [
    { id: 1, tipo: "ingreso", categoria: "salario", monto: 350000 },
    { id: 2, tipo: "egreso", categoria: "arriendo", monto: 180000 },
];

console.log(agrupar(transacciones));