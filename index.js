/**
 * Lab: JavaScript Functions - Login Tracker
 * 
 * This lab implements a secure login feature using closures and arrow functions.
 * Users have 3 attempts to login before their account is locked.
 */

/**
 * Step 1: Create the createLoginTracker function (Outer Function)
 * @param {Object} userInfo - Contains username and password
 * @returns {Function} - Returns an inner arrow function that handles login attempts
 */
function createLoginTracker(userInfo) {
    // Initialize login attempt counter
    let attemptCount = 0;
    
    // Define and return an inner arrow function
    const loginAttempt = (passwordAttempt) => {
        // Increment attempt count each time function is called
        attemptCount++;
        
        // Check if account is locked (more than 3 attempts)
        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }
        
        // Check if password matches
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            // Return failed message with attempt number
            return `Login failed. Attempt ${attemptCount} of 3`;
        }
    };
    
    // Return the inner function
    return loginAttempt;
}

/**
 * Step 2: Test the function with different scenarios
 */

// Test Case 1: Successful login within 3 attempts
console.log("=== Test Case 1: Successful Login ===");
const user1 = createLoginTracker({ username: "john_doe", password: "pass123" });
console.log(user1("wrong"));      // Login failed. Attempt 1 of 3
console.log(user1("pass123"));    // Login successful

// Test Case 2: Failed login - account locks after 3 attempts
console.log("\n=== Test Case 2: Account Lock After 3 Failures ===");
const user2 = createLoginTracker({ username: "jane_smith", password: "secure456" });
console.log(user2("wrong1"));     // Login failed. Attempt 1 of 3
console.log(user2("wrong2"));     // Login failed. Attempt 2 of 3
console.log(user2("wrong3"));     // Login failed. Attempt 3 of 3
console.log(user2("secure456"));  // Account locked due to too many failed login attempts

// Test Case 3: Login on third attempt
console.log("\n=== Test Case 3: Login on Last Attempt ===");
const user3 = createLoginTracker({ username: "bob_wilson", password: "letmein" });
console.log(user3("wrong"));      // Login failed. Attempt 1 of 3
console.log(user3("wrong2"));     // Login failed. Attempt 2 of 3
console.log(user3("letmein"));    // Login successful

// Test Case 4: Edge case - Attempt 4 even after successful login?
console.log("\n=== Test Case 4: New Instance Required ===");
const user4 = createLoginTracker({ username: "alice", password: "wonderland" });
console.log(user4("wonderland")); // Login successful
console.log(user4("wonderland")); // This will be attempt 2 (still works but should create new instance for fresh attempts)

// Export for testing (if using npm test)
module.exports = { createLoginTracker };