const axios = require('axios');
const API_URL = 'https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders';

async function getOrders() {
  try {
    const response = await axios.get(API_URL);
    console.log('Órdenes:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getOrders();