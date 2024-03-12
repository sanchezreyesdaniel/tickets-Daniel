import { registroUsuarios } from "../bd/registroUsuarios"
import { vistaLogin } from "./vistaLogin"
import { tipoUsuarioSeleccionado } from "../bd/registroUsuarios"

export const vistaRegistre = {
    template: //html
    `
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

    `,
    script:()=>{
        document.querySelector('#enviar').addEventListener('click',(event)=>{
            event.preventDefault
            const nombreValue = document.querySelector('#nombre').value
            const apellidosValue= document.querySelector('#apellidos').value
            const emailValue = document.querySelector('#email').value
            const passValue = document.querySelector('#pass').value
            const rolValue = document.querySelector('input[name="tipoUsuario"]:checked').value;
           

            if (!nombreValue || !apellidosValue || !emailValue || !passValue || !rolValue) {
                alert('Por favor, completa todos los campos obligatorios.');
                return; 
            }

            const objeto = {
                nombre: nombreValue,
                email: emailValue,
                contrasenya: passValue,
                rol: rolValue
            } 

            if(registroUsuarios.length === 0){
                registroUsuarios.push(objeto)
                const texto = JSON.stringify(registroUsuarios)
                localStorage.setItem('BD', texto)
                document.querySelector('main').innerHTML=vistaLogin.template
                vistaLogin.script()
            }else{  
                registroUsuarios.forEach(element => {
                    if(element.email!=emailValue){
                        if(element.contrasenya!=passValue){
                            registroUsuarios.push(objeto)
                            const texto = JSON.stringify(registroUsuarios)
                            localStorage.setItem('BD', texto)
                            document.querySelector('main').innerHTML=vistaLogin.template
                            vistaLogin.script()
                        }else{
                            alert('La contraseña ya esta en uso')
                        }
                    }else{
                        alert('Ese correo esta ya en uso')
                    }
                });
            }
        })

    }
}