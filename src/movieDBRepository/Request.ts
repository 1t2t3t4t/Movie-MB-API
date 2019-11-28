import axios, { AxiosResponse } from 'axios'

export default class Request {

    private url: string = "https://api.themoviedb.org/3"
    private params: any = {}

    private readonly apiKey = "7f146e1e3f360d9c399905c6c78d5b5a"

    addPath(path: string): this {
        this.url += "/" + path 
        return this
    }

    setParams(params: any = {}): this {
        this.params = params
        params.api_key = this.apiKey
        return this
    }

    async get<T = any>(): Promise<T> {
        try {
            const res = await axios.get(this.url, { params: this.params })
            return res.data
        }
        catch (err) {
            return err
        }
    }
}