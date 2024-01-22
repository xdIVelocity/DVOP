
import './App.css'

type MyType = number | null | undefined;
type user = {
  name: string;
  age: number;
  isAdult: boolean;
}
function App() {
const xy: MyType = 5;
const a: number = 5;
let b: number = 6;
const myUser: user = {  
  name: "Eda Bábr",
  age: 25,
  isAdult: true
}

  return (
    <>
      <p>Hello user{" " + myUser.name}</p>
    </>
  )
}

export default App
