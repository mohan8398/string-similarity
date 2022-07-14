## npm
Install using:

```shell
npm install compare-strings --save
```

In your code:

```javascript
var compareStrings = require('compare-strings');
var similarity = compareStrings('healed', 'sealed');
```
## API

### compareStrings(string1, string2)

Returns a fraction between 0 and 1, which indicates the degree of similarity between the two strings. 0 indicates completely different strings, 1 indicates identical strings. The comparison is case-insensitive.

##### Arguments

1. string1 (string): The first string
2. string2 (string): The second string

Order does not make a difference.

##### Returns

(number): A fraction from 0 to 1, both inclusive. Higher number indicates more similarity
