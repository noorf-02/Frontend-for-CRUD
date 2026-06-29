import React, { useEffect, useState } from 'react'


const url = "http://localhost:5000/products"
function ProductsComp() {
    const [ api,setApi ] = useState([]);
    const [ products, setProducts ] = useState([])
    const [ category, setCategory ] = useState('all');
   async function fetchApi (){
        const data = await fetch(url);
        const res = await data.json();
        console.log(res);
        setApi(res);
        setProducts(res);
        }

    useEffect(()=>{
        fetchApi();
    },[])

    function activeCategory(category){
        setCategory(category);
        if(category==="all"){
            setApi(products);
        }
        else{
            setApi(products.filter((p)=>p.category===category));
        }
    }





  return (
    <>
    <div className='wrapper flex justify-baseline gap-7 my-3'>
        <button className='text-white bg-black px-6 py-1 rounded-full hover:bg-[#202020] cursor-pointer' onClick={()=>activeCategory("all")}>All</button>
        <button className='text-white bg-black px-6 py-1 rounded-full hover:bg-[#202020] cursor-pointer' onClick={()=>activeCategory("Fruit")}>Fruits</button>
        <button className='text-white bg-black px-6 py-1 rounded-full hover:bg-[#202020] cursor-pointer' onClick={()=>activeCategory("Veggie")}>Vegetables</button>
    </div>

    <div className='products-container my-8'>
        <div className="wrapper flex flex-wrap justify-center gap-[35px]">
            {
                api.map((myProduct)=>{
                    console.log(myProduct);

                     return(
                    <div className='card w-[320px] border-[1px] p-12 rounded-3xl border-[#ffffff] shadow-2xl flex flex-col gap-3'>
                        <img src={myProduct.image} alt="" className='object-cover w-35 h-35 block mx-auto rounded-3xl'/>
                        <h1 className='text-2xl font-bold'>{myProduct.title}</h1>
                        <p className='text-gray-800'>{myProduct.description}</p>
                        <div className="category flex justify-between">
                            <p className='italic text-[13px]'>{myProduct.category}</p>
                            <p className='font-bold text-white bg-black rounded-2xl text-[15px] w-9 text-center'>{myProduct.price}</p>
                        </div>

                    </div>
                )
                })
                
            }
        </div>
    </div>
    </>
  )
}

export default ProductsComp
