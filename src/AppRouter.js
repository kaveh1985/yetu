import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <nav>
                <Link to="/burger">Burger</Link>
                <Link to="/sandwich">Sandwich</Link>
                <Link to="/pasta">Pasta</Link>
            </nav>
            <Routes>
                <Route path="/burger" element={<Burger />} />
                <Route path="/sandwich" element={<Sandwich />} />
                <Route path="/pasta" element={<Pasta />} />
            </Routes>
        </Router>
    );
}