import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title = 'Github Finder' }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-primary text-primary-content'>
      <div className='flex container mx-auto'>
        <div className='flex px-2 mx-2 items-center'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <div className='dropdown'>
              <div tabIndex={0} role='button' className='btn m-1'>
                Theme
                <svg
                  width='12px'
                  height='12px'
                  className='inline-block h-2 w-2 fill-current opacity-60'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 2048 2048'
                >
                  <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z'></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content bg-secondary text-secondary-content rounded-box z-1 w-32 p-2 shadow-2xl'
              >
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Default'
                    value='default'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Retro'
                    value='retro'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Cyberpunk'
                    value='cyberpunk'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Valentine'
                    value='valentine'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Silk'
                    value='silk'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Coffee'
                    value='coffee'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Forest'
                    value='forest'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Synthwave'
                    value='synthwave'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Aqua'
                    value='aqua'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Dracula'
                    value='dracula'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Nord'
                    value='nord'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Business'
                    value='business'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Sunset'
                    value='sunset'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Lemonade'
                    value='lemonade'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Caramellatte'
                    value='caramellatte'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Garden'
                    value='garden'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Halloween'
                    value='halloween'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Autumn'
                    value='autumn'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Night'
                    value='night'
                  />
                </li>
                <li>
                  <input
                    type='radio'
                    name='theme-dropdown'
                    className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
                    aria-label='Dark'
                    value='dark'
                  />
                </li>
              </ul>
            </div>
            <Link to='/' className='btn btn-ghost btn-lg rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-lg rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
