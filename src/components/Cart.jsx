import './Cart.css';

// const formatPrice = new Intl.NumberFormat([], { style: 'currency', currency: 'USD' }).format;

const Cart = ({selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <h2>The cart is empty</h2>
      : selected.map(course => (
          <div className='course-cart' key={course.title}>
            {course.term} CS {course.number} {course.title} -- {course.meets}
          </div>
        ))
    }
  </div>
);

export default Cart;