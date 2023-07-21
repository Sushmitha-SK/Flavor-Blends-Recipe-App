import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RamenDiningIcon from '@mui/icons-material/RamenDining';

const Navbar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [click, setClick] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => setClick(!click);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (searchTerm.trim() !== '') {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
            setClick(false);
        } else {
            toast.error('Please enter the keyword');
        }
    };

    const handleCloseMenu = () => setClick(false);

    return (
        <header className="header-area">
            <div className="navbar-area">
                <nav className={`site-navbar ${click ? 'open' : ''}`}>
                    <div className='site-logo'>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <a className="site-logo" style={{ textDecoration: 'none' }}>
                                Flavor Blends <RamenDiningIcon />
                            </a>
                        </Link>
                    </div>

                    <div className="linsk flex">
                        <ul className={`nav-menu ${click ? 'open' : ''}`}>
                            <li>
                                <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleCloseMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/indian" className={location.pathname === '/indian' ? 'active' : ''} onClick={handleCloseMenu}>
                                    Indian
                                </Link>
                            </li>
                            <li>
                                <Link to="/italian" className={location.pathname === '/italian' ? 'active' : ''} onClick={handleCloseMenu}>
                                    Italian
                                </Link>
                            </li>
                            <li>
                                <Link to="/american" className={location.pathname === '/american' ? 'active' : ''} onClick={handleCloseMenu}>
                                    American
                                </Link>
                            </li>
                            <li>
                                <Link to="/thai" className={location.pathname === '/thai' ? 'active' : ''} onClick={handleCloseMenu}>
                                    Thai
                                </Link>
                            </li>
                        </ul>

                        <div className="searchmain">
                            <input
                                name="input"
                                className="input"
                                type="text"
                                placeholder="Search Recipes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="icon">
                                <SearchIcon onClick={handleSearch} />
                            </div>
                        </div>
                    </div>

                    <div className="nav-toggler" onClick={handleClick}>
                        <i className={`fa ${click ? 'fa-times' : 'fa-bars'}`} />

                    </div>
                </nav>
            </div>
            <ToastContainer
                position="top-center"
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Flip}
            />
        </header>
    );
};

export default Navbar;
