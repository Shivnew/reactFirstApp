import {useState} from "react";
const DynamicSubmitProps = () => {


const[flag, setFlag] = useState(false)
const[userData, setUserData] = useState({
firstName :"",
lastName :"",
password : "",
confirmPassword :""
})

const inputHandler = (x: ChangeEvent<HTMLInputElement>, i:number) =>{

if(i ==1){
setUserData({...userData, firstName:x.target.value})


}

if(i ==2){
setUserData({...userData, lastName:x.target.value})
}

if(i ==3){
setUserData({...userData, password:x.target.value})
}

if(i ==4){
setUserData({...userData, confirmPassword:x.target.value})
}
setFlag(false)
}

const setFlagHandler = () => {
setFlag(true)
}

const returnHtml = () =>
{

return(
<div>

<label >FirstName : {userData.firstName}</label>
<label >Lastname : {userData.lastName}</label>
<label >Password : {userData.password}</label>
<label >ConfirmPassword : {userData.confirmPassword}</label>

</div>


)


}

return (
<>
<div>
<input type ="text" placeholder ="firstName" onChange = {( (e)=> inputHandler(e,1))} />
<input type ="text" placeholder ="lastName" onChange= {( (e)=> inputHandler(e,2))} />
<input type ="text" placeholder ="password" onChange= {( (e)=> inputHandler(e,3))} />
<input type ="text" placeholder ="confirm" onChange= {( (e)=> inputHandler(e,4))} />
</div>

<div>
<button type = "submit" onClick = {setFlag} >Submit</button>
</div>


{flag  && returnHtml()}
<div>

</div>

</>
)}

export default DynamicSubmitProps