import { Row, Col } from 'react-bootstrap';
import { Product } from '../types/Product';
import React, { useEffect, useReducer } from 'react';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ProductItem from '../components/ProductItem';
import { Helmet } from 'react-helmet-async';

type State = {
  products: Product[]
  loading: boolean
  error: string
}

type Action =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; payload: Product[] }
  | { type: "FETCH_FAIL"; payload: string };
  
  const initialState: State = {
    products: [],
    loading: true,
    error: ""
  };
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function HomePage() {
  

  const [ { loading , error , products } , dispatch ] = useReducer <
   React.Reducer<State, Action>
  >(reducer, initialState)
  useEffect(()=>{
    const fetchData = async () =>{
      dispatch({ type: "FETCH_REQUEST"})
try{
  const result = await axios.get ("/api/products")
  dispatch ({type : "FETCH_SUCCESS", payload: result.data})
} catch (err){
  dispatch({type: "FETCH_FAIL", payload: getError( err as ApiError)})
}
    }
    fetchData()},[])

  return (
    loading ? (
      <LoadingBox />
    ) : error ? (
      <MessageBox variant="danger">{error} </MessageBox>
    ) : (
    <Row>
      <Helmet>
        <title> Mirona </title>
      </Helmet>
      {products.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
    )
  );
}
