(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const b=[{codigo:"T006",usuario:"Dani",fecha:"26/10/2004",contenido:"Holaaaaaaaaaaaaaaaaaaaaa"},{codigo:"T009",usuario:"Javiercito",fecha:"02/01/2004",contenido:"jejjejejej."},{codigo:"0",usuario:"Adri",fecha:"16/01/2004",contenido:"Naanooooooooooooooooo."},{codigo:"T006",usuario:"Juan",fecha:"26/10/2004",contenido:"jejejejje"},{codigo:"T007",usuario:"Daniel",fecha:"01/01/2022",contenido:"Buenos dias"},{codigo:"T008",usuario:"Mireia",fecha:"02/01/2022",contenido:"No funciona"},{codigo:"T009",usuario:"JAVI",fecha:"03/01/2022",contenido:"HOLA"},{codigo:"T010",usuario:"Aaron",fecha:"04/01/2022",contenido:"examenn"}],n=[{codigo:"T006",fecha:"2024-02-28",aula:"Aula 201",grupo:"Grupo F",ordenador:"PC006",descripcion:"Problema con la impresora",alumno:"Laura Sánchez",estado:"Pendiente"},{codigo:"T007",fecha:"2024-02-29",aula:"Aula 202",grupo:"Grupo G",ordenador:"PC007",descripcion:"Problema con el sistema operativo",alumno:"Javier Fernández",estado:"Resuelto"},{codigo:"T008",fecha:"2024-03-01",aula:"Aula 203",grupo:"Grupo H",ordenador:"PC008",descripcion:"No funciona el teclado de la computadora",alumno:"Isabel Gómez",estado:"Resuelto"},{codigo:"T009",fecha:"2024-03-02",aula:"Aula 204",grupo:"Grupo I",ordenador:"PC009",descripcion:"Problema con el monitor",alumno:"Miguel Pérez",estado:"Pendiente"},{codigo:"T010",fecha:"2024-03-03",aula:"Aula 205",grupo:"Grupo J",ordenador:"PC010",descripcion:"No se puede conectar a la red",alumno:"Carmen Martínez",estado:"Resuelto"}],d={template:`
    <h1 class="mt-5 text-center">Inicia sesión</h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
        <form action="" class="form border shadow-sm p-3">
            <label for="email" class="form-label">Email:</label>
            <input id="email" type="email" class="form-control" />
            <label for="pass" class="form-label mt-3">Contraseña:</label>
            <input id="pass" type="password" class="form-control" />
            <div class="form-check mt-3">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                    Recordar sesión
                </label>
            </div>
            <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
            <a id="iniciarSesion" class="btn btn-primary w-100 mt-3" href="#">Iniciar sesión</a>
        </form>
        <a id="registrox" class="d-block mt-5 btn btn-secondary mx-auto" href="#"
            >¿Eres nuevo? Regístrate</a
        >
    </div>
    `,script:()=>{document.querySelector("#iniciarSesion").addEventListener("click",i=>{i.preventDefault;const c=localStorage.getItem("BD"),l=JSON.parse(c),e=document.querySelector("#email").value,t=document.querySelector("#pass").value;l.forEach(o=>{e==o.email?t==o.contrasenya?(alert("Has iniciado sesion correctamente"),document.querySelector("#nombreUsuario").innerHTML=e,document.querySelector("#nombreUsuario").dataset.rol=o.rol,document.querySelector("#nombreUsuario").classList.replace("d-none","d-inline-block"),document.querySelector("#cerrarSesion").classList.replace("d-none","d-inline-block"),document.querySelector("main").innerHTML=s.template,s.script()):alert("La contraseña no es correcta"):alert("Este correo no esta registrado")})}),document.querySelector("#cerrarSesion").addEventListener("click",i=>{i.preventDefault,document.querySelector("#nombreUsuario").classList.replace("d-inline-block","d-none"),document.querySelector("#cerrarSesion").classList.replace("d-inline-block","d-none"),document.querySelector("main").innerHTML=d.template,d.script()}),document.querySelector("#registrox").addEventListener("click",i=>{i.preventDefault,document.querySelector("main").innerHTML=m.template,m.script()})}},m={template:`
    <div class="container mt-5">
    <h1 class="text-center">Registro</h1>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <form action="" class="form border shadow p-3">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre:</label>
                    <input name="nombre" id="nombre" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="apellidos" class="form-label">Apellidos:</label>
                    <input id="apellidos" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input name="email" id="email" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="pass" class="form-label">Contraseña:</label>
                    <input name="pass" id="pass" type="password" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="tipoUsuario" class="form-label">Tipo de usuario:</label>
                    <div>
                        <input type="radio" id="admin" name="tipoUsuario" value="administrador">
                        <label for="admin">Administrador</label>
                    </div>
                    <div>
                        <input type="radio" id="profesor" name="tipoUsuario" value="profesor">
                        <label for="profesor">Profesor</label>
                    </div>
                    <div>
                        <input type="radio" id="alumno" name="tipoUsuario" value="alumno">
                        <label for="alumno">Alumno</label>
                    </div>
                </div>
                
                <a id="enviar" class="btn btn-primary w-100" href="#">Enviar</a>
            </form>
        </div>
    </div>
</div>

    `,script:()=>{document.querySelector("#enviar").addEventListener("click",i=>{i.preventDefault;const c=document.querySelector("#nombre").value,l=document.querySelector("#apellidos").value,e=document.querySelector("#email").value,t=document.querySelector("#pass").value,o=document.querySelector('input[name="tipoUsuario"]:checked').value;if(!c||!l||!e||!t||!o){alert("Por favor, completa todos los campos obligatorios.");return}const a={nombre:c,email:e,contrasenya:t,rol:o};if(u.length===0){u.push(a);const r=JSON.stringify(u);localStorage.setItem("BD",r),document.querySelector("main").innerHTML=d.template,d.script()}else u.forEach(r=>{if(r.email!=e)if(r.contrasenya!=t){u.push(a);const p=JSON.stringify(u);localStorage.setItem("BD",p),document.querySelector("main").innerHTML=d.template,d.script()}else alert("La contraseña ya esta en uso");else alert("Ese correo esta ya en uso")})})}},u=[],A=(i,c,l)=>`
        <div class="mt-4">
        <div class="card p-3">
          <h5 class="text-end">Autor: 
          <span id="usuario">${i}</span>
          <span id="fecha" class="ms-4">${c}</span>
          </h5>
        <p id="texto">${l}</p>
        </div>
      </div>
      
        
        `,v={template:'<div id="comentarios">Comentarios</div>',script:()=>{let i="";b.forEach(c=>{i+=A(c.usuario,c.fecha,c.contenido)}),document.querySelector("#comentarios").innerHTML=i}},h={template:`
    <div id="comentario"></div>
    `,script:()=>{document.querySelector("#comentario").innerHTML=v.template,v.script()}},y={template:`<div class="d-flex">
    <h1>Comentarios</h1><button id="btnVolver" class="btn btn-link ms-auto"> Volver</button>
  </div>
  
  <h2 class="my-4">Código ticket: <span id="codigoTicket">123456</span></h2>
  <div class="">
    <form action="" class="form card p-3 shadow">
    <label for="nombre2" class="form-label">Usuario: </label>
      <input type="text">
      <label for="codigoTicket" class="form-label">Codigo: </label>
      <input type="text" id="codigoTicket">
      <label for="comentario2" class="form-label">Comentario: </label>
      <textarea id="comentario2" class="form-control" col="3"></textarea>
      <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
      <div class="d-flex align-items-center">
        <input type="datetime-local" id="fecha" class="form-control w-25">
        <button id="btnAñadirComentario" class="btn btn-success ms-auto">Añadir comentario</button>
      </div>
    </form>
    <div id="comentario"></div>
    `,script:()=>{const i=document.getElementById("codigoTicket"),c=document.getElementById("comentario2"),l=document.getElementById("fecha");document.getElementById("btnAñadirComentario").addEventListener("click",()=>{const e=i.value,t=l.value,o=c.value;console.log("Código:",e),console.log("Fecha:",t),console.log("Descripción:",o);const a={codigo:e,fecha:t,contenido:o,estado:"Pendiente"};b.push(a),console.log("bd actualizado:",b),document.querySelector("#comentario").innerHTML=h.template,h.script()}),document.getElementById("btnVolver").addEventListener("click",()=>{console.log("Volver a la vista anterior")})}},E={template:`
        <div class="container">
            <h1>Comentarios de Dani</h1>
            <div id="comentariosContainer"></div>
        </div>
    `,script:i=>{let c="";i&&b.filter(e=>e.codigo===i.codigo).forEach(e=>{c+=`
                    <div class="card p-3 mt-4">
                        <h5 class="text-end">Autor: 
                            <span id="usuario">${e.usuario}</span>
                            <span id="fecha" class="ms-4">${e.fecha}</span>
                        </h5>
                        <p id="texto">${e.contenido}</p>
                    </div>
                `}),document.querySelector("#comentariosContainer").innerHTML=c}},s={template:`
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaPendiente">
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table id="resueltos" class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaResuelto">
      </tbody>
    </table>
    <div><button id="nou-ticket" class="btn btn-danger" title="Nuevo ticket">Nuevo ticket</button></div>
    <div class="modal" id="exampleModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Editar Ticket</h5>
            
          </div>
          <div class="modal-body">
            <form action="" class="form card p-3 shadow" id="editarForm">
              <label for="codigoTicket" class="form-label">Código: </label>
              <input type="text" class="form-control mb-3" id="codigoTicket">

              <label for="fecha" class="form-label">Fecha: </label>
              <input type="date" class="form-control mb-3" id="fecha">

              <label for="aula" class="form-label">Aula: </label>
              <input type="text" class="form-control mb-3" id="aula">

              <label for="ordenador" class="form-label">Ordenador: </label>
              <input type="text" class="form-control mb-3" id="ordenador">

              <label for="descripcion" class="form-label">Descripción: </label>
              <textarea class="form-control mb-3" id="descripcion" rows="3"></textarea>

              <label for="alumno" class="form-label">Alumno: </label>
              <input type="text" class="form-control mb-3" id="alumno">

              <label for="grupo" class="form-label">Grupo: </label>
              <input type="text" class="form-control mb-3" id="grupo">

              <div class="d-flex align-items-center">
                <button id="btnAñadirComentario" class="btn btn-success ms-auto">EDITAR</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
    
    `,script:()=>{let i="",c="";n.forEach(e=>{e.estado=="Pendiente"&&(i+=`
              <tr class="tarea">
                  <td>${e.codigo}</td>
                  <td>${e.fecha}</td>
                  <td>${e.aula}</td>
                  <td>${e.grupo}</td>
                  <td>${e.ordenador}</td>
                  <td>${e.descripcion}</td>
                  <td>${e.alumno}</td>
                  <td>${e.estado}</td>
                  <td>
                      <button class="btn btn-success resolver" data-codigo="${e.codigo}" title="Resolver ticket">Resolver</button>
                  </td>
                  <td>
                      <button id="editar" data-codigo="${e.codigo}" class="btn btn-primary" title="Añadir comentario" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i class="bi bi-pencil"></i>
                      </button>
                  </td>
                  <td>
                      <button id="comentarios" class="btn btn-warning" title="Añadir comentario" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i class="bi bi-pencil"></i>
                      </button>
                  </td>
                  <td>
                  <button id="verComentario" class="btn btn-info" data-codigo="${e.codigo}" title="Ver comentarios">
                  <i class="bi bi-chat-left-text"></i>
              </button>
                  </td>
                  <td> 
                      <div >
                      <button id="eliminar" class="eliminar btn btn-danger" data-codigo="${e.codigo}" title="Eliminar ticket">
                      <i class="bi bi-trash3"></i>
                    </button>
                    
                      </div>
                  </td>
              </tr>
              `),e.estado=="Resuelto"&&(c+=`
              <tr class="tarea">
                  <td>${e.codigo}</td>
                  <td>${e.fecha}</td>
                  <td>${e.aula}</td>
                  <td>${e.grupo}</td>
                  <td>${e.ordenador}</td>
                  <td>${e.descripcion}</td>
                  <td>${e.alumno}</td>
                  <td>${e.estado}</td>
                  <td>
                      <button class="btn btn-success" title="Resolver ticket" disabled>Resuelto</button>
                  </td>
                  <td>
                      <button id="editar" data-codigo="${e.codigo}" class="btn btn-primary" title="Añadir comentario" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i class="bi bi-pencil"></i>
                      </button>
                  </td>
                  <td>
                      <button id="comentarios" class="btn btn-warning" title="Añadir comentario" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i class="bi bi-pencil"></i>
                      </button>
                  </td>
                  
                  <td>
                  <button id="verComentario" class="btn btn-info" data-codigo="${e.codigo}" title="Ver comentarios">
                  <i class="bi bi-chat-left-text"></i>
              </button>
                  </td>
                  <td>
                      <div class="tarea">
                      <button id="eliminar" class="eliminar btn btn-danger" data-codigo="${e.codigo}" title="Eliminar ticket">
  <i class="bi bi-trash3"></i>
</button>

                    </div>
                  </td>
              </tr>
              `)}),document.querySelector("#tablaPendiente").innerHTML=i,document.querySelector("#tablaResuelto").innerHTML=c;const l=document.querySelector("#nombreUsuario").dataset.rol;l==="profesor"&&(console.log("El usuario es profesor"),document.querySelectorAll(".eliminar").forEach(e=>e.classList.add("d-none"))),l==="alumno"&&(console.log("El usuario es alumno"),document.querySelectorAll(".resolver").forEach(e=>e.classList.add("d-none")),document.querySelectorAll(".eliminar").forEach(e=>e.classList.add("d-none")),document.querySelector("#resueltos").classList.add("d-none")),document.querySelectorAll(".resolver").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-codigo"),o=n.find(a=>a.codigo===t);o&&(o.estado="Resuelto",s.script())})}),document.querySelector("#comentarios").addEventListener("click",()=>{}),document.querySelector("#nou-ticket").addEventListener("click",()=>{document.querySelector("main").innerHTML=k.template,k.script()}),document.querySelectorAll("#verComentario").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-codigo"),o=n.find(a=>a.codigo===t);o&&(console.log("Ticket seleccionado:",o),document.querySelector("main").innerHTML=E.template,E.script(o))})}),document.querySelectorAll("#comentarios").forEach(e=>{e.addEventListener("click",()=>{console.log("hola"),document.querySelector("main").innerHTML=y.template,y.script()})}),document.querySelectorAll(".eliminar").forEach(e=>{e.addEventListener("click",t=>{console.log("Eliminar Ticket - Evento de clic disparado");const o=e.getAttribute("data-codigo");console.log("codigoTicket",o);const a=n.findIndex(r=>r.codigo===o);console.log("index",a),a!==-1?(n.splice(a,1),console.log("Ticket eliminado:",o),console.log("Tickets actualizados:",n),s.script()):console.log("Ticket no encontrado en el array")})}),document.querySelectorAll("#editar").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-codigo"),o=n.find(a=>a.codigo===t);if(o){document.getElementById("codigoTicket").value=o.codigo,document.getElementById("fecha").value=o.fecha,document.getElementById("aula").value=o.aula,document.getElementById("ordenador").value=o.ordenador,document.getElementById("descripcion").value=o.descripcion,document.getElementById("alumno").value=o.alumno,document.getElementById("grupo").value=o.grupo;const a=document.getElementById("exampleModal");a.classList.add("show"),a.style.display="block"}}),document.getElementById("editarForm").addEventListener("submit",t=>{t.preventDefault();const o=document.getElementById("codigoTicket").value,a=document.getElementById("fecha").value,r=document.getElementById("aula").value,p=document.getElementById("ordenador").value,T=document.getElementById("descripcion").value,L=document.getElementById("alumno").value,x=document.getElementById("grupo").value,f=n.findIndex(q=>q.codigo===o);f!==-1?(n[f]={codigo:o,fecha:a,aula:r,ordenador:p,descripcion:T,alumno:L,grupo:x,estado:n[f].estado},s.script()):console.error("Ticket no encontrado en la base de datos");const g=document.getElementById("exampleModal");g.classList.remove("show"),g.style.display="none"})})}},k={template:`<div class="d-flex">
    <h1>Comentarios</h1><button class="btn btn-link ms-auto"> Volver</button>
  </div>
  
  <h2 class="my-4">Código ticket: <span>123456</span></h2>
  <div class="">
    <form action="" class="form card p-3 shadow">
    <label for="codigo" class="form-label">Código: </label>
    <input type="text" class="form-control mb-3" id="codigo">

    <label for="fecha" class="form-label">Fecha: </label>
    <input type="date" class="form-control mb-3" id="fecha">

    <label for="aula" class="form-label">Aula: </label>
    <input type="text" class="form-control mb-3" id="aula">

    <label for="ordenador" class="form-label">Ordenador: </label>
    <input type="text" class="form-control mb-3" id="ordenador">

    <label for="descripcion" class="form-label">Descripción: </label>
    <textarea class="form-control mb-3" id="descripcion" rows="3"></textarea>

    <label for="alumno" class="form-label">Alumno: </label>
    <input type="text" class="form-control mb-3" id="alumno">

    <label for="grupo" class="form-label">Grupo: </label>
    <input type="text" class="form-control mb-3" id="grupo">
    
   
    
    
    <div class="d-flex align-items-center">
        
        <button id="btnAñadirComentario" class="btn btn-success ms-auto">Añadir comentario</button>
    </div>
    </form>
    <div id="comentario"></div>
    `,script:()=>{document.getElementById("btnAñadirComentario").addEventListener("click",()=>{const i=document.getElementById("codigo").value,c=document.getElementById("fecha").value,l=document.getElementById("aula").value,e=document.getElementById("ordenador").value,t=document.getElementById("descripcion").value,o=document.getElementById("alumno").value,a=document.getElementById("grupo").value;console.log("Código:",i),console.log("Fecha:",c),console.log("Aula:",l),console.log("Ordenador:",e),console.log("Descripción:",t),console.log("Alumno:",o),console.log("Grupo:",a);const r={codigo:i,fecha:c,aula:l,grupo:a,ordenador:e,contenido:t,alumno:o,estado:"Pendiente"};n.push(r),console.log("bd actualizado:",b),document.querySelector("#comentario").innerHTML=s.template,s.script()})}},S={template:`
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div>
            <button id="panel" class="btn btn-secondary ms-2">PANEL</button>
            <button id="login" class="btn btn-secondary ms-2">LOGIN</button>
            <button id="registro" class="btn btn-secondary ms-2">REGISTRO</button>
            
        </div>
        <div>
            <span id="nombreUsuario" class="d-none"></span>
            <button id="cerrarSesion" class="d-none btn btn-secondary ms-2">CERRAR SESIÓN</button>
        </div>
        </div>
    </nav>
    `,script:()=>{document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=d.template,d.script(),document.querySelector("#panel").addEventListener("click",()=>{document.querySelector("main").innerHTML=s.template,s.script()})}),document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=m.template,m.script()})}};document.querySelector("header").innerHTML=S.template;S.script();document.querySelector("main").innerHTML=m.template;m.script();
