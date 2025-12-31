interface IProps {
  data: {
    firstName: string;
    password: string;
    confirmPassword: string;
  }
}
const Child3 = (props:IProps) => {
  
  return <>
  <label>The first name is : {props.data.firstName}</label> <br />
  <label>Password is : {props.data.password}</label> <br />
  <label>confirm password is : {props.data.confirmPassword}</label><br />

  </>;
};

export default Child3;
