const axios = require('axios');
const ORDER_ID = 'v66gIqTHomclGVUykVjU'; // ID de la orden
const API_URL = `https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders/${ORDER_ID}/envio`;

async function getShipping() {
  try {
    const response = await axios.get(API_URL);
    console.log('Estado de envío:', {
      estado: response.data.estadoActual,
      ubicacion: response.data.ubicacionActual,
      fecha: response.data.fechaActualizacion
    });
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getShipping();