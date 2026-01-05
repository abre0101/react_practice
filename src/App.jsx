import './App.css'

function App() {
    function greeting(){
        return 'hello'
    }
  return (
    <>
      <h2>{greeting()}</h2>
      <Comp1 
      name="ABRE"
      age={23}
      role="software_engineer"
      greeting={greeting}
      />
      <Comp2 />
    </>
  )
}

function Comp1(props) {
  const lower = 'text-lowercase';
  const r = 'ABRE';
  const name = 'ABEL';
  return (
    <div>
      <h1 className={lower}>THE NAME OF THE PERSON IS CALLED {props.name} OR {r}</h1>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>
      <p>Greeting from function prop: {props.greeting()}</p>
    </div>
  );
}

function Comp2() {
  const rr = [
    { id: 1, name: 'abraham', role: 'software_engineer' },
    { id: 2, name: 'bereket', role: 'cs' },
  ]
  return rr.map(function(rr) {
    return (
      <li key={rr.id}>{rr.name} as the user role is {rr.role}</li>
    )
  });
}

export default App
