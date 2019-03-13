import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'arrow-closed': {
    border: [{ unit: 'string', value: 'solid' }, { unit: 'string', value: '#999' }],
    borderWidth: '0 2px 2px 0',
    display: 'inline-block',
    padding: [{ unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'px', value: 4 }],
    position: 'absolute',
    right: [{ unit: 'px', value: 10 }]
  },
  'arrow-open': {
    border: [{ unit: 'string', value: 'solid' }, { unit: 'string', value: '#999' }],
    borderWidth: '0 2px 2px 0',
    display: 'inline-block',
    padding: [{ unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'px', value: 4 }],
    position: 'absolute',
    right: [{ unit: 'px', value: 10 }]
  },
  'arrow-closed': {
    top: [{ unit: 'px', value: 10 }],
    transform: 'rotate(45deg)',
    WebkitTransform: 'rotate(45deg)'
  },
  'arrow-open': {
    top: [{ unit: 'px', value: 14 }],
    transform: 'rotate(-135deg)',
    WebkitTransform: 'rotate(-135deg)'
  },
  'Dropdown-root': {
    position: 'relative',
    width: [{ unit: 'px', value: 300 }]
  },
  'Dropdown-control': {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'white',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    borderRadius: '2px',
    boxSizing: 'border-box',
    color: '#333',
    cursor: 'default',
    outline: 'none',
    padding: [{ unit: 'px', value: 8 }, { unit: 'px', value: 52 }, { unit: 'px', value: 8 }, { unit: 'px', value: 10 }],
    transition: 'all 200ms ease'
  },
  'Dropdown-control:hover': {
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.06)' }]
  },
  'Dropdown-arrow': {
    borderColor: '#999 transparent transparent',
    borderStyle: 'solid',
    borderWidth: '5px 5px 0',
    content: '' '',
    display: 'block',
    height: [{ unit: 'px', value: 0 }],
    marginTop: [{ unit: 'string', value: '-ceil(2.5)' }],
    position: 'absolute',
    right: [{ unit: 'px', value: 10 }],
    top: [{ unit: 'px', value: 14 }],
    width: [{ unit: 'px', value: 0 }]
  },
  'is-open Dropdown-arrow': {
    borderColor: 'transparent transparent #999',
    borderWidth: '0 5px 5px'
  },
  'Dropdown-menu': {
    backgroundColor: 'white',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ccc' }],
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 1 }, { unit: 'px', value: 0 }, { unit: 'string', value: 'rgba(0, 0, 0, 0.06)' }],
    boxSizing: 'border-box',
    marginTop: [{ unit: 'px', value: -1 }],
    maxHeight: [{ unit: 'px', value: 200 }],
    overflowY: 'auto',
    position: 'absolute',
    top: [{ unit: '%V', value: 1 }],
    width: [{ unit: '%H', value: 1 }],
    zIndex: '1000',
    WebkitOverflowScrolling: 'touch'
  },
  'Dropdown-menu Dropdown-group>Dropdown-title': {
    padding: [{ unit: 'px', value: 8 }, { unit: 'px', value: 10 }, { unit: 'px', value: 8 }, { unit: 'px', value: 10 }],
    color: 'rgba(51, 51, 51, 1.2)',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  'Dropdown-option': {
    boxSizing: 'border-box',
    color: 'rgba(51, 51, 51, 0.8)',
    cursor: 'pointer',
    display: 'block',
    padding: [{ unit: 'px', value: 8 }, { unit: 'px', value: 10 }, { unit: 'px', value: 8 }, { unit: 'px', value: 10 }]
  },
  'Dropdown-option:last-child': {
    borderBottomRightRadius: '2px',
    borderBottomLeftRadius: '2px'
  },
  'Dropdown-option:hover': {
    backgroundColor: '#f2f9fc',
    color: '#333'
  },
  'Dropdown-optionis-selected': {
    backgroundColor: '#f2f9fc',
    color: '#333'
  },
  'Dropdown-noresults': {
    boxSizing: 'border-box',
    color: '#ccc',
    cursor: 'default',
    display: 'block',
    padding: [{ unit: 'px', value: 8 }, { unit: 'px', value: 10 }, { unit: 'px', value: 8 }, { unit: 'px', value: 10 }]
  }
});
