export default function Product({image,title,description,price,isOutOfStock}) {
    // console.log(props)
    // let {image,title,description,price} = props
    return <>
    <div style={{
        opacity:isOutOfStock ? '0.5': '1'
    }} className="card">
        <div className="image">
            <img src={image} alt="" />
        </div>
        <div className="title">{title}</div>
        <div className="sub-title">{description}</div>
        <div className="price">price : {price}</div>
        <div className={isOutOfStock? 'out-stock':'in-stock'} >{isOutOfStock ? 'Out of stock': 'in stock'}</div>
    </div>    
    </>
}


// export default function Product(props) {
//     console.log(props)
//     return <>
//     <div className="card">
//         <div className="image">
//             <img src={props.image} alt="" />
//         </div>
//         <div className="title">{props.title}</div>
//         <div className="sub-title">{props.description}</div>
//         <div className="price">price : {props.price}</div>
//     </div>    
//     </>
// }

// export default function Product(props) {
//     console.log(props)
//     return <>
//     <div className="card">
//         <div className="image">
//             <img src="https://m.media-amazon.com/images/I/314vDcsDB8L._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
//         </div>
//         <div className="title">Cross Bailey Light Glossy Black Resin Ballpoint Pen</div>
//         <div className="sub-title">Cross Bailey Light Glossy Black Resin Ballpoint Pen</div>
//         <div className="price">price : 199</div>
//     </div>
    
//     </>
// }


