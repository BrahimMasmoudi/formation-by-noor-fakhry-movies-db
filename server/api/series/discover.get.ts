export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const {accessToken} = config

    const series = await $fetch('https://api.themoviedb.org/3/discover/tv', {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        query: {
            include_adult: false,
            include_null_first_air_dates: false,
            language: 'en-US',
            page: '1',
            sort_by: 'popularity.desc'
        }
    })

    return {
        series
    }

})