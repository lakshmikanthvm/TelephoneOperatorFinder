# Telephone Operator Finder

Telephone Operator Router application that finds the cheapest operator to make calls to the dialed numbers from the list.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

## Installing

```bash
npm install
```

## Running

```bash
npm start
```

## Operators List

In operators.js file you can add any number of operators and cost for the prefix number.

```
operators.js

export const Operators = [
    {
        name: "A",
        rates : [
            { numberPrefix : '1', cost : 0.9 },
            { numberPrefix : '268', cost : 5.1 },
            { numberPrefix : '46', cost : 0.17 },
            { numberPrefix : '4620', cost : 0.0 },
            { numberPrefix : '468', cost : 0.15 },
            { numberPrefix : '4631', cost : 0.15 },
            { numberPrefix : '4673', cost : 0.9 },
            { numberPrefix : '46732', cost : 1.1 }
        ]

    },
    {
        name: "B",
        rates : [
            { numberPrefix : '1', cost : 0.92 },
            { numberPrefix : '44', cost : 0.5 },
            { numberPrefix : '46', cost : 0.2 },
            { numberPrefix : '467', cost : 1.0 },
            { numberPrefix : '48', cost : 1.2 }
        ]

    },
    {
        name: "C",
        rates : [
            { numberPrefix : '4620', cost : 1.0 },
            { numberPrefix : '468', cost : 0.23 },
            { numberPrefix : '4631', cost : 1.15 },
            { numberPrefix : '4673', cost : 0.01 },
            { numberPrefix : '46732', cost : 0.1 }
        ]

    }
];
```

## Authors

* **Lakshmikanth** - [Lakshmikanth](https://github.com/lakshmikanthvm)