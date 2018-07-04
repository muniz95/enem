import './index.css'
import { Link } from 'inferno-router'

export default function Header() {
  return (
    <nav aria-label="main navigation">
      <div class="brand">
        <Link to={'/'}>ENEM</Link>
      </div>
    </nav>
  );
}