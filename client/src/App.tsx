import { Toaster } from 'sonner';
import { AppRouter } from './routes/AppRouter';
import './App.css';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <>
      <AuthProvider>
        <AppRouter />
        <Toaster position="bottom-right" />
      </AuthProvider>
    </>
  )
}

export default App
