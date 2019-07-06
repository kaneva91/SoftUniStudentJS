function solve(songsInput) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    songsInput.shift();
    
    let typeList = songsInput.pop(),
        songsOutput = [];

    songsInput.forEach(element => {
        let [currType, currName, currTime] = element.split('_');
        songsOutput.push(new Song(currType, currName, currTime));
    });

    if (typeList === 'all') {
        songsOutput.forEach(song => console.log(song.name));
    }
    else {
        songsOutput.filter(song => song.type === typeList)
            .forEach(song => console.log(song.name));
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);

