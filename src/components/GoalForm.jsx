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
    dispatch(createGoal({ code,fonctionnalités,avis,notes,stock,description,prix }))
    setcode('')
    setfonctionnalités('')
    setnotes('')
    setavis('')
    setstock('')
    setdescription('')
    setprix('')
  }

  return (
   <section className='form'>
       <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h4>
              Ajouter produit
              <Link
                to="/"
                className="btn btn-danger btn-sm float-end"
              >
                Retour
              </Link>
            </h4>
          </div>
      <div className="card-body">
      <form onSubmit={onSubmit}>
        
        <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">code</div>
          <div className="col-sm-10">
              <div class="mb-2">
          <input
            type='text'
            name='code'
            id='code'
            value={code}
            onChange={(e) => setcode(e.target.value)}
          />
       </div>
            </div>
            </div>
            <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">prix</div>
          <div className="col-sm-10">
              <div class="mb-2">
          <input
            type='text'
            name='prix'
            id='prix'
            value={prix}
            onChange={(e) => setprix(e.target.value)}
          />
        </div>
            </div>
            </div>

            <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">descri</div>
          <div className="col-sm-10">
              <div class="mb-2">
          <input
            type='text'
            name='description'
            id='description'
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
       </div>
            </div>
            </div>

            <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">stock</div>
          <div className="col-sm-10">
              <div class="mb-2">
          <input
            type='text'
            name='stock'
            id='stock'
            value={stock}
            onChange={(e) => setstock(e.target.value)}
          />
       </div>
            </div>
            </div>
            <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">notes</div>
          <div className="col-sm-10">
              <div class="mb-2">
          <input
            type='text'
            name='notes'
            id='notes'
            value={notes}
            onChange={(e) => setnotes(e.target.value)}
          />
       </div>
            </div>
            </div>
            <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">avis</div>
          <div className="col-sm-10">
              <div class="mb-2">
          <input
            type='text'
            name='avis'
            id='avis'
            value={avis}
            onChange={(e) => setavis(e.target.value)}
          />
       </div>
            </div>
            </div>
            <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">fonction</div>
          <div className="col-sm-10">
              <div class="mb-2">
          <input
            type='text'
            name='fonctionnalités'
            id='fonctionnalités'
            value={fonctionnalités}
            onChange={(e) => setfonctionnalités(e.target.value)}
          />
        </div>
            </div>
            </div>
        {/*<div className='form-group'>
          <label htmlFor='text'>image</label>
          <input
            type='text'
            name='image'
            id='image'
            value={image}
            onChange={(e) => setimage(e.target.value)}
          />
  </div>*/}
        
      {/*  <br></br>
                <input type="file"
                  name="image"
                  placeholder="Enter Product image"
                  onChange={e => setimage(e.target.files[0])} />
                  <br></br>
<br></br>*/}
        
        <div className='form-group'>
        <h4>
        <div>
        
  <button className=' btn btn-primary  btn-block btn-lg ' type='submit' >Ajouter </button>
    </div>
		
						
			
				</h4>
         
        </div>
      </form>
      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoalForm
