import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormLogin } from '../components';
import { EquipmentPage } from '../pages/EquipmentPage';
import { FormEditEquip } from '../components/FormEditEquip';

export const AppRouter: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<FormLogin />} />
			<Route path="/storage" element={<EquipmentPage />} />
			<Route path='/edit/:id' element={<FormEditEquip />} />
		</Routes>
	</BrowserRouter>
);