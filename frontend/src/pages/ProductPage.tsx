import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Row, Col } from 'react-bootstrap';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useGetProductDetailsBySlugQuery } from '../hooks/productHooks';
import { ApiError } from '../types/ApiError';
import { getError } from '../utils';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: product, isLoading, error } = useGetProductDetailsBySlugQuery(slug);

  return (
    <>
      {isLoading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{getError(error as unknown as ApiError)}</MessageBox>
      ) : !product ? (
        <MessageBox variant="danger">Product Not Found</MessageBox>
      ) : (
        <div>
          <Helmet>
            <title>{product.name}</title>
          </Helmet>
          <Row>
            <Col md={6}>
              <img className="large" src={product.image} alt={product.name} />
            </Col>
            <Col md={3}></Col>
            <Col md={3}></Col>
          </Row>
        
        </div>
      )}
    </>
  );
}
