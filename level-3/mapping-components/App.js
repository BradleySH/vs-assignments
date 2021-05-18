import React from "react"
import Product from "./component/Product"
import productsData from "./vschoolProducts"

function App() {
    const  productComponents = productsData.map(item => <Product key={item.id}/>)
  return (
    <div>
        {productComponents}
        
    </div>
  )
}

export default App