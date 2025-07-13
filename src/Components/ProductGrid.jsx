import React from 'react';
import {
  FaStar,
  FaRegStar,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';
import './ProductGrid.css';

// Dữ liệu mẫu cho hai nhóm sản phẩm
const categories = [
  {
    title: 'Custome Builds',
    bannerImg: 'image8.png',
    link: '#',
    products: [
      { img: 'image18.png', title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ], reviews: 4, price: 499, oldPrice: 499, inStock: true },
      { img: 'image17.png', title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ], reviews: 4, price: 499, oldPrice: 499, inStock: true },
      { img: 'image16.png', title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ], reviews: 4, price: 499, oldPrice: 499, inStock: true },
      { img: 'image15.png', title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ], reviews: 4, price: 499, oldPrice: 499, inStock: true },
      { img: 'image14.png', title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ], reviews: 4, price: 499, oldPrice: 499, inStock: true }
    ]
  },
  {
    title: 'MSI Laptops',
    bannerImg: 'image7.png',
    link: '#',
    products: [
      { img: 'image9.png',  title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ],reviews: 4, price: 499, oldPrice: 499, inStock: true },
      { img: 'image10.png',  title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ], reviews: 4, price: 499, oldPrice: 499, inStock: true },
      { img: 'image11.png',  title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ], reviews: 4, price: 499, oldPrice: 499, inStock: true },
      { img: 'image12.png',  title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ], reviews: 4, price: 499, oldPrice: 499, inStock: true },
      { img: 'image13.png', title: [
      'EX DISPLAY: MSI Pro 16',
      'Flex–036AU 15.6 MULTITOUCH',
      'All-In-One...'
    ], reviews: 4, price: 499, oldPrice: 499, inStock: true }
    ]
  }
];

export default function ProductGrid() {
  return (
    <div className="product-grid-container">
      {categories.map((cat, ci) => (
        <section className="category-section" key={ci}>
          <div className="product-grid">

            {/* Banner card cho mỗi nhóm sản phẩm */}
            <div
              className="banner-card"
              style={{ backgroundImage: `url(${cat.bannerImg})` }}
            >
              <div className="banner-content">
                <h2 className="category-title-custom">Custome</h2>
                <h2 className="category-title-builds">Builds</h2>

                <a href={cat.link} className="view-all-link">
                  See All Products
                </a>
              </div>
            </div>

            {/* Thẻ sản phẩm trong mỗi nhóm */}
            {cat.products.map((p, idx) => (
              <div className="product-card" key={idx}>
                {/* Nhãn trạng thái tồn kho */}
                <div className="stock-status">
                  {p.inStock
                    ? <><FaCheckCircle  color="green" /><span> in stock</span></>
                    : <><FaTimesCircle /><span> hết hàng</span></>}
                </div>

                {/* Hình ảnh sản phẩm */}
                <img src={p.img} alt={p.title} className="product-img" />

                {/* Đánh giá sao */}
                <div className="review-rating">
                  {[...Array(5)].map((_, i) =>
                    i < p.reviews
                      ? <FaStar  key={i}  />
                      : <FaRegStar key={i} />
                  )}
                  <span>({p.reviews})</span>
                </div>

                {/* Tên sản phẩm */}
               <h6 className="product-name">
                  {p.title.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </h6>


                {/* Giá sản phẩm */}
                <div className="product-price">
                  <span className="old-price">${p.oldPrice.toFixed(2)}</span>
                  <span className="current-price">${p.price.toFixed(2)}</span>
                </div>
              
              </div>
            ))}

          </div>
        </section>
      ))}
    </div>
  );
}
 