import { useLogout } from '../hooks/useLogout';
import { FiSearch, FiLogOut } from 'react-icons/fi'
import './css/header.css';

export default function Header() {
    const { handleLogout } = useLogout();

    return (
        <header className="header">
            <div className="container">
                <div className="logo">FormoTEX</div>
                <div className="search-bar">
                    <input
                        type="search"
                        placeholder="Buscar..."
                        className="search-input"
                    />
                    <FiSearch className="search-icon" />
                </div>
                <button type="submit" className="logout-btn">
                    <FiLogOut className="logout-icon" />
                    <span onClick={handleLogout}>Cerrar sesión</span>
                </button>
            </div>
        </header>
    );
}