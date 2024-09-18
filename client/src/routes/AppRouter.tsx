import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormLogin } from '../components';
import { EquipmentPage } from '../pages/EquipmentPage';
import { FormEditEquip } from '../components/FormEditEquip';
import { FormRegister } from '../components/FormRegister';
import { PublicRoutesConfig } from './PublicRoutes';
import { PrivateRoutesConfig } from './PrivateRoutes';
import { NotFoundPage } from '../pages/NotFoundPage';
import { FormPurchase } from '../components/FormPurchase';

export const AppRouter = () => (
	<BrowserRouter>
		<Routes>
			{/* Rutas publicas */}
			<Route element={<PublicRoutesConfig redirecTo="/storage" />}>
				<Route path="/" element={<FormLogin />} />
				<Route path="/register" element={<FormRegister />} />
			</Route>

			{/* Rutas privadas */}
			<Route element={<PrivateRoutesConfig redirecTo="/" />}>
				<Route path="/storage" element={<EquipmentPage />} />
				<Route path="/edit/:id" element={<FormEditEquip/>} />
				<Route path='/purchase/:id' element={<FormPurchase />} />
			</Route>

			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	</BrowserRouter>
);