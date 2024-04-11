import React,{useState} from 'react'
import PersonCard from './personCard'

const FormComponent = props => {

  // !var section

  // exemple test "people"
    const [people,setPeople]  = useState([])

// field
    const [firstname,setfirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

// add to people
    const addUser=(e)=>{
        e.preventDefault();
        const newUser = { firstname, lastname, email,password};
        setPeople([...people,newUser])
        setfirstname("")
        setConfirmPassword("")
        setEmail("")
        setPassword("")
        setLastname("")
    }
//! return section
    return (
    // big conatainer 
    <div style={{backgroundColor:"grey"}}>
      {/* work on form */}
        <form onSubmit={(e)=> addUser(e) }>
{/* first name */}
        <div>
            <label>First name </label>
            <input type='text' onChange={e => setfirstname(e.target.value)} value={firstname} />
            {
            firstname.length<2 && firstname.length !== 0? 
            <p> field must be at least 2 characters.</p>:
            <p></p>
            }
        </div>
{/* last name */}
        <div>
            <label>Last name </label>
            <input type='text' onChange={e => setLastname(e.target.value)} value={lastname} />
        
        {
            lastname.length<2 && lastname.length !== 0? 
            <p> field must be at least 2 characters.</p>:
            <p></p>
        }
            </div>
{/* email*/}
        <div>
            <label>Email Address: </label>
            <input type='text' onChange={e => setEmail(e.target.value)} value={email} />
        </div>
        {
            email.length<8 && email.length !== 0? 
            <p> field must be at least 8 characters.</p>:
            <p></p>
        }
{/*password*/}
        <div>
            <label>Password: </label>
            <input type='text' onChange={e => setPassword(e.target.value)} value={password} />
        </div>
        {
            password.length<8 && password.length !== 0? 
            <p> field must be at least 8 characters.</p>:
            <p></p>
        }
{/*pasword confirmation*/}
        <div>
            <label>Confirm Password: </label>
            <input type='text' onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />
        </div>
        {
            password !== confirmPassword? 
            <p> passwords don't match</p>:
            <p></p>
        }
{/* submit */}
        <input type='submit' value='Create User' />
        </form>
        {people.map((person, idx)=><PersonCard key={idx} person={person}></PersonCard>)}
    </div>
)
}

export default FormComponent