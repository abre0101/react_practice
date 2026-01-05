import './App.css'

function App() {
  return (
    <>
      <Comp1 name='abre' />
      <Comp2 />
    </>
  )
}

function Comp1(props) {
  const lower = 'text-lowercase';
  const r = 'abre';
  const ab = <h1 className={lower}>the nameof the person is called {props.name} or {r}</h1>;
  return ab;
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
