export function findDuration (duration) {
    const minutes = Math.floor(duration/60000)
    let seconds = Math.floor((duration%60000)/1000)
    seconds<10 ? seconds= '0'+seconds : seconds=seconds
    return minutes + ':' + seconds
}