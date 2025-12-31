import { useState, type ChangeEvent } from "React";
import Child3 from "./Child3";

const Parent1 = () => {
  const [data, setData] = useState({
    firstName: "",
    password: "",
    confirmPassword: "",
  });

  const[flag, setFlag] = useState(false)

  const inputHandler = (e: ChangeEvent<HTMLInputElement>, n: number) => {
    if (n == 1) {
      setData({ ...data, firstName: e.target.value });
    }

    if (n == 2) {
      setData({ ...data, password: e.target.value });
    }

    if (n == 3) {
      setData({ ...data, confirmPassword: e.target.value });
    }
  };


const submitHandler =() =>{
setFlag(true)
}



  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="First Name"
          onChange={(x) => inputHandler(x, 1)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Password"
          onChange={(x) => inputHandler(x, 2)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Confrim Password"
          onChange={(x) => inputHandler(x, 3)}
        />
      </div>
      <div>
        <button type="submit" onClick={submitHandler}>Submit</button>
      </div>
      {
      flag?<Child3 data={data} /> :<></>
      }
      
    </div>
  );
};

export default Parent1;
