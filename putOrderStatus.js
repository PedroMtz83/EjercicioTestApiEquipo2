const axios = require('axios');
const API_URL = 'https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders';

const ORDER_ID = '12345'; // ID
const NEW_STATUS = 'En proceso';

async function updateStatus() {
  try {
    const response = await axios.put(`${API_URL}/${ORDER_ID}/status`, {
      estado: NEW_STATUS
    });
    console.log('Nuevo estado:', response.data.estado);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

updateStatus();