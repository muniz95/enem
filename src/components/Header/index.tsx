import { Link } from 'inferno-router';
import './index.css';

export default function Header() {
  return (
    <nav class="navbar" aria-label="main navigation">
      <div class="navbar-brand center">
        <Link to={'/'}>ENEM</Link>
      </div>
    </nav>
  );
}
