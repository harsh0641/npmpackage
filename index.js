import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_A7q5X86G7ipyNxHKIFj0QrgR4xxmhzPnzPfU3LGn');

export async function convertCurrency(fromCurrency, toCurrency, units) {
    try {
        const response = await freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        });
        
        const multiplier = response.data[toCurrency];
        console.log(multiplier*units);
    } catch (error) {
        console.error('Error converting currency:', error);
    }
}

// Example usage:
