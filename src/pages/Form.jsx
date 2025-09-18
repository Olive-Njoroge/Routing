import {useState} from 'react'
function Signup(){
    const [person, setPerson] = useState({email: "", name: "", password: ""});
    const [submitForm, setSubmitForm] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPerson(p => ({...p, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitForm(person);
        setPerson({email: "", name: "", password: ""});
    }

    return(
        <>
         <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Enter your email..." value={person.email} required onChange={handleChange}/><br></br><br></br>
                <input type="text" name="name" placeholder="Enter your name..." value={person.name} required onChange={handleChange}/><br></br><br></br>
                <input type="password" name="password" placeholder="Enter your password..." value={person.password} required onChange={handleChange}/><br></br><br></br>    
                <button type="submit">Submit</button>
            </form>

            {submitForm && (<div>
                <p>Email: {submitForm.email}</p>
                <p>Name: {submitForm.name}</p>
                </div>
            )}
         </div>
        </>
    )
    

}
export default Signup