export const sortArray = <T>(array: Array<T>, sortBy?: string, direction: string = 'ascending') => {
  if (!sortBy) return array;

  return array.sort((a, b) => {
    const key = sortBy === 'company' ? 'company.name' : sortBy;

    const valueA = getValue(a, key);
    const valueB = getValue(b, key);

    if (valueA < valueB) return direction === 'descending' ? 1 : -1;
    if (valueA > valueB) return direction === 'ascending' ? 1 : -1;
    return 0;
  });
};

function getValue(obj: any, path: keyof any | string): any {
  if (typeof path === 'string') {
    const properties = path.split('.');
    let value = obj;
    for (const prop of properties) {
      value = value[prop];
    }
    return value;
  } else {
    return obj[path];
  }
}
