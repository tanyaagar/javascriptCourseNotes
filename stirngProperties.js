let movie = {
    'title' : "the rush hour",
    'director' : "jackie chan",
    'duration' : 120,
    'year' : 2022
}
getStringProperties(movie)

function getStringProperties(movie){
    for(let key in movie)
        if(typeof movie[key] === 'string')
            console.log(key , movie[key])
    
}