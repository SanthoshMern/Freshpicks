import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import "./signedform.css";
 

function SignedForm() {

  const { register, formState: { errors }, handleSubmit , } = useForm();


  const onSubmit = async (data)  => {

    const formData = new FormData();
    formData.append('file', data.file[0]);

      console.log(data)
      try{
        const response = await axios.post("http://localhost:5000/", data);
        console.log(response)
      }
      catch (error) {
        console.error("error submitting form", error)
      }
  };

  return (
    <div className='wrapform'>
      <div className='wrapcontent'>
        <h2 style={{textAlign:"center" , padding:"10px"}}>INPUT DATA</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label style={{marginLeft:"100px" , fontSize:"30px"}}>ItemName :</label>
      <input type='text' style={{ width:"300px" ,borderRadius:"10px", marginBottom:"50px"}}
        {...register("ItemName", { required: true })} 
      />
      {errors.ItemName?.type === 'required' && <p role="alert">ItemName is required</p>}
      </div>

      <div>
      <label style={{marginLeft:"100px" , fontSize:"30px"}}>ItemQuantity :</label>
      <input type='text' style={{ width:"300px" ,borderRadius:"10px", marginBottom:"50px"}}
        {...register("ItemQuantity", { required: "Item Quantity Reqirred" })} 
      />
      {errors.ItemQuantity && <p role="alert">{errors.ItemQuantity?.message}</p>}
      </div>

      <div>
      <label style={{marginLeft:"100px" , fontSize:"30px"}}>Price :</label>
      <input type='text' style={{ width:"300px" ,borderRadius:"10px", marginBottom:"50px"}}
        {...register("Price", { required: "Price must be provided" })} 
      />
      {errors.Price && <p role="alert">{errors.Price?.message}</p>}
      </div>

      <div>
      <input style={{marginLeft:"100px" , fontSize:"20px", marginBottom:"10px"}} type="file"  {...register('file', { required: 'File is required' })}/>
      {errors.file && <p>{errors.file.message}</p>}
      </div>

      <div>
      <input style={{ padding:"10px" , borderRadius:"10px", marginLeft:"100px", marginBottom:"50px"}} type="submit" />
      </div>
    </form>
    </div>
    </div>
  );
}

export default SignedForm
