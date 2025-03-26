import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: restaurant } = useGetRestaurantQuery()

  if (restaurant) {
    return (
      <>
        <Banner />
        <ProductsList menu={restaurant} background="salmao" />
      </>
    )
  }
  return <h4>Carregando</h4>
}
export default Home
