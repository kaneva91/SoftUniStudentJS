function solve(input){
    let movies = [];

    input.forEach(element => {
        if(element.includes('addMovie')){
            let [command, ...name] = element.split(' ');
            name = name.join(' ');
            movies.push({name});
        }

        else if(element.includes('directedBy')){
           let [name, director] = element.split(' directedBy ');
            
          movies.forEach(movie => {
              if(movie.name === name){
                    movie['director'] = director;
              }
          });
        }

        else if(element.includes('onDate')){
            let [name, date] = element.split(' onDate ');
             
           movies.forEach(movie => {
               if(movie.name === name){
                     movie['date'] = date;
               }
           });
         }
       
    });
    
    movies.forEach(movie => {
        if(movie.name && movie.date && movie.director){
            console.log(JSON.stringify(movie));
        }
    });
}


solve(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);