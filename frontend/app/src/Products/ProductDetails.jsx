import SideBar from '../../components/SideBar'
import Content from '../../components/Contents'
import { useLocation, useParams } from 'react-router-dom';

function ProductDetails({link}) {
  const { state } = useLocation();
  const productId = state?.productId;
  return (
  <div className='w-full flex'>
    <SideBar  />
    <Content link={link} productId={productId}/>
  </div>
  )
}

export default ProductDetails