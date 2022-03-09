import {Link} from 'react-router-dom'
import {useRef} from 'react'

export const ProductList = ({dvdList,furnitureList, booksList,onRemove=f=>f, onRate = f=>f}) => {
    
    return (
        <div>
            <div className = "header">
                <h2>Product List</h2>
                <div className = "buttons">
                <button><Link to="/add">ADD</Link></button>
                <button id = "delete-product-btn" onClick = {onRemove}>MASS DELETE</button>  
                </div>  
            </div>
           
            <div id = "dvd1">
                <div className = "dvd">            
                {dvdList.map(product=>
                     <Dvd key = {dvdList.id} {...product}
                     onRemove = {()=>onRemove(product.id)}
                     onRate = {(isChecked)=>onRate(product.id, isChecked)}/> 
                )}</div>
            </div>

            <div id = "furniture1">
                <div className = "dvd">
                {furnitureList.map(product=>
                    <Furniture key = {furnitureList.id} {...product}
                    onRemove = {onRemove}
                    onRate = {(isChecked)=>onRate(product.id, isChecked)}/>
               )}</div>
            </div>
                
            <div id= "books1">
                    <div className = "dvd">
                    {booksList.map(product=>
                    <Books key = {booksList.id} {...product}
                    onRemove = {onRemove}
                    onRate = {(isChecked)=>onRate(product.id, isChecked)}/>
                   )} </div> 
                </div>
                
            </div>
            ) 
}
        
    
const Dvd = ({sku_dvd, nameOf_dvd, price_dvd, size,onRate=f=>f })=>{
    const myRef = useRef();
    if(size){
return (
        <div className = "ramka">
            <span id = "red">DVD</span>
            <input type = "checkbox" className = "delete_checkbox" id="cdvd" ref = {myRef} onChange={()=>onRate(myRef.current.checked)}></input>
                <div>{sku_dvd} </div>
                <div>{nameOf_dvd}</div>
                <div>{price_dvd} $</div>
                <div>Size:{size} MB</div>
            </div>
        )
    }
  else {
     return null
    }
}

const Furniture = ({sku_furn, nameOf_furn, price_furn, height, width, length,onRate=f=>f}) => {
    const myRef = useRef();
    if(height||width||length) {
return (
        <div className = "ramka">
            <input type = "checkbox" className = "delete_checkbox" id ="cfurn" ref = {myRef} onChange={()=>onRate(myRef.current.checked)}></input>
            <span id = "blue">Furniture</span>
                <div>{sku_furn} </div>
                <div>{nameOf_furn}</div>
                <div>{price_furn} $</div>
                <div>Dimension:{height} x {width} x {length}</div>
            </div>
        )
    } else {
    return null
    }
}


const  Books = ({sku_books, nameOf_books, price_books, weight, onRate=f=>f}) => {
    const myRef = useRef();
    if (weight) {
   return (
        <div className = "ramka">
            <input type = "checkbox" className = "delete_checkbox" id="cbooks" ref = {myRef} onChange={()=>onRate(myRef.current.checked)}></input>
            <span id="green">Books</span>
                <div>{sku_books}</div>
                <div>{nameOf_books}</div>
                <div>{price_books} $</div>
                <div>Weight:{weight} KG</div>
            </div>
        )}
else {
    return null
    }
}
