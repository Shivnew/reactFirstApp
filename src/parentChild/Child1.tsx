interface IProps {
  name: string
 age: string
 }


// const Child1: React.FC<IProps> = (props) => {
// const Child1 = (props: IProps) => {
// const { name} = props
//
// return(
// <>
// <label> {props.name}</label>
//
// </>
// )
//
//
//
// }


// const Child1 : React.FC<IProps>= ({ name, age} ) => {
//
// return(
// <>
// <label>Name: {name}</label> <br/>
// <label>Age: {age}</label>
//
// </>
// )
//
//
//
// }

const Child1 = ({name, age} ) => {

return(
<>
<label>Name: {name}</label> <br/>
<label>Age: {age}</label>

</>
)



}
export default Child1