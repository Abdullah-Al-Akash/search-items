const products = [
        {
                name: 'Iphone 11 Plus',
                price: 111
        },
        {
                name: 'Samsung Note 14',
                price: 150
        },
        {
                name: 'Redmi Note 8 Pro',
                price: 111
        },
        {
                name: 'Realme 8',
                price: 111
        },
        {
                name: 'Macbook Plus Plus',
                price: 111
        },
        {
                name: 'Macbook Airdrop',
                price: 111
        },
        {
                name: 'Asus Tuf Gamming Fx-505GE',
                price: 111
        }
];

function searchItems(array, searchText) {
        const text = searchText.toLowerCase();
        const product = [];
        if (searchText.length == 0) {
                return "Please Write Something!";
        }
        for (let i = 0; i < array.length; i++) {
                if (array[i].name.toLowerCase().includes(text)) {
                        product.push(array[i]);
                }
        }
        if (product.length == 0) {
                return "There is no product you have Searched!";
        }
        return product;
}
console.log(searchItems(products, 'Macbook'));