const ProductDetails = () => {
    const rute = useParams ()
    const productFound = products.find ((product) => product.id ===Number(rute.id))
    const {handleAddProduct}= useGlobalContext()
    return (
        <div>
        {
        productFound 
        ?
        <>
        <h2>{productFound.nombre}</h2>
        <img src={productFound.img}/>
        <span>Precio: ${productFound.precio}</span>
        <button onClick={() => handleAddProduct(productFound.id)}>Añadir al carrito</button>
        </>
        :
        <Error404 mensaje={'El producto buscado no existe'} />
    }
    </div>
    )
}