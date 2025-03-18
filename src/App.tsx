import { RouterProvider } from 'react-router-dom'
import router from './root/routes';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
