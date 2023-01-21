import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'  className='logo'>E-COMMERCE</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn  btn-info' onClick={onLogout}>
              <FaSignOutAlt /> déconnecter
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login' className='btn  btn-info'>
                <FaSignInAlt /> Se connecter
              </Link>
            </li>
            <li>
              <Link to='/register' className='btn  btn-info'>
                <FaUser /> S’inscrire
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
