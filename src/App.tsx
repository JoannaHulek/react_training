import {Fragment, useState} from "react";
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";



function App(){
    const [alertVisable, setAlertVisable] = useState(false)

    return (<>
        {alertVisable && <Alert onClose={()=>setAlertVisable(false)}>I TOLD YOU!</Alert>}
        <Button color='secondary' onClick={()=>setAlertVisable(true)}>DO NOT CLICK ME!</Button>
        {renderList()}
    </>)
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