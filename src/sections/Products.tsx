"use client";

import {
  CardContainer,
  LoadingAndError,
  PaginationContainer,
  Section,
} from "./Products.styles";
import { useQuery } from "react-query";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ReactPaginate from "react-paginate";
import api from "@/api/api";

const fetchProducts = async () => {
  const response = await api.get("https://fakestoreapi.com/products?sort=desc");

  return response.data;
};

const itemsPerPage = 8;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const {
    data: products,
    isLoading,
    error,
  } = useQuery("products", fetchProducts);

  if (isLoading) {
    return <LoadingAndError>Carregando...</LoadingAndError>;
  }

  if (error) {
    return <LoadingAndError>Infelizmente ocorreu um erro :(</LoadingAndError>;
  }

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Section>
        <CardContainer>
          <ProductCard products={currentItems} />
        </CardContainer>
      </Section>

      <PaginationContainer>
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Próximo"}
          breakLabel={"..."}
          pageCount={Math.ceil(products.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(selectedPage) => setCurrentPage(selectedPage.selected)}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </PaginationContainer>
    </>
  );
};

export default Products;
