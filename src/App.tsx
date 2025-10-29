import { Toaster } from 'sonner';
import './index.css';
import AppRoutes from 'routes';

// import AppRoutes from '@/routes';

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster theme="dark" position="top-center" /> {/* 토스트 메세지 */}
    </>
  );
}

export default App;
