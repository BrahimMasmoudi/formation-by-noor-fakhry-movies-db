export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const type = event.context.params?.type ?? 'movie' as 'movie' | 'tv'
    const {accessToken} = config

    if (type === 'movie') {
        const movieUrl = "https://api.themoviedb.org/3/movie/now_playing"
        const movies = await $fetch(movieUrl, {
            method: 'get',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            query: {
                include_adult: false,
                include_video: false,
                language: 'en-US',
                page: '1',
                sort_by: 'popularity.desc'
            }
        })

        return {
            movies
        }
    }

    if (type === 'tv') {
        const seriesUrl = "https://api.themoviedb.org/3/tv/airing_today"
        const series = await $fetch(seriesUrl, {
            method: 'get',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            query: {
                include_adult: false,
                include_video: false,
                language: 'en-US',
                page: '1',
                sort_by: 'popularity.desc'
            }
        })

        return {
            series
        }
    }
})