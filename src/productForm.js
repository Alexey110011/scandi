import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import { getTTFB } from 'web-vitals';
let prodList =[]
let childs;

export const Books =(/*onAdd = f=>f*/)=> {
    /*let _weight;*/ let myRef = useRef(null)
       const onProd=()=> {
        
         console.log(100)
         //return weight
    }

    /*const submit =e=>{
    onAdd(_weight.value)
    }*/
    return (
        <p>
            Weight<input type = "text" name = "weigth" id = "weight" placeholder = "weigth" onChange = {onProd} ref = {myRef}></input>
        </p>
    )
        }


export const Add = ({onAddProd=f=>f, onAddFurniture=f=>f, onAddBooks = f=>f})=> {
     let _sku, _nameOf,_price, _sku_dvd, _nameOf_dvd, _price_dvd,_sku_furn, _nameOf_furn, _price_furn,_sku_books, _nameOf_books, _price_books, _size, _height, _width,_length, _weight;
     
    const [selecter, setSelecter] = useState()
    const skuRef = useRef()
    const nameOfRef = useRef(null)
    const priceRef = useRef(null)
    const switchRef = useRef(null)
    const DvdRef = useRef(null)
    const FurnRef = useRef(null)
    const BookRef = useRef(null)

              const check=()=>{
                  
         if(switchRef==="DVD") {
        _sku_dvd = _sku.value//skuRef.current.value
        _nameOf_dvd = _nameOf//nameOfRef.current.value
        _price_dvd = _price//priceRef.current.valu
       } else if (switchRef==="Furniture") {
        _sku_books = _sku//skuRef.current.value;
        _nameOf_books = _nameOf//nameOfRef.current.value
        _price_books = _price//priceRef.current.value
       } else if( switchRef==="Books"){
        _sku_books = _sku//skuRef.current.value;
        _nameOf_books = _nameOf//nameOfRef.current.value
       _price_books = _price//priceRef.current.value }
       }
    }
    /*const handleChange = (e)=> {
        (e.target.value ==="DVD")?(childs=<Dvd/>):(e.target.value==="Furniture")?(childs =<Furniture/>):(e.target.value==="Books")?(childs=<Books/>):(childs=null)
    setSelecter(childs)}*/
    const handleChange = (e)=> {
       if (e.target.value ==="DVD") {
        /*_sku_dvd = skuRef.current.value
        _nameOf_dvd = nameOfRef.current.value
        _price_dvd = priceRef.current.value*/
           DvdRef.current.style.visibility="visible";
           FurnRef.current.style.visibility="hidden";
           BookRef.current.style.visibility = "hidden"
           _sku_dvd =_sku.value
           _nameOf_dvd = _nameOf.value 
           _price_dvd = _price.value
           _sku_furn = null
           _nameOf_furn = null 
           _price_furn = null
           _sku_books = null
           _nameOf_books = null 
           _price_books = null
       } else 
        if (e.target.value ==="Furniture") {
            /*_sku_furn = skuRef.current.value
            _nameOf_furn = nameOfRef.current.value
            _price_furn = priceRef.current.value*/
            DvdRef.current.style.visibility="hidden";
            FurnRef.current.style.visibility="visible";
            BookRef.current.style.visibility = "hidden"
            _sku_furn =_sku.value
            _nameOf_furn = _nameOf.value 
            _price_furn = _price.value
            _sku_dvd = null
            _nameOf_dvd = null 
            _price_dvd = null
            _sku_books = null
            _nameOf_books = null 
            _price_books = null

        } else 
            if (e.target.value ==="Books") {
            /*_sku_books = skuRef.current.value;
            _nameOf_books = nameOfRef.current.value
            _price_books = priceRef.current.value */
            DvdRef.current.style.visibility="hidden";
            FurnRef.current.style.visibility="hidden";
            BookRef.current.style.visibility = "visible"
            _sku_books =_sku.value
            _nameOf_books = _nameOf.value 
            _price_books = _price.value
            _sku_dvd = null
            _nameOf_dvd = null 
            _price_dvd = null
            _sku_furn = null
            _nameOf_furn = null 
            _price_furn = null
        } else {
            /*if (e.target.value ==="DVD") */
                DvdRef.current.style.visibility="hidden";
                FurnRef.current.style.visibility="hidden";
                BookRef.current.style.visibility = "hidden"
        }
        console.log(_sku_dvd, _nameOf_dvd, _price_dvd)
    }
      
       const as = ()=> {
           console.log(_sku_dvd)
       } 
        /*:(e.target.value==="Furniture")?(FurnRef.current.style.visibility="visible"):(e.target.value==="Books")?(BookRef.current.style.visibility="visible"):(childs=null)}*/

    const submit =e=> {
        //check()
    onAddProd(/*_sku.value, _nameOf.value,_price.value,*/_sku_dvd,_nameOf_dvd, _price_dvd, _sku_furn,_nameOf_furn, _price_furn,_sku_books,_nameOf_books, _price_books,_size.value, _height.value, _width.value, _length.value, _weight.value)
    //onAddFurniture(_sku.value, _nameOf.value, _price.value, _height.value, _width.value, _length.value)/*if (switchRef.current.value ==="DVD") {*/
    //onAddBooks(_sku.value, _nameOf.value,_price.value,_weight.value)    
    /*_sku_dvd = _sku
        _nameOf_dvd = _nameOf
        _price_dvd = _price*/
    /*} else if(switchRef.current.value ==="Furniture") {
        _sku_furn = _sku
        _nameOf_furn = _nameOf
        _price_furn = _price 
    }  else if (switchRef.current.value ==="Books"){
        _sku_books = _sku;
        _nameOf_books = _nameOf
        _price_books = _price 
    } else {
        _sku_dvd = null
        _nameOf_dvd = null
        _price_dvd = null
        _sku_furn = null
        _nameOf_furn = null
        _price_furn = null
        _sku_books = null
        _nameOf_books = null
        _price_books = null
    }*/  /*if(switchRef==="DVD") {
        _sku_dvd = _sku.value//skuRef.current.value
        _nameOf_dvd = _nameOf.value//nameOfRef.current.value
        _price_dvd = _price.value//priceRef.current.valu
       } else if (switchRef==="Furniture") {
        _sku_books = _sku.value//skuRef.current.value;
        _nameOf_books = _nameOf.valuef//nameOfRef.current.value
        _price_books = _price.value//priceRef.current.value
       } else if( switchRef==="Books"){
        _sku_books = _sku.value//skuRef.current.value;
        _nameOf_books = _nameOf.value//nameOfRef.current.value
       _price_books = _price.value//priceRef.current.value }
       }*/
      as() 
    //console.log(switchRef.current.value/*,_sku_dvd.value)*/
}

    return (
        <div>
            <header id = "headAdd">
                <h2>Product Add</h2>
                <div className ="buttons1">
                    <button onClick ={submit}><Link to="/">SAVE</Link></button> 
                    <button className = "first"><Link to="/">CANCEL</Link></button>
                    </div>
            </header>
            <form id = "product_form" >
                <p>
                     SKU<input type="text" id = "sku" placeholder = "sku" ref = {input=>_sku=input}></input>
                </p>
                <p>
                     Name<input type="text" id = "name" placeholder = "name" ref={input=>_nameOf=input}></input>
                </p>
                <p>
                     Price($)<input type="text" id = "price" placeholder = "price($)" ref = {input=>_price=input}></input>
                </p>
                <p>Type Switcher
                    <select name ="productType" id = "productType" placeholder="Type Switcher" onChange = {handleChange} ref = {switchRef}>
                        <option value = "TypeSwitcher">Type Switcher</option>
                        <option value= "DVD">DVD</option>
                        <option value= "Furniture">Furniture</option>
                        <option value ="Books">Books</option>
                    </select>
                </p>
            <p id = "DVD" ref= {DvdRef}>
                <p>Please provide DVD size </p>
                <p> Size (MB)<input type = "text" id = "size" placeholder = "size" ref={input=>_size=input}></input></p>
            </p>
               
            <div id = "Furniture"  ref = {FurnRef}>
            <p>Please provide dimension inHxWxL format </p>
                <p>
                Height (CM)<input type = "text" id = "height" placeholder = "height"  ref ={input=> _height=input}></input>
                </p>
                <p>
                Width (CM)<input type = "text" id = "width" placeholder = "width" ref = {input=>_width = input} ></input>
                </p>
                <p>
                Length (CM)<input type = "text" id = "length" placeholder = "length" ref = {input=>_length = input} ></input>
                </p>            
            </div>
            
            <p id = "Books" ref = {BookRef}>
                <p>Please provide desired book's weight</p>
            Weight(KG)<input type = "text" id = "weight" placeholder = "weigth" ref = {input=>_weight= input}></input>
            </p>
            </form>
        </div>
        )
   }
    /*
    export const Dvd =()=> {
        //let _size
        return (
            <p>
                Size<input type = "text" name = "size" id = "size" placeholder = "size" ref={input=>size = input}></input>
            </p>
        )
            }

    export const Furniture =()=> {
        let _height,_width, _length
        return (
            <div>
                <p>
                    Height,CM<input type = "text" name = "height" id = "height" placeholder = "height"  ref ={ input=> _height = input}></input>
                </p>
                <p>
                Width,CM<input type = "text" name = "width" id = "width" placeholder = "width" ref = {input=>_width = input} ></input>
                </p>
                <p>
                Length,CM<input type = "text" name = "length" id = "length" placeholder = "length" input = {input=>_length = input} ></input>
                </p>            
            </div>
        )
            }

  
    const Button = ({children})=> {
        return (
            <div>{children}</div>
        )
    }
    */
    