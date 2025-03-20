const axios = require('axios');
const ORDER_ID = 'lUcJaQjItzWe9DIQrmdM'; // ID de la orden
const API_URL = `https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders/${ORDER_ID}`;

async function getOrder() {
  try {
    const response = await axios.get(API_URL);
    console.log('Orden encontrada:', {
      estado: response.data.estado,
      total: response.data.total,
      productos: response.data.productos.length,
      envio: response.data.estadoEnvio.estadoActual
    });
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getOrder();