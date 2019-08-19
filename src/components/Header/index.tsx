import './index.css'
import { Link } from 'inferno-router'

export default function Header() {
    return (
        <nav class="navbar" aria-label="main navigation">
            <div class="navbar-brand center">
                <Link to={'/'}>ENEM</Link>
            </div>
        </nav>
    );
}