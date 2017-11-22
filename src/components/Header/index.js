import './index.css'
import { Link } from 'inferno-router';

export default function Header() {
    return (
        <div>
            <header className="App-header">
            <Link to={'/'}>
                <h1>Quiz ENEM</h1>
            </Link>
            </header>
        </div>
    );
}