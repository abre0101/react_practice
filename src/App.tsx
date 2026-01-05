import './App.css'

function App() {
  return(
  <>
  <Comp1/>
  <Comp2/>
  
  </>
  )
}

function Comp1(){
const lower='text-lowercase';
const r='abre';
const ab=<h1 className={lower}>{r}</h1>;
return ab;
}

function Comp2() {
const rr=[
 {id:1,name:'abraham',role:'software_engineer'},
 {id:2,name:'bereket',role:'cs'},
]
return rr.map(function(rr){

  return (

  
  <li key ={rr.id} >{rr.name}</li>
  )

});
}
export default App
