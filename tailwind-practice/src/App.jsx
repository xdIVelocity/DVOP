
import './App.css'
import NavItem from './components/NavItem'

function App() {


  return (
    <>
    <div>
    <div className='flex place-content-between container xl mx-auto'>
      <div>
        <img src="../logo 1.svg" alt="" />
      </div>
      <div className='flex items-center'>
        <NavItem>Home</NavItem>
        <NavItem>Features</NavItem>
        <NavItem>Reviews</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem>FAQ</NavItem>
        <NavItem>Contact</NavItem>
        <button className='bg-primary p-2 mx-8 my-auto rounded-sm flex'>
        <img className="mx-2" src="../Vector.svg" alt="" />
        <h4 className=''>Buy now</h4>
        </button>
      </div>
    </div>

    {/* Hero */}

    <div className='flex my-14'>
      <div>
        <h1 className='text-3xl font-bold'>Powering 30,000+ Businesses like you in Australia</h1>
        <p>Get more than just a payment gateway. No setup fee. No maintenance fee. Use it the way you want!</p>
        <div>
          <input type="text" name="" id="" placeholder='Email Address Here' />
          <button>Sign up now</button>
        </div>
      </div>
      <img src="../public/undraw_team_collaboration_re_ow29 1.svg" alt="" />
    </div>
    </div>
    </>
  )
}

export default App
