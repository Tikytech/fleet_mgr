/**
 * @typedef {Object} TableHead
 * @property {string} title - The title to display in the table header
 * @property {string} [head] - Optional key identifier
 */

/**
 * @typedef {Object} TableAction
 * @property {string} link - The route name to navigate to
 * @property {string} param - The object property name to use as parameter
 */

/**
 * @typedef {Object} TableActions
 * @property {TableAction} [view] - View action configuration
 * @property {TableAction} [edit] - Edit action configuration
 * @property {TableAction} [delete] - Delete action configuration
 */

/**
 * @typedef {Object} TableBadge
 * @property {string} column - Object property name to have badge styling
 */

/**
 * @typedef {Object} TableNoResults
 * @property {string} [buttonText='Add'] - Text for the add button
 */

/**
 * @typedef {Function} GetStatusFunction
 * @param {string} status - The status value to evaluate
 * @returns {string} The badge type ('success', 'warning', 'danger', etc.)
 */

/**
 * @typedef {Object} TableComponentProps
 * @property {boolean} [loading=false] - Whether the table is in loading state
 * @property {TableHead[]} tableHead - Array of table header definitions
 * @property {Object[]} tableData - Array of data objects to display
 * @property {TableActions} [actions] - Action buttons configuration
 * @property {TableNoResults} [noResults] - No results display configuration
 * @property {TableBadge} [badge] - Badge styling configuration
 * @property {GetStatusFunction} [getStatus] - Function to determine badge type
 * @property {string[]} [exclude] - Array of property names to exclude from display
 * @property {boolean} [showAddButton=true] - Whether to show add button when no data
 */

/**
 * Example usage of actions object:
 * @example
 * const actions = {
 *   view: {
 *     link: 'VehicleRequestDetails',
 *     param: 'requestId',
 *   },
 *   edit: {
 *     link: 'EditVehicle',
 *     param: 'id',
 *   },
 *   delete: {
 *     link: 'DeleteVehicle',
 *     param: 'id',
 *   }
 * }
 */

/**
 * Example usage of badge object:
 * @example
 * const badge = {
 *   column: 'status' // Object property name to have badge
 * }
 */

export {}
