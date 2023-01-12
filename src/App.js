import { useEffect, useState } from 'react';
import React from 'react';
import Pagination from './Pagination';
import Lista from './Lista';

const App = () => {

  const [showdata, setShowdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);


  useEffect(() => {
    const fetchProducts = async () => {
      const url = `https://reqres.in/api/products`
      try {
        fetch(url).then((response) => response.json()).then((data) => {
            setShowdata(data.data);
        });
      } catch (error) {
        return <alert severity="error">Coś poszło nie tak</alert>
      }
    };
    fetchProducts();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = showdata.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className='contain'>
      <div className='main-box'>
        <Lista currentProduct={currentProduct} />
        <Pagination productsPerPage={productsPerPage} totalProducts={showdata.length} paginate={paginate}/>
      </div>
    </div>
  );
};

export default App;