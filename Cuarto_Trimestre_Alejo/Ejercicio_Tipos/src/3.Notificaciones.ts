interface NotificacionEmail {
    tipo: "email";
    destinatario: string;
    asunto: string;
    mensaje: string;
}

interface NotificacionSMS {
    tipo: "sms";
    numero: string;
    mensaje: string;
}

interface NotificacionPush {
    tipo: "push";
    dispositivo: string;
    mensaje: string;
}

type Notificacion = NotificacionEmail | NotificacionSMS | NotificacionPush;

function enviarNotificacion(notificacion: Notificacion): void {
    if (notificacion.tipo === "email") {
        console.log(`Enviando email a ${notificacion.destinatario} con asunto "${notificacion.asunto}" y mensaje: ${notificacion.mensaje}`);
    } else if (notificacion.tipo === "sms") {
        console.log(`Enviando SMS al número ${notificacion.numero} con mensaje: ${notificacion.mensaje}`);
    } else if (notificacion.tipo === "push") {
        console.log(`Enviando notificación push al dispositivo ${notificacion.dispositivo} con mensaje: ${notificacion.mensaje}`);
    }
}

const email: Notificacion = {
    tipo: "email",
    destinatario: "juan@gmail.com",
    asunto: "Bienvenido",
    mensaje: "Hola Juan"
};

enviarNotificacion(email);

const sms: Notificacion = {
    tipo: "sms",
    numero: "123456789",
    mensaje: "El código de verificación es 1234"
};

enviarNotificacion(sms);

const push: Notificacion = {
    tipo: "push",
    dispositivo: "iPhone",
    mensaje: "Tienes una nueva notificación"
};

enviarNotificacion(push);

console.log("Notificaciones enviadas correctamente");
