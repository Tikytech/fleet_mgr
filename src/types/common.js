/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success - Whether the API call was successful
 * @property {any} data - The response data
 * @property {string} [message] - Optional message from the API
 * @property {string} [error] - Optional error message
 */

/**
 * @typedef {Object} PaginationMeta
 * @property {number} current_page - Current page number
 * @property {number} last_page - Last page number
 * @property {number} per_page - Items per page
 * @property {number} total - Total number of items
 */

/**
 * @typedef {Object} PaginatedResponse
 * @property {any[]} data - Array of items
 * @property {PaginationMeta} meta - Pagination metadata
 */

/**
 * @typedef {Object} User
 * @property {string|number} id - User ID
 * @property {string} name - User's full name
 * @property {string} email - User's email address
 * @property {string} [avatar] - User's avatar URL
 * @property {string} [role] - User's role
 * @property {string} [department] - User's department
 * @property {string} [college] - User's college
 */

/**
 * @typedef {Object} Vehicle
 * @property {string|number} id - Vehicle ID
 * @property {string} plate_number - Vehicle plate number
 * @property {string} model - Vehicle model
 * @property {string} make - Vehicle make
 * @property {string} year - Vehicle year
 * @property {string} status - Vehicle status
 * @property {string} [driver] - Assigned driver
 * @property {string} [department] - Assigned department
 */

/**
 * @typedef {Object} Request
 * @property {string|number} id - Request ID
 * @property {User} staff - Staff member making the request
 * @property {string} purpose - Purpose of the request
 * @property {number} no_of_passengers - Number of passengers
 * @property {string} trip_date - Trip date
 * @property {string} vehicle_type - Type of vehicle requested
 * @property {string} status - Request status
 * @property {Vehicle} [vehicleAssigned] - Assigned vehicle
 * @property {string} created_at - Creation timestamp
 */

/**
 * @typedef {Object} FormField
 * @property {string} name - Field name
 * @property {string} label - Field label
 * @property {string} type - Field type (text, email, select, etc.)
 * @property {boolean} [required] - Whether field is required
 * @property {any} [defaultValue] - Default value
 * @property {string[]} [options] - Options for select fields
 * @property {string} [placeholder] - Placeholder text
 * @property {string} [validation] - Validation rules
 */

/**
 * @typedef {Object} ToastNotification
 * @property {string} id - Unique notification ID
 * @property {string} type - Notification type (success, error, warning, info)
 * @property {string} title - Notification title
 * @property {string} message - Notification message
 * @property {number} [duration] - Duration in milliseconds
 * @property {boolean} [dismissible] - Whether notification can be dismissed
 */

/**
 * @typedef {Object} SearchFilters
 * @property {string} [search] - Search query
 * @property {string} [status] - Filter by status
 * @property {string} [department] - Filter by department
 * @property {string} [college] - Filter by college
 * @property {string} [date_from] - Start date filter
 * @property {string} [date_to] - End date filter
 */

export {}
