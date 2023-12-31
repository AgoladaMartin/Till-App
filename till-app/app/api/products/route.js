export const POST = async (request, response) => {

    //Creamos un array de productos para simular la llamada a la base de datos
    const productsDescription = ['Ropa de bebe', 'Ropa de mujer', 'Ropa de hombre', 'Ropa de niños', 'Accesorios de viaje', 'Belleza', 'Calzado', 'Complementos']

    try {
    const data = await request.json();
      
        //Generamos un nuevo producto con el código recibido, la posición de la descripción se genera aleatoriamente en la petición y con un precio
        const product = {code: data.code, description: productsDescription[data.product], price: (Math.floor((Math.random() * 31))+1).toFixed(2) }

        //Retornamos el producto completo
        return new Response (JSON.stringify(product), {status: 200})
    
   
    } catch (error) {
        console.error('Error :', error)
    return new Response ('Algo ha fallado', {status: 500})
        
    }
    
    
}