import instance from "./axios"
import { GenericStatusResponse } from "./types"

export interface Contact{
    name: string
    email: string,
    message: string
}

const contact = {
    async contactUs(request: Contact){
        const { data } = await instance.post<GenericStatusResponse>('/api/contact', request)
        return data
    }
}

export default contact;