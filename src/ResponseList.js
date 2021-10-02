import Response from './Response'

export default function ResponseList({ responses, deleteCallback, updateCallback }) {
    return (
        responses.map(resp => {
            return <Response key={resp.id} resp={resp} deleteCallback={deleteCallback} updateCallback={updateCallback}/>
        })
    )
}