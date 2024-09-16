import { Toaster } from 'sonner'
import { AppRouter } from './routes/AppRouter'

function App() {

  return (
    <>
      <AppRouter/>
      <Toaster position="bottom-right" />
    </>
  )
}

export default App
