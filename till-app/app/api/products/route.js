export const POST = async (request) => {

    const productsDescription = ['Ropa de bebe', 'Ropa de mujer', 'Ropa de hombre', 'Ropa de niños', 'Accesorio de viaje', 'Belleza', 'Calzado', 'Complementos']

    const data = await request.json();

    const product = {code: data.code, description: productsDescription[data.product], price: 3 }
    console.log(product);

 
    return new Response (JSON.stringify(product))
}