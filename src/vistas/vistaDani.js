// vistaDani.js
import { bd } from "../bd/bd-comentarios";
import { tickets } from "../bd/tickets";

export const vistaDani = {
    template: `
        <div class="container">
            <h1>Comentarios de Dani</h1>
            <div id="comentariosContainer"></div>
        </div>
    `,
    script: (ticketSeleccionado) => {
        let comentariosHtml = '';

        if (ticketSeleccionado) {
            const comentariosTicket = bd.filter(comentario => comentario.codigo === ticketSeleccionado.codigo);

            comentariosTicket.forEach(comentario => {
                comentariosHtml += `
                    <div class="card p-3 mt-4">
                        <h5 class="text-end">Autor: 
                            <span id="usuario">${comentario.usuario}</span>
                            <span id="fecha" class="ms-4">${comentario.fecha}</span>
                        </h5>
                        <p id="texto">${comentario.contenido}</p>
                    </div>
                `;
            });
        }

        document.querySelector('#comentariosContainer').innerHTML = comentariosHtml;
    },
};
