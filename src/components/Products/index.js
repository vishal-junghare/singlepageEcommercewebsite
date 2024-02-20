import PrimeDealSection from '../PrimeDealsSection'
import AllProductsSection from '../AllProductsSection'

import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <PrimeDealSection />
      <AllProductsSection />
    </div>
  </>
)

export default Products
