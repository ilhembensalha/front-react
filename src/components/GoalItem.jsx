import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/Produit/produitSlice'
import { Link } from 'react-router-dom';


function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <h2>{goal.code}</h2>
      <p>{goal.image}</p>
      <p>{goal.fonctionnalités}</p>
      <p>{goal.avis}</p>
      <p>{goal.notes}</p>
      <p>{goal.stock}</p>
      <p>{goal.description}</p>
      <p>{goal.prix}</p>
      {

      }
      <div>
      {localStorage.getItem('role') !='user'
									? <div> <button className='btn btn-primary m-2' onClick={() => dispatch(deleteGoal(goal._id))} >
                  supprimer
                </button>
               
                    <Link to={`Updateform/${goal._id}`} className='btn btn-primary'  onClick={() =>  {localStorage.setItem('produitid', goal._id)}}>
                  
                    update
                    </Link>
                    </div>
									: ''}
     
      </div>
     
				
         
     
    </div>
  )
}

export default GoalItem
