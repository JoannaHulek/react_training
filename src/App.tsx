import {useState} from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import AboutMe from "./components/Bio";
import Message from "./components/Message";

function App(){
  const [alertVisable, setAlertVisable] = useState(false)

  return (<div>
    {Navbar()}
    {Message()}
    {alertVisable && <Alert onClose={()=>setAlertVisable(false)}>I TOLD YOU!</Alert>}
    <Button color='secondary' onClick={()=>setAlertVisable(true)}>DO NOT CLICK ME!</Button>
    {renderList()}
    <section id="bio">{AboutMe()}</section>
  </div>)
}

function renderList() {
  let items = ['Tenczynek', 'Kaków', 'Nowy Jork']

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  return <div>
    <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
    <ListGroup items={['red', 'green', 'blue']} heading='Colors' onSelectItem={handleSelectItem}/>
    <ListGroup items={[]} heading='empty lis' onSelectItem={handleSelectItem}/>
  </div>
}

export default App