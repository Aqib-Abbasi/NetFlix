import './App.css';
import Card from './Component/Netflixcard';
import Sdata from './Sdata'
function App() {
  return (
    <>
    <h1 className="heading_style">List of Top 5 Netflix Series</h1>
    {
      Sdata.map((val)=>{
        return(
          <Card
            imgsrc={val.imgsrc}
            sname={val.sname}
            title={val.title}
            link={val.links}
          />

        )
      })
    } 
    </>
  );
}

export default App;
