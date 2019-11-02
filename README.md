![logo](/image/desolelog.png)

Pretty console for debug

## Installation

```
npm install desole.log // It doesn't work yet
```

## Examples

```javascript
const desole = require("desole.log");

desole.log(42);
desole.log("Hello desole.log!);
desole.log([1, 2, 3]);
desole.log(() => {
    console.log("Hello desole.log!);
})
```

## Supported Data Types

-   undefined
-   Number
-   String
-   Boolean
-   Function
-   Date
-   Array
-   Set
-   WeakSet
-   Map
-   WeakMap
-   Int8Array
-   Uint8Array
-   Uint8ClapedArray
-   Int16Array
-   Uint16Array
-   Int32Array
-   Uint32Array
-   Float32Array
-   Float64Array

Comming Soon Data Types

-   Mongoose Document
-   Sequelize Document
-   etc...

## License

Desole is MIT licensed.
