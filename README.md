# react-controlled-inputs
Controlled react inputs with built-in formatting and auto-validations. Currently handles localized formatting for:
* numbers
* percentage
* currency

The inputs are set to behave more like Excel cells do. When an input is focused, it will initially select the entire range.

## TODOs
* **First priority**: Styling API (since the inputs are pretty blend right now and without even a class to hook css)
* Implement the ability to add validations to any input.
* Implement more UI knobs to play around with the inputs in the playground (`./www`)
* Add visual buttons on the right side of a number input (to mimic the actual `input type="text"`)
* Adapt the API and document the API to be more user-friendly (the API is still a wip)
* And more...

## Supported locales

For now, supported locales are:
* English
* French

If there is need for more, feel free to report an issue on the matter.

## Usage

Any prop passed to the input will be forwarded to the actual stock HTML input so you can refer to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input for possible attributes.

Possible locale props: `["EN", "FR"]`

Normal text input:
```js
import { Input } from 'react-controlled-inputs';

<Input value="myValue" locale="FR" onChange={myFunc()} />
```

Currency input:
```js
import { CurrencyInput } from 'react-controlled-inputs';

<CurrencyInput value="100" locale="EN" onChange={myFunc()} />
```

Percentage input:
```js
import { PercentageInput } from 'react-controlled-inputs';

<PercentageInput value="100" locale="FR" onChange={myFunc()} />
```
