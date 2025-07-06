import React, { useRef } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaRegStar,
  FaCheckCircle,
   FaPhone
} from 'react-icons/fa';
import './ProductCarousel.css';

// Dữ liệu mẫu các sản phẩm
const products = [
  {
    img: 'image1.png',
    title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ],
    price: 499.0,
    oldPrice: 499.0,
    reviews: 4,
    inStock: true
  },
  {
    img: 'image2.png',
    title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ],
    price: 499.0,
    oldPrice: 499.0,
    reviews: 4,
    inStock: false
  },
  {
    img: 'image3.png',
    title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ],
    price: 499.0,
    oldPrice: 499.0,
    reviews: 4,
    inStock: true
  },
  {
    img: 'image4.png',
    title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ],
    price: 499.0,
    oldPrice: 499.0,
    reviews: 4,
    inStock: true
  },
    {
    img: 'image5.png',
    title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ],
    price: 499.0,
    oldPrice: 499.0,
    reviews: 4,
    inStock: true
  },
    {
    img: 'image6.png',
    title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ],
    price: 499.0,
    oldPrice: 499.0,
    reviews: 4,
    inStock: true
  }
];

export default function ProductCarousel() {
  const trackRef = useRef(null);
  const CARD_FULL_WIDTH = 16 * 16; // ~256px

  const scrollBy = (offset) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-container">
      <button className="nav-btn prev" onClick={() => scrollBy(-CARD_FULL_WIDTH)}>
        <FaChevronLeft />
      </button>

      <div className="carousel-track" ref={trackRef}>
        {products.map((p, i) => (
          <div className="card" key={i}>
            <div className="stock-label">
              {p.inStock ? (
                <>
                  <FaCheckCircle color="green" />
                  <span className="text-success">in stock</span>
                </>
              ) : (
                <>
                  <FaPhone color="red" />
                  <span className="text-danger" style={{ color: 'red' }}>check availability</span>
                </>
              )}
            </div>

            <img src={p.img} alt={p.title.join(' ')} />

            <div className="reviews">
              {[...Array(5)].map((_, idx) =>
                idx < p.reviews ? <FaStar key={idx} /> : <FaRegStar key={idx} />
              )}
              <span>({p.reviews})</span>
            </div>

            <h6 className="product-title">
              {p.title.map((line, idx) => (
                <span key={idx} className="title-line">{line}<br /></span>
              ))}
            </h6>

            <div className="price">
              <span className="old">${p.oldPrice.toFixed(2)}</span>
              <span className="current">${p.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="nav-btn next" onClick={() => scrollBy(CARD_FULL_WIDTH)}>
        <FaChevronRight />
      </button>
    </div>
  );
}
