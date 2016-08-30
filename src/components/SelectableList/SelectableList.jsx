import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';

import './SelectableList.scss';

/**
 * A component that lets the user choose from a list of values
 *
 * @prop {Any} active The value of the active item
 * @prop {Object[]} items The items { label, value } to select from
 * @prop {Function} onChange change callback
 */
export default class SelectableList extends PureComponent {
  static propTypes = {
    active: PropTypes.any,
    items: PropTypes.array,
    onChange: PropTypes.func,
  }

  render() {
    const { active, items, onChange } = this.props;

    return (
      <div className="selectable-list">
        <ul className="list-unstyled">
          {items.map(item => (
            <li key={item.value}>
              <button
                className={classNames({ active: active === item.value })}
                onClick={() => onChange && onChange(item.value)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}