// API Service for communicating with BackEnd
const ApiService = {
    // Base URL of your BackEnd API - CHANGE THIS TO YOUR ACTUAL API URL
    baseUrl: 'http://localhost:51157/api', // From your BackEnd.csproj - port 51157

    // Helper method for making API calls
    async request(endpoint, method = 'GET', data = null) {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, options);

            if (!response.ok) {
                if (response.status === 401) {
                    // Unauthorized - redirect to login
                    window.location.href = '/Home/Login';
                    return null;
                }
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API call failed:', error);
            throw error;
        }
    },

    // Employee endpoints
    getEmployees() {
        return this.request('/employee'); // From your BackEnd controller
    },

    addEmployee(employee) {
        return this.request('/employee', 'POST', employee);
    },

    updateEmployee(id, employee) {
        return this.request(`/employee/${id}`, 'PUT', employee);
    },

    deleteEmployee(id) {
        return this.request(`/employee/${id}`, 'DELETE');
    },

    // Department endpoints (you'll need to create these in your BackEnd)
    getDepartments() {
        return this.request('/department');
    },

    addDepartment(department) {
        return this.request('/department', 'POST', department);
    },

    // Attendance endpoints
    getAttendance(date) {
        return this.request(`/attendance?date=${date}`);
    },

    markAttendance(attendance) {
        return this.request('/attendance', 'POST', attendance);
    }
};