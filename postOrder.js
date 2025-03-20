const axios = require('axios');
const API_URL = 'https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders';

const orderData = {
  clienteId: "67890",
  fechaPedido: new Date().toISOString(),
  total: 2999.99,
  estado: "Pendiente",
  productos: [
    {
      productoId: "A1B2C3",
      nombre: "Teclado Mecánico",
      cantidad: 1,
      precioUnitario: 999.99
    }
  ],
  descuentosAplicados: [
    {
      codigo: "PROMO10",
      porcentaje: 10,
      valorDescuento: 300
    }
  ],
  estadoEnvio: {
    estadoActual: "En tránsito"
  }
};

async function createOrder() {
  try {
    const response = await axios.post(API_URL, orderData);
    console.log('Orden creada:', response.data.id);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

createOrder();