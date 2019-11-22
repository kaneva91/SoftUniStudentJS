function getData(limit) {
    console.log(limit)
    return fetch('http://localhost:9999/api/origami')
        .then(res => res.json())
        .then(data =>{
            if(limit){
                return data.slice(0, 3)
            }
            return data
        })
        .catch(err =>
            console.log(err))
}

export default getData;