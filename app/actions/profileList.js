import axios from 'axios'
import config from '../config'

const getProfileList = (objectId)=>{
    return{
        type: 'ALL_PROFILE_LIST',
        payload: axios({
            method: 'GET',
            url: `https://api.backendless.com/B7FA9FF7-D6D3-743C-FF64-7EB184083300/3ADDB1B9-3A6F-F368-FF94-47767E23AC00/data/profiles?where=objectId%20%3D%20'${objectId}'&loadRelations=higlights`
        })
    }
}

export {getProfileList}