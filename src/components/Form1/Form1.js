import React from 'react'
import { useForm } from 'react-hook-form'

const Form1 = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    const items = [
        "banana", 
        "apple", 
        "orange", 
        "pear", 
        "grape", 
        "berry"
      ];

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <input name="middleName" ref={register}/>
        <select name="gender" ref={register}>{
           items.map(item => <option value="male">
                {item}
            </option>
           )
        }
        </select>
        
        <input type="submit"/>
        </form>
    )
}

export default Form1
