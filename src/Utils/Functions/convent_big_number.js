export function convertNumberWithCharacters(number) {

    let tail_type=['','N', 'Tr', 'Tỉ', 'N Tỉ'];
    let i=0;

    while (number>=1000){
        number/=1000;
        i++;
    }

    number=Math.round(number*100)/100;

    return number+` ${tail_type[i]}`;
}

export function convertNumber(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
