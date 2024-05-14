export const exerciseOptions = { 
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }

};

export const youTubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url: string | URL | Request, options: RequestInit | undefined) => {
    const res = await fetch(url, options);
    const data = await res.json();
    return data
}