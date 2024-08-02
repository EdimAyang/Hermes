import{ useEffect, useState } from 'react';
import "../pagination/pagination.css";


const Pagination = ({menuData}) => {
 const[menu,setMenu]=useState([]);
    useEffect(()=>{
        setMenu(menuData)
    },[pages])
    const[menuPerPage, setmenuPerPage]=useState(3);
    const[currentPage , setCurrentPage]=useState(1);
    const lastDataIndex= currentPage * menuPerPage;
    const firstDataIndex= lastDataIndex - menuPerPage;
    const totalNumberOfPages= Math.ceil(menu.length / menuPerPage);
    const pages=[...Array(totalNumberOfPages).keys()].slice(1)
    const visibleData = menu.slice(firstDataIndex,lastDataIndex)
    const handlePrevPage = ()=>{
        if(currentPage !== 1){
            setCurrentPage(currentPage -1)
        }
    }
    const handleNextPage = ()=>{
        if(currentPage !== menu.length){
            setCurrentPage(currentPage +1)
        }else{
            setCurrentPage(currentPage)
        }
    }
    console.log(pages);

  return (
    <>
    <select onClick={(e)=> setmenuPerPage(e.target.value)}>
        <option value="">{2}</option>
        <option value="">{1}</option>
    </select>
    <div className='pageinate' >
      <h1>pagination</h1>
      {visibleData.map((items)=> <ul key={items.id}><li key={items.id}>{items.title}</li></ul>)}
      <div className='controls' >
        <button onClick={handlePrevPage}>Prev</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
    </>
  )
}

export default Pagination
