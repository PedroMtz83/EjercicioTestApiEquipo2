const axios = require('axios');
const ORDER_ID = 'QSarC37AuQ9KQZ5BykoL'; // ID de la orden
const API_URL = `https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders/${ORDER_ID}/descuento`;

const discountData = {
  codigo: "OFERTA100",
  porcentaje: 100,
  vigencia: "2025-03-20"
};

async function applyDiscount() {
  try {
    const response = await axios.put(API_URL, discountData);
    console.log('Descuento aplicado. Total descuentos:', response.data.descuentosAplicados.length);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

applyDiscount();