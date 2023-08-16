export const POST = async (request) => {

    //Creamos un array de productos para simular la llamada a la base de datos
    const productsDescription = ['Ropa de bebe', 'Ropa de mujer', 'Ropa de hombre', 'Ropa de niños', 'Accesorio de viaje', 'Belleza', 'Calzado', 'Complementos']

    const data = await request.json();

    //Generamos un nuevo producto con el código recibido, la posición de la descripción se genera aleatoriamente en la petición y con un precio
    const product = {code: data.code, description: productsDescription[data.product], price: 3 }

    //Retornamos el producto completo
    return new Response (JSON.stringify(product))
}