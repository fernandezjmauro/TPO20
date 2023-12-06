const URL = "https://grupo2023.pythonanywhere.com/"

const app = Vue.createApp({ 
   data() {
     return {
       dni: '',
       nombre: '',
       apellido: '',
       ciudad: '',
       direccion: '',
       imagen_url: '',
       imagenUrlTemp: null,
       mostrarDatosProducto: false,
    };
},
   methods: {
    obtenerProducto() {
        fetch(URL + 'productos/' + this.dni)
          .then(response => {
             if (response.ok) {
               return response.json()
              } else {
                //Si la respuesta es un error, lanzamos una excepción para ser "catcheada" más adelante en el catch.
                  throw new Error('Error al obtener los datos del producto.')
                }
           })
          .then(data => {
             this.nombre = data.nombre;
             this.apellido = data.apellido;
             this.ciudad = data.ciudad;
             this.direccion = data.direccion;
             this.imagen_url = data.imagen_url;
             this.mostrarDatosProducto = true;
           })
          .catch(error => {
             console.log(error);
             alert('Código no encontrado.');
           })
   },
   seleccionarImagen(event) {
      const file = event.target.files[0];
      this.imagenSeleccionada = file;
      this.imagenUrlTemp = URL.createObjectURL(file); // Crea una URL temporal 
     },
    guardarCambios() {
      const formData = new FormData();
      formData.append('dni', this.dni);
      formData.append('nombre', this.nombre);
      formData.append('apellido', this.apellido);
      formData.append('direccion', this.direccion);
      formData.append('ciudad', this.ciudad);
      if (this.imagenSeleccionada) { formData.append('imagen', this.imagenSeleccionada, this.imagenSeleccionada.name); }
  //Utilizamos fetch para realizar una solicitud PUT a la API y  guardar los cambios.
      fetch(URL + 'productos/' + this.dni, {
        method: 'PUT',
        body: formData,
      })
       .then(response => {
          //Si la respuesta es exitosa, utilizamos response.json() para parsear la respuesta en formato JSON.
          if (response.ok) {
            return response.json()
          } else {
            //Si la respuesta es un error, lanzamos unaexcepción.
            throw new Error('Error al guardar los cambios del producto.')
             }
        })
        .then(data => {
           alert('Producto actualizado correctamente.');
           this.limpiarFormulario();
        })
        .catch(error => {
           console.error('Error:', error);
           alert('Error al actualizar el producto.');
        });
    },
    limpiarFormulario() {
      this.dni = '';
      this.nombre = '';
      this.apellido = '';
      this.ciudad = '';
      this.imagen_url = '';
      this.imagenSeleccionada = null;
      this.imagenUrlTemp = null;
      this.mostrarDatosProducto = false;
    }
  }
});
app.mount('#app');  