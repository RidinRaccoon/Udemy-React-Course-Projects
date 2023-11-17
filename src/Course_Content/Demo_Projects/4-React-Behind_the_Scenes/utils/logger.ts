/** Logs a message in the browser console
 * @param message - The message to be logged
 * @param level - The level of indentation [`default = 0`]
 * @param type - Log type [`default = 'component'`]
 */
export function log(
  message: string,
  level: number = 0,
  type: string = 'component',
) {
  let styling = 'padding: 0.15rem; background: #04406b; color: #fcfabd';

  if (type === 'other') 
  styling = 'padding: 0.15rem; background: #210957; color: #ede6b2';

  const indent = '- '.repeat(level);

  // eslint-disable-next-line no-console
  console.log(`%c${indent}${message}`, styling);
}
