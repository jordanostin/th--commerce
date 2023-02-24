import axios from 'axios'

export const Register = () =>{

    const handleSubmit = (e) => {

        e.preventDefault();

        const formData = new FormData(e.target); 

        axios.post('http://localhost:9300/register', {
            email: formData.get('email'), 
            password: formData.get('password') 
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error); 
        });
        
    }

    return(
        <>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor='email'>Email</label>
                <input type='text' id='email' name='email' />

                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name='password' />

                <input type='submit' value='ok' />
            </form>
        </>
    );
}