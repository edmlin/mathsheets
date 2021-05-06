function random(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function shuffle(array) 
{
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        [array[m],array[i]]=[array[i],array[m]];
    }
    return array;
}