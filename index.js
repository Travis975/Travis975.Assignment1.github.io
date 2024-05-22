// JSON data
const foodJSON = [
    {
        "id": 1,
        "name": "Apple",
        "category": "Fruits",
        "price": 0.5,
        "inStock": true,
        "description": "A crisp, sweet red apple.",
        "nutrition": {
            "calories": 52,
            "fat": 0.2,
            "carbohydrates": 14,
            "protein": 0.3
        }
    },
    {
        "id": 2,
        "name": "Banana",
        "category": "Fruits",
        "price": 0.3,
        "inStock": true,
        "description": "A ripe, yellow banana.",
        "nutrition": {
            "calories": 89,
            "fat": 0.3,
            "carbohydrates": 23,
            "protein": 1.1
        }
    },
    {
        "id": 3,
        "name": "Carrot",
        "category": "Vegetables",
        "price": 0.2,
        "inStock": true,
        "description": "A fresh, crunchy carrot.",
        "nutrition": {
            "calories": 41,
            "fat": 0.2,
            "carbohydrates": 10,
            "protein": 0.9
        }
    },
    {
        "id": 4,
        "name": "Bread",
        "category": "Bakery",
        "price": 2.5,
        "inStock": true,
        "description": "A loaf of freshly baked bread.",
        "nutrition": {
            "calories": 265,
            "fat": 3.2,
            "carbohydrates": 49,
            "protein": 9
        }
    }
];

// Function to create the table headers
function createTableHeaders() {
    const table = document.getElementById("food-table");
    const headerRow = table.querySelector("thead tr");
    headerRow.innerHTML = '';

    const headers = ["Name", "Price", "Description"];
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });
}

// Function to populate the table with data
function populateTable(data) {
    const table = document.getElementById("food-table").querySelector("tbody");
    table.innerHTML = ''; 

    data.forEach(item => {
        const row = document.createElement("tr");

        const cells = [item.name, formatMoney(item.price), item.description];
        cells.forEach(cellData => {
            const cell = document.createElement("td");
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        table.appendChild(row);
    });
}

// Initial table creation and population
document.addEventListener('DOMContentLoaded', () => {
    createTableHeaders();
    populateTable(foodJSON);
});

// Sort button handler
function handleSort() {
    // Sort the array by name
    foodJSON.sort((a, b) => a.name.localeCompare(b.name));
    
    // Repopulate the table after sorting
    populateTable(foodJSON);
}

// Make a function to format the price in the JSON data as money to display more clearly 
function formatMoney(numData) {
    return "$" + numData.toFixed(2);
}
