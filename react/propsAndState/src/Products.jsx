import { products } from "./data"
import Product from "./Product"
//list and key => 
export default function Products() {
    return <>
    {/* <Product image={products[0].image} title={products[0].title} description={products[0].description}
    price={products[0].price} />
    <Product image={products[1].image} title={products[1].title} description={products[1].description}
    price={products[1].price} />
    <Product {...products[2]} /> */}

    <div style={{display:'flex',flexWrap:'wrap',gap:'30px'}}>
    {products.map((product,index,arr)=>{
        return <Product key={product.id} {...product} />
    })}
    </div>
    </>
}


