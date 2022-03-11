import {useRef,useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export const AddProduct = ({onAddProd=f=>f})=> {
    let _sku, _nameOf,_price, _sku_dvd, _nameOf_dvd, _price_dvd,_sku_furn, _nameOf_furn, _price_furn,_sku_books, _nameOf_books, _price_books, _size, _height, _width,_length, _weight;
    const switchRef = useRef(null)
    const DvdRef = useRef(null)
    const FurnRef = useRef(null)
    const BookRef = useRef(null)
    const skuRef = useRef(null)
    const nameRef = useRef(null)
    const priceRef = useRef(null)
    const sizeRef = useRef(null)   
    const heightRef = useRef(null)
    const widthRef = useRef(null)
    const lengthRef = useRef(null)
    const weightRef = useRef(null)
    const history = useNavigate()
    const [modalOpen, setModalOpen] = useState(false)

    if(switchRef==="DVD") {
        _sku_dvd = _sku.value
        _nameOf_dvd = _nameOf
        _price_dvd = _price
        } else if
    (switchRef==="Furniture") {
        _sku_books = _sku
        _nameOf_books = _nameOf
        _price_books = _price
    } else if(switchRef==="Books"){
        _sku_books = _sku
        _nameOf_books = _nameOf
        _price_books = _price
       }
       const warn = ()=> {
        setModalOpen(!modalOpen)
        }
    const closeWarn=() => {
        setModalOpen(false)
        }

    const handleChange = (e)=> {
       if (!skuRef.current.value||!nameRef.current.value||!priceRef.current.value) {
        (e.target.value='');
        warn() 
        }

       if (e.target.value ==="DVD") {
           DvdRef.current.style.visibility="visible";
           FurnRef.current.style.visibility="hidden";
           BookRef.current.style.visibility = "hidden"
           _sku_dvd =skuRef.current.value
           _nameOf_dvd = nameRef.current.value 
           _price_dvd = priceRef.current.value
           sizeRef.current.disabled = false
           heightRef.current.disabled=true
           lengthRef.current.disabled =true
           widthRef.current.disabled = true
           weightRef.current.disabled = true
           } else 
        if (e.target.value ==="Furniture") {
            DvdRef.current.style.visibility="hidden"
            FurnRef.current.style.visibility="visible"
            BookRef.current.style.visibility = "hidden"
            _sku_furn = skuRef.current.value
            _nameOf_furn = nameRef.current.value 
            _price_furn = priceRef.current.value
            heightRef.current.disabled=false
            lengthRef.current.disabled =false
            widthRef.current.disabled = false
            sizeRef.current.disabled =  true
            weightRef.current.disabled = true
        } else 
            if (e.target.value ==="Books") {
            DvdRef.current.style.visibility="hidden"
            FurnRef.current.style.visibility="hidden"
            BookRef.current.style.visibility = "visible"
            _sku_books =skuRef.current.value
            _nameOf_books = nameRef.current.value 
            _price_books = priceRef.current.value
            weightRef.current.disabled=false
            sizeRef.current.disabled = true
            heightRef.current.disabled=true
            lengthRef.current.disabled =true
            widthRef.current.disabled = true
        } else {
            DvdRef.current.style.visibility="hidden";
            FurnRef.current.style.visibility="hidden";
            BookRef.current.style.visibility = "hidden"
            heightRef.current.disabled=true
            lengthRef.current.disabled =true
            widthRef.current.disabled = true
            weightRef.current.disabled = true
            sizeRef.current.disabled = true
            widthRef.current.disabled = true
    } 
         }
       
    const submit =e=> {
        e.preventDefault()
        _size = sizeRef.current.value
        _height = heightRef.current.value
        _width = widthRef.current.value
        _length = lengthRef.current.value
        _weight = weightRef.current.value
       onAddProd(_sku_dvd,_nameOf_dvd, _price_dvd, _sku_furn,_nameOf_furn, _price_furn,_sku_books,_nameOf_books, _price_books,_size/*.value*/, _height, _width, _length, _weight)
       history("/")}
   
    return (
        <div>
            <header id = "headAdd">
                <h2>Product Add</h2>
                <div className ="buttons1">
                    <button className = "first"><Link to="/">CANCEL</Link></button>
                </div>
            </header>
            <form id = "product_form" name="form" onSubmit = {submit}>
            <button id ="save">SAVE</button> 
                <div id = "main">
                <p>
                 SKU<input type = "text" name="sku" id = "sku" placeholder = "value /number"  ref = {skuRef} required ></input>
                </p>
                <p>
                     Name<input type="text" name="name" id = "name" placeholder = "value /number" ref={nameRef} required></input>
                </p>
                <p>
                     Price($)<input type = "number" pattern = "[0-9]" step = "0.01" title = "Please. enter a number" name = "price" id = "price" placeholder = "number" ref = {priceRef} required></input>
                </p>
                <p>Type Switcher
                    <select name ="productType" id = "productType" placeholder="Type Switcher" onChange = {handleChange} ref = {switchRef}>
                        <option value = "TypeSwitcher" required></option>
                        <option value= "DVD">DVD</option>
                        <option value= "Furniture"required>Furniture</option>
                        <option value ="Books" required>Books</option>
                    </select>
                </p>
                
            <div id = "DVD" ref= {DvdRef}>
                <span className = "info">Please provide DVD size </span>
                <p> Size (MB)<input type = "number" step = "1" title = "Please, enter a number" name = "size" id = "size" placeholder = "number" ref ={sizeRef} required></input></p>
            </div>

            <div id = "Furniture"  ref = {FurnRef}>
            <span className = "info">Please provide dimension inHxWxL format </span>
                <p>
                Height (CM)<input type = "number" step = "0.01" pattern = "[0-9]" title = "Please. enter a number" name = "height" id = "height" placeholder = "number"  ref ={heightRef} required></input>
                </p>
                <p>
                Width (CM)<input type = "number" step = "0.01" title = "Please, enter a number" name = "width" id = "width" placeholder = "number" ref = {widthRef} required></input>
                </p>
                <p>
                Length (CM)<input type = "number" step = "0.01" title = "Please, enter a number" name = "length" id = "length" placeholder = "number" ref = {lengthRef} required  ></input>
                </p>            
            </div>
            
            <div id = "Books" ref = {BookRef}>
                <span className = "info">Please provide book's weight</span>
                <p>
            Weight(KG)<input type = "number" step = "0.01" title = "Please, enter a number" name = "weight" id = "weight" placeholder = "number" ref = {weightRef} required></input>
            </p>
            </div>
            </div>
           </form>
            <div className={modalOpen? "show":"hide"}>  
            <div>
            Please, provide SKU, name and price
            </div>
            <button id = "close" onClick = {closeWarn}>OK</button></div>
            </div>
        )
    }

