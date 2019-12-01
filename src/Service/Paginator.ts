import IPaginatable from "../model/Paginatable"

export type GetterFunction = (iterator: number) => Promise<IPaginatable<any>>

export default class Paginator {

    async getList<Result>(page: number, limit: number, getter: GetterFunction): Promise<IPaginatable<Result>> {
        let skip = (page - 1) * limit
        let iterator = Math.floor(skip / 20) + 1
        skip -= (iterator - 1) * 20

        let items: Result[] = []
        let total_pages: number = 0
        let total_results: number = 0

        while (items.length < limit) {
            const fetchItems = await getter(iterator)
            total_results = fetchItems.total_results
            total_pages = Math.floor(total_results / limit)
            if (fetchItems.results == undefined) { break } 
            for (let i=skip;i<fetchItems.results.length;i++) {
                if (items.length >= limit) break 
                items.push(fetchItems.results[i])
                skip--;
            }
            iterator++
        }

        return {
            page: page,
            total_results,
            total_pages,
            results: items
        }
    }   
}