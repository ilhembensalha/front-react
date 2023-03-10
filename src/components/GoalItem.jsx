import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/Produit/produitSlice'
import { Link } from 'react-router-dom';


function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div class="container">
  <div class="row">
  <div class="col"><img src={'http://localhost:5000/postImages/'+goal.image}  style ={{width:'200px',height:'180px'}} /></div>
  <div class="col">  
   <h2>{goal.code}</h2>
      <p>{goal.fonctionnalités}</p>
      <p>{goal.description}</p>
      <p>{goal.prix}</p>
      </div>
  </div>
  <div class="row">
    <div class="col">    <div>
      {localStorage.getItem('role') !='user'
									? <div> <button className='btn btn-primary m-2 ms-5 ' onClick={() => dispatch(deleteGoal(goal._id))} >
                  Supprimer
                </button>
               
                    <Link to={`Updateform/${goal._id}`} className='btn btn-primary ms-2'  onClick={() =>  {localStorage.setItem('produitid', goal._id)}}>
                  
                    Mettre à jour
                    </Link>
                    <Link to={`Details/${goal._id}`} className='btn btn-primary ms-2'  onClick={() =>  {localStorage.setItem('produitid', goal._id)}}>
                  
                    Details
                  </Link>
                    </div>
									:  <Link to={`Details/${goal._id}`} className='btn btn-primary  btn-block btn-lg '  onClick={() =>  {localStorage.setItem('produitid', goal._id)}}>
                  
                  Details
                </Link>}
     
      </div>
     </div>
    
  </div>
</div>
      

  
  
				
         
     
    </div>
  )
}

export default GoalItem
