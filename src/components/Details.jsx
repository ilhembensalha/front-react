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




  return (
    
    <section className='form'>   <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
         
            <h4>
            <img src={'http://localhost:5000/postImages/'+data.image}  style ={{width:'100px',height:'100px'}} />
             {'  '+data.code} 
              <Link
                to="/"
                className="btn btn-danger btn-sm float-end"
              >
                Retour
              </Link>
            </h4>
          </div>
          <div className="card-body">
     
      <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">code</div>
          <div className="col-sm-10">
              <div class="mb-2">
              {data.code}
        </div>
        
        </div>
        
        </div>

        <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">prix</div>
          <div className="col-sm-10">
              <div class="mb-2">
         {data.prix}
         
   
   </div>
   </div>
   </div>
        <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">descri</div>
          <div className="col-sm-10">
              <div class="mb-2">
        {data.description}
        
        </div>
        </div>
        </div>
        <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">stock</div>
          <div className="col-sm-10">
              <div class="mb-2">
       {data.stock}
       
       
       </div>
       </div>
       </div>
        <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">notes</div>
          <div className="col-sm-10">
              <div class="mb-2">
        {data.notes}
        
        </div>
        </div>
        </div>
        <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">avis</div>
          <div className="col-sm-10">
              <div class="mb-2">
        
         {data.avis}
         
          </div>
          </div>
        </div>
        <div className="form-group mb-3 row"> 
          <div className="col-sm-2 fw-bold">fonction</div>
          <div className="col-sm-10">
              <div class="mb-2">
         {data.fonctionnalités}
        
            </div>
            </div>
        </div>

  
        
      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoalForm
