import Input from './input';
import f from '../utils/formatter';
import { NUMBER_INPUT_CLASSNAME } from '../utils/constants';

class NumberInput extends Input {
    constructor(props) {
        super(props);
        this.formatter = new f(props.locale.toUpperCase());
    }

    format(value) {
        this.formatter.locale = this.props.locale.toUpperCase();
        return this.formatter.formatNumber(value);
    }

    getInputClassName() {
        return NUMBER_INPUT_CLASSNAME;
    }
}

export default NumberInput;