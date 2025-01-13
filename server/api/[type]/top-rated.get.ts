export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const {accessToken} = config

    const type = event.context.params?.type ?? 'movie' as 'movie' | 'tv'

    if (type === 'movie') {
        const movieUrl = "https://api.themoviedb.org/3/movie/top_rated"

        const movies = await $fetch(movieUrl, {
            method: 'get',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        })
        return {movies}
    }

    if (type === 'tv') {
        const seriesUrl = "https://api.themoviedb.org/3/tv/top_rated"
        const series = await $fetch(seriesUrl, {
            method: 'get',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        })

        return {
            series
        }
    }
})