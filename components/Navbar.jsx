import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='black'>
      <div className='nav-wrapper'>
        <div className='container'>
          <Link href='/'>
            <a className='brand-logo hide-on-med-and-down'>
              Next.js | <span className='red-text'>Socket.io</span>
            </a>
          </Link>
          <Link href='/'>
            <a className='hide-on-large-only'>
              Next.js | <span className='red-text'>Socket.io</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
