
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Row, Col, ListGroup, Badge } from 'react-bootstrap';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useGetProductDetailsBySlugQuery } from '../hooks/productHooks';
import { ApiError } from '../types/ApiError';
import { getError } from '../utils';
import Rating from '../components/Rating';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: product, isLoading, error } = useGetProductDetailsBySlugQuery(slug || '');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  if (isLoading) {
    return <LoadingBox />;
  }

  if (error) {
    return (
      <MessageBox variant="danger">
        {getError(error as unknown as ApiError)}
      </MessageBox>
    );
  }

  if (!product) {
    return <MessageBox variant="danger">Product Not Found</MessageBox>;
  }

  // Now, we can be sure that product is not undefined
  return (
    <>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <Row>
        <Col md={6}>
          <img className="large" src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>
            <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product!.CountInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className='d-grid'>
                <button about="primary">Add to Cart </button>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
}
