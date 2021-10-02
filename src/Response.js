import MyModal from "./myModal"

export default function Response( {resp, deleteCallback, updateCallback}) {
    
    function handleDelete() {
        deleteCallback(resp.id)
    }

    return (
        <tr>
            <td>{resp.name}</td>
            <td>{resp.dislike}</td>
            <td>{resp.starter}</td> 
            <td>{resp.icream}</td>
            <td><MyModal callbackMethod={updateCallback} callbackPrompt={"Edit"} resp={resp}/></td>
            <td><span className='icon' onClick={handleDelete}>&times;</span></td>
        </tr>
    )
}