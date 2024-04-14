import {useState} from "react";
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";
import Navbar from "./components/Navbar.tsx";
import AboutMe from "./components/Bio.tsx";
import Message from "./components/Message.tsx";



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