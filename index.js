// Login Tracker Function - Lab Assignment

function createLoginTracker(userInfo) {
    let attemptCount = 0;
    let accountLocked = false;
    
    // Return an arrow function
    const login = (passwordAttempt) => {
        // If account is already locked
        if (accountLocked) {
            return "Account locked due to too many failed login attempts";
        }
        
        // Check if password matches
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            attemptCount++;
            
            // Check if max attempts reached
            if (attemptCount >= 3) {
                accountLocked = true;
                return "Account locked due to too many failed login attempts";
            }
            
            return `Login failed. Attempt ${attemptCount} of 3`;
        }
    };
    
    return login;
}

// Export for testing
module.exports = { createLoginTracker };