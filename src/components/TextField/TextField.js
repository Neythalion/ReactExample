import React from 'react';
import cn from 'classnames';

import './TextField.css';

class TextField extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value || nextProps.error !== this.props.error
    }

    render() {
        const { labelText, value, error, onChange } = this.props;

        console.log(this.props);
        return (<div className={cn('text-field', { error })}>
            <label className='text-field-label'>
                <span>{labelText}</span>
                <input value={value} onChange={onChange}/>
            </label>
            {error && <span className='text-field-error'>{error}</span>}
        </div>);
    }
}

export default TextField;
