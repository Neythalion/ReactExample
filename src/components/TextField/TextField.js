import React, { PureComponent } from 'react';
import cn from 'classnames';

import './TextField.css';

class TextField extends PureComponent {
    render() {
        const { labelText, value, error, onChange, name } = this.props;

        console.log(this.props);
        return (<div className={cn('text-field', { error })}>
            <label className='text-field-label'>
                <span>{labelText}</span>
                <input value={value} onChange={e => onChange(e.target.value, name)}/>
            </label>
            {error && <span className='text-field-error'>{error}</span>}
        </div>);
    }
}

export default TextField;
