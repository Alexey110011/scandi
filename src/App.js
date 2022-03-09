import {AddProduct} from './addProduct';
import {useState} from 'react';
import {ProductList} from './productList'
import './App.css';
import {Routes,Route} from 'react-router-dom'
//import ModalDisclaimer from './Modal';


 

function App() {
  
  const [dvdList, setDvdList] = useState([])
  const[furnitureList, setFurnitureList] = useState([])
  const [booksList, setBooksList] = useState([]) 
  const onAddProd=(sku_dvd, nameOf_dvd, price_dvd, sku_furn, nameOf_furn, price_furn, sku_books, nameOf_books, price_books,size, height, width, length, weight)=> {
        
        const dvdList1 = [...dvdList,
        {sku_dvd,
        nameOf_dvd,
        price_dvd,
        size,
        id: Math.floor(Math.random()*100),
        isChecked:false,
        isChoised:false
      }
        ]
        setDvdList(dvdList1)
        
      const furnitureList1 = [...furnitureList,
        {sku_furn,
        nameOf_furn,
        price_furn,
        height,
        width,
        length, 
        id: Math.floor(Math.random()*100),
        isChecked:false,
        isChoised:false
      }
        ]
        setFurnitureList(furnitureList1)
      
          const booksList1 = [...booksList,
          {sku_books,
          nameOf_books,
          price_books,
          weight,
          id: Math.floor(Math.random()*100),
          isChecked:false, 
          }
          ]
            setBooksList(booksList1)
          } 


       const remove = () =>{
           
           const dvdList1 = dvdList.filter(
           product=>product.isChecked===false)
           setDvdList(dvdList1)
           
           const furnitureList1 = furnitureList.filter(
           product=>product.isChecked===false)
           setFurnitureList(furnitureList1)

           const booksList1 = booksList.filter(
           product=>product.isChecked===false)
           setBooksList(booksList1)
       } 

       const rate=(id,isChecked)=> {
         
        const dvdList1 = dvdList.map(product=>
        (product.id!==id)?
        product:
        {...product,isChecked}
        )
        setDvdList(dvdList1)

        const furnitureList1 = furnitureList.map(product=>
        (product.id!==id)?
        product:
        {...product,isChecked}
        )
        setFurnitureList(furnitureList1)

        const booksList1 = booksList.map(product=>
          (product.id!==id)?
          product:
          {...product,isChecked}
          )
          setBooksList(booksList1)
       }
      
  return (
    <div className="App">
    <Routes>
      <Route path="/add" element = {<AddProduct onAddProd={onAddProd}/>}></Route>
      <Route path="/" element = {
          <div id = "common">
              <ProductList dvdList = {dvdList} furnitureList = {furnitureList} booksList = {booksList} onRemove={remove} onRate = {rate}/>
        </div>}>
      </Route>
    </Routes>
     </div>
  );
}

export default App; 

