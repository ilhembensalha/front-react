import { set } from 'mongoose'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/Produit/produitSlice'
import Dashboard from '../pages/Dashboard'
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";





function GoalForm({goal}) {
  const [code, setcode] = useState('')
  const [image, setimage] = useState('')
  const [fonctionnalités, setfonctionnalités] = useState('')
  const [avis, setavis] = useState('')
  const [notes, setnotes] = useState('')
  const [stock, setstock] = useState('')
  const [description, setdescription] = useState('')
  const [prix, setprix] = useState('')

  let history = useNavigate();

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    history("/");
    dispatch(createGoal({ code,image,fonctionnalités,avis,notes,stock,description,prix }))
    setcode('')
    setimage('')
    setfonctionnalités('')
    setnotes('')
    setavis('')
    setstock('')
    setdescription('')
    setprix('')
  }

  return (
    
    <section className='form'>
       <Link
                    to={"/"}
                    className="btnajouter"
                  >
                    Retour
                  </Link>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>code</label>
          <input
            type='text'
            name='code'
            id='code'
            value={code}
            onChange={(e) => setcode(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='text'>prix</label>
          <input
            type='text'
            name='prix'
            id='prix'
            value={prix}
            onChange={(e) => setprix(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>description</label>
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>stock</label>
          <input
            type='text'
            name='stock'
            id='stock'
            value={stock}
            onChange={(e) => setstock(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>notes</label>
          <input
            type='text'
            name='notes'
            id='notes'
            value={notes}
            onChange={(e) => setnotes(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>avis</label>
          <input
            type='text'
            name='avis'
            id='avis'
            value={avis}
            onChange={(e) => setavis(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>fonctionnalités</label>
          <input
            type='text'
            name='fonctionnalités'
            id='fonctionnalités'
            value={fonctionnalités}
            onChange={(e) => setfonctionnalités(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>image</label>
          <input
            type='text'
            name='image'
            id='image'
            value={image}
            onChange={(e) => setimage(e.target.value)}
          />
        </div>
        
        
        
        <div className='form-group'>
        <h4>
        <div>
        
  <button className='btn btn-block' type='submit' >Ajouter </button>
    </div>
		
						
			
				</h4>
         
        </div>
      </form>
    </section>
  )
}

export default GoalForm
