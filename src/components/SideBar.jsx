import image from '../assets/images/logo-eleanor-cars.jpg';
import { Route, Link, Routes } from "react-router-dom";
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import MovieList from './MovieList';
import ContentWrapper from './ContentWrapper';
import NotFound from './NotFound';
import SearchMovies from './SearchMovies';



function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link to="/" className='sidebar-brand d-flex align-items-center justify-content-center' >
                {/* <div className="d-flex align-items-center">
                    <img className="w-50" src={image} alt="Digital House"/>
                    <p class=" mt-3 ">Eleanor-cars</p>
                    </div> */}
                    <div className="align-items-center">
                    <img className="w-50" src={image} alt="Digital House"/>
                    <p class=" mt-0 ">Eleanor-cars</p>
                    </div>
                </Link>
                {/* <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a> */}

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                <Link to="/dash" className='nav-link' >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Eleanor-Cars</span>  
                </Link>

                    {/* <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></a> */}
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link to="/" className='nav-link collapsed'>
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Home</span>
                    </Link>
                    {/* <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a> */}
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                {/* <li className="nav-item">
                <Link className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span>
                </Link>
                </li> */}
                    {/* <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a> */}
                <li className="nav-item">
                <Link className="nav-link" to="/lala">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Productos</span>
                </Link>
                    {/* <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a> */}
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/generos">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Categorias</span></Link>
                    {/* <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a> */}
                </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Routes>
                <Route path='/'  element={<ContentWrapper />} />
                <Route path='/generos'  element={<GenresInDb />} />
                <Route path='/dash'  element={<ContentWrapper />} />
                <Route path='/lala'  element={<SearchMovies />} />
                <Route path='*'  element={< NotFound />} />
            </Routes>
            
        </>
    )
}
export default SideBar;