export default function FormattedNumber(numberToFormat: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0,
    }).format(numberToFormat);
}