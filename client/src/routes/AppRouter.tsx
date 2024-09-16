import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormLogin } from '../components';
import { EquipmentPage } from '../pages/EquipmentPage';

export const AppRouter: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<FormLogin />} />
			<Route path="/storage" element={<EquipmentPage />} />
			<Route path='/edit/:id' element={<FormLogin />} />
		</Routes>
	</BrowserRouter>
);