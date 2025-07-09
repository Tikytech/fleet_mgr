/**
 * @typedef {Object} RequestData
 * @property {string} trip_date - The date and time of the trip (ISO string or date format).
 * @property {string} return_date - The date and time of return (ISO string or date format).
 * @property {number} no_of_passengers - The number of passengers for the request.
 * @property {string} purpose - The purpose of the vehicle request.
 * @property {string} type - The type of trip (e.g., "official", "personal").
 * @property {'Pending'|'Approved Pending Vehicle'|'Approved Vehicle Assigned'|'Rejected'|'Canceled'|'Completed'} status - The current status of the request.
 */

/**
 * @typedef {Object} RequestResponse
 * @property {string|number} id - Request ID
 * @property {string} trip_date - Trip date and time
 * @property {string} return_date - Return date and time
 * @property {number} no_of_passengers - Number of passengers
 * @property {string} purpose - Purpose of the request
 * @property {string} type - Type of trip
 * @property {string} status - Current status
 * @property {string} created_at - Creation timestamp
 * @property {string} updated_at - Last update timestamp
 * @property {Object} staff - Staff member making the request
 * @property {Object} [vehicleAssigned] - Assigned vehicle (if any)
 */

/**
 * @typedef {Object} RequestStore
 * @property {import('vue').Ref<RequestResponse[]>} requests - Array of all requests
 * @property {import('vue').Ref<RequestResponse[]>} staffRequests - Array of staff requests
 * @property {import('vue').Ref<boolean>} loading - Loading state
 * @property {import('vue').Ref<boolean>} isSuccessful - Success state
 * @property {Function} getAllRequests - Function to fetch all requests
 * @property {Function} getRequestById - Function to fetch request by ID
 * @property {Function} updateVehicleRequest - Function to update vehicle request
 * @property {Function} getAllClientRequests - Function to fetch client requests
 * @property {Function} getAllStaffRequests - Function to fetch staff requests
 * @property {Function} clientRequestVehicle - Function to create client request
 * @property {Function} getClientRequestById - Function to fetch client request by ID
 * @property {Function} editRequest - Function to edit request
 */

/**
 * @typedef {Function} EditRequestFunction
 * @param {RequestData} requestData - The request data to be edited
 * @param {string} id - The ID of the request to be edited
 * @returns {Promise<void>}
 */

/**
 * @typedef {Function} CreateRequestFunction
 * @param {RequestData} requestData - The request data to be created
 * @returns {Promise<void>}
 */

/**
 * @typedef {Function} GetRequestByIdFunction
 * @param {string|number} id - The ID of the request to fetch
 * @returns {Promise<RequestResponse>}
 */

/**
 * @typedef {Function} UpdateVehicleRequestFunction
 * @param {RequestData} requestData - The request data to be updated
 * @param {string|number} id - The ID of the request to be updated
 * @returns {Promise<void>}
 */

export {}
