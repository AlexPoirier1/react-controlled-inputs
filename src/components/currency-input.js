import NumberInput from './number-input';
import f from '../utils/formatter';
import { CURRENCY_INPUT_CLASSNAME } from '../utils/constants';

class CurrencyInput extends NumberInput {
    constructor(props) {
        super(props);
        this.formatter = new f(props.locale.toUpperCase());
    }

    format(value) {
        this.formatter.locale = this.props.locale.toUpperCase();
        return this.formatter.formatCurrency(value);
    }

    getInputClassName() {
        return CURRENCY_INPUT_CLASSNAME;
    }
}

export default CurrencyInput;
