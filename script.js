// Definición de variables
let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let api_key = '2817ba9396cc58aa6b0f33759aee54ab';
let difKelvin = 273.15;

// Event listener para el botón de búsqueda
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudadInput = document.getElementById('ciudadEntrada');
    const ciudad = ciudadInput.value;
    if (ciudad) {
        // Llama a la función para obtener y mostrar datos climáticos
        fetchDatosClima(ciudad);
        ciudadInput.value = ''; // Vaciar el input después de la búsqueda
    }
})

// Función para obtener datos climáticos mediante una solicitud fetch
function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json()) // Convierte la respuesta en formato JSON
        .then(data => mostrarDatosClima(data)) // Llama a la función para mostrar los datos
}

// Función para mostrar los datos climáticos en el DOM
function mostrarDatosClima(data) {
    console.log(data); // Muestra los datos en la consola

    // Obtiene el elemento del DOM donde se mostrarán los datos
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = ''; // Limpia cualquier contenido previo

    // Extrae información relevante de los datos climáticos
    const ciudadNombre = data.name;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].description;

    // Crea elementos en el DOM para mostrar la información
    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)} Grados Centígrados`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`;

    // Agrega los elementos al contenedor en el DOM
    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(descripcionInfo);
}




