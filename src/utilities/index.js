import { find, propEq } from 'ramda';

export const findItemWithKeyValue = (arr, key, value) => find(propEq(key, value))(arr);
