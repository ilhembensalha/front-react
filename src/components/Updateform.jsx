import { set } from 'mongoose'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateproduit } from '../features/Produit/produitSlice'
import Dashboard from '../pages/Dashboard'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import axios from "axios";
import { getoneproduit,reset } from '../features/Produit/produitSlice'





function GoalForm  (){
  
  const [code, setcode] = useState('')
  const [image, setimage] = useState('')
  const [fonctionnalités, setfonctionnalités] = useState('')
  const [avis, setavis] = useState('')
  const [notes, setnotes] = useState('')
  const [stock, setstock] = useState('')
  const [description, setdescription] = useState('')
  const [prix, setprix] = useState('')

  var [produitvalue, setproduitvalue] = useState({
    code: "",
    image: "",
    fonctionnalités: "",
    avis: "",
    notes: "",
    stock: "",
    description: "",
    prix: "",
   
  });
  const handleInput = (e) => {
    e.preventDefault();
    setproduitvalue({ ...produitvalue, [e.target.name]: e.target.value });
  };



    const data = {
      code:produitvalue.code,
      image:produitvalue.image,
      fonctionnalités: produitvalue.fonctionnalités,
      avis:produitvalue.avis,
      notes:produitvalue.notes,
      stock: produitvalue.stock,
      description:produitvalue.description,
      prix:produitvalue.prix,
    };

  let history = useNavigate();
  const dispatch = useDispatch()
  const update = useDispatch()
  const navigate = useNavigate()
 /*const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
    
  )
  
  //const conge_id = this.props.match.params.id;

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    dispatch(getoneproduit(localStorage.getItem('produitid')))

    return () => {
      dispatch(reset())
      
    }
  }, [user, navigate, isError, message, dispatch])
  if (isLoading) {
    return <Spinner />
 }*/
 
 


  const API_URL = '/api/produit/'
  useEffect(() => {
		fetchConge();
	}, []);
  const fetchConge = () => {
  const token = localStorage.getItem('Bearer');
    const userId = localStorage.getItem('id');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      userId: `${userId}`,
    },
  }
  axios.get(API_URL+localStorage.getItem('produitid'),config).then((res) => {
    setproduitvalue({
      code:res.data.code,
      image:res.data.image,
      fonctionnalités: res.data.fonctionnalités,
      avis:res.data.avis,
      notes:res.data.notes,
      stock: res.data.stock,
      description:res.data.description,
      prix:res.data.prix,
    });
  console.log(res)
  if (res.status === 200 || res.status === 304)  {
    console.log('ok')
  
  }
  });
};




  const updateConge = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('Bearer');
    const userId = localStorage.getItem('id');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        userId: `${userId}`,
      },
    }
  

    const res = await axios.put(API_URL+localStorage.getItem('produitid'),data,config);
    console.log(res)
    if (res.status === 200) {
      console.log(res)
      history("/")
    } 
  };
 

  const onSubmit = (e) => {
    e.preventDefault()
    //history("/");
    dispatch(updateproduit(localStorage.getItem('produitid'),{code,image,fonctionnalités,avis,notes,stock,description,prix}))
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
    
    <section className='form'>   <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h4>
              modifier  produit
              <Link
                to="/"
                className="btn btn-danger btn-sm float-end"
              >
                Retour
              </Link>
            </h4>
          </div>
          <div className="card-body">
      <form onSubmit={updateConge}>
      <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">code</div>
          <div className="col-sm-10">
              <div class="mb-2">
          <input
            type='text'
            name='code'
            id='code'
            onChange={handleInput}
            value={data.code}
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
            onChange={handleInput}
            value={data.prix}
          />
   
   </div>
   </div>
   </div>
        <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">description</div>
          <div className="col-sm-10">
              <div class="mb-2">
          <input
            type='text'
            name='description'
            id='description'
            onChange={handleInput}
            value={data.description}
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
            onChange={handleInput}
            value={data.stock}
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
            onChange={handleInput}
            value={data.notes}
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
            onChange={handleInput}
            value={data.avis}
          />
          </div>
          </div>
        </div>
        <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">fonctionnalités</div>
          <div className="col-sm-10">
              <div class="mb-2">
          <input
            type='text'
            name='fonctionnalités'
            id='fonctionnalités'
            onChange={handleInput}
            value={data.fonctionnalités}
          />
            </div>
            </div>
        </div>
        <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">image</div>
          <div className="col-sm-10">
              <div class="mb-2">
          <input
            type='text'
            name='image'
            id='image'
            onChange={handleInput}
            value={data.image}
          />
        </div>
        </div>
        </div>
        
        
        <div className="form-group row">
          
  
            <button className='btn btn-primary  btn-block btn-lg ' type='submit' >Update </button>
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
