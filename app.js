    /** 
    var data = [
        {
            "name": "Smith",
            "sales": "234.50"
        },
        {
            "name": "Jones",
            "sales": "653.00"
        },
        {
            "name": "Smith",
            "sales": "704.75"
        },
        {
            "name": "Smith",
            "sales": "202.25"
        },
        {
            "name": "Jones",
            "sales": "430.85"
        },
        {
            "name": "Smith",
            "sales": "452.20"
        },
        {
            "name": "Jones",
            "sales": "902.15"
        },
        {
            "name": "Jones",
            "sales": "425.15"
        },
        {
            "name": "Smith",
            "sales": "650.00"
        },
        {
            "name": "Smith",
            "sales": "225.45"
        },
        {
            "name": "Smith",
            "sales": "194.55"
        },
        {
            "name": "Smith",
            "sales": "202.25"
        },
        {
            "name": "Jones",
            "sales": "420.85"
        }
    ]
    **/
    
    function createTable(data, options) {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        thead.appendChild(
            options
            .reduce((a, c) => {
                let th = document.createElement("th");
                th.innerText = c.name;
                a.appendChild(th);
                return a;
            }, document.createElement("tr"))
        );
        
        table.appendChild(thead);

        data.reduce((a, datum) => {
            a.appendChild(options.reduce((a, c) => {
                let td = document.createElement("td");
                td.innerText = c.getData(datum);
                a.appendChild(td);
                return a;
            }, document.createElement("tr")));
            return a;
        }, tbody);

        table.appendChild(tbody);
        return table;
    }
    
    createTable(
        data, 
        [
            {
                getData: item => item.name,
                name: "Name of Salesman"
            }, 
            {
                getData: item => item.sales,
                name: "Value of the sale"
            }
        ]
    )
