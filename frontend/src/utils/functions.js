/**
 * 
 * @param {string} text texte
 * @param {number | undefined} size nombre de lettre a affiche.
 * @returns 
 */
export function hiddenText(text = "",size){
    let newText = "";
    let textSize = size ?? text.length;
    let i = 0;
    while (i < textSize && i < text.length){
        newText += text[i];
        i++;
    }
    if(size && size < text.length){
        newText += "..."
    }
    return newText;
}
export function placeholer(width = 100,height = 100){
    return `https://placehold.jp/919191/ffffff/${width}x${height}.png?text=Basecamp`;
}
export function randomColor(a = 1){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},${a})`;
}
export function logDatas(data,title = ""){
    console.log(`===============${title}================`)
    console.log(data);
    console.log(`===============End ${title}============`)
}