import { Helmet } from 'react-helmet'
import { Default } from './styled'


const HomePage: React.FC = () => {
    return <>
    <Helmet>

        <title>
            Главная - Marketplace
        </title>
    </Helmet>
  
    <h1>Главная -  Marketplase </h1>
    <Default />
    </>
}

export default HomePage