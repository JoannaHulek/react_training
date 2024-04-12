import ListGroup from "./components/ListGroup.tsx";

function App(){
    let items= ['Tenczynek', 'Kaków', 'Nowy Jork']

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