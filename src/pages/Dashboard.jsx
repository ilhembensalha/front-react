import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/Produit/produitSlice'
import { Link } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
     return <Spinner />
  }

  return (
    <>
      {/*<section className='heading'>
        <h1>Welcome {user && user.name}</h1>
  </section>*/}
     
     {localStorage.getItem('role') !='user'
									? <div> <h4>
                  <Link to={'GoalForm'} className='btn btn-primary  btn-block btn-lg'>
                    Ajouter un produit
                  </Link>
                </h4>
                    </div>
									: ''}
      

      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
