const axios = require('axios');
const ORDER_ID = 'SbqJGIvOrwxF70ubgZPV'; // ID de la orden a actualizar
const API_URL = `https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders/${ORDER_ID}`;

const updateData = {
  estado: "Completado",
  total: 2500,
  productos: [
    {
      productoId: "P456",
      nombre: "Teclado Mecánico Actualizado",
      cantidad: 3,
      precioUnitario: 833.33
    }
  ],
  descuentosAplicados: [
    {
      codigo: "OFERTA25",
      porcentaje: 25,
      vigencia: "2025-12-31"
    }
  ]
};

async function updateOrder() {
  try {
    const response = await axios.put(API_URL, updateData);
    console.log('Orden actualizada:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

updateOrder();