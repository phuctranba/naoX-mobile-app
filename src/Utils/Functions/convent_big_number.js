export function convertNumber(number) {

    let tail_type=['','N', 'Tr', 'Tỉ', 'N Tỉ'];
    let i=0;

    while (number>=1000){
        number/=1000;
        i++;
    }

    number=Math.round(number*100)/100;

    return number+` ${tail_type[i]}`;
}