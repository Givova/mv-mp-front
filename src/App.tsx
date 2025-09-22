import  HomePage from 'pages/HomePage'
import PublicRoutes from 'routes/PublicRoutes'
import PrivateRoutes from 'routes/PrivateRoutes'
import { Suspense } from 'react'


export const App = () => {
    return (
        <Suspense fallback={'Loading...'}>
            <PublicRoutes />
            <PrivateRoutes />
        </Suspense>
    )
}

export default App