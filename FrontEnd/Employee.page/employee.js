// Employees Management JavaScript

$(document).ready(function() {
    // Initialize DataTable
    initEmployeesTable();
    
    // Load Employees Data
    loadEmployees();
    
    // Bind form events
    bindFormEvents();
});

function initEmployeesTable() {
    $('#employeesTable').DataTable({
        pageLength: 10,
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        language: {
            search: "Search employees:",
            lengthMenu: "Show _MENU_ entries",
            info: "Showing _START_ to _END_ of _TOTAL_ employees",
            infoEmpty: "Showing 0 to 0 of 0 employees",
            infoFiltered: "(filtered from _MAX_ total employees)"
        },
        columnDefs: [
            { orderable: false, targets: [1, 9] } // Disable sorting on photo and actions columns
        ]
    });
}

function loadEmployees() {
    // Simulate loading employees from API
    showLoading();
    
    // In a real application, this would be an AJAX call
    setTimeout(function() {
        hideLoading();
        // Data is already in the HTML table
        console.log('Employees loaded successfully');
    }, 1000);
}

function showLoading() {
    $('#employeesTable').before('<div class="text-center"><div class="spinner"></div><p>Loading employees...</p></div>');
}

function hideLoading() {
    $('.text-center:has(.spinner)').remove();
}

function bindFormEvents() {
    // Add Employee Form Submit
    $('#addEmployeeForm').on('submit', function(e) {
        e.preventDefault();
        saveEmployee();
    });
    
    // Search functionality
    $('#searchEmployee').on('keyup', function() {
        $('#employeesTable').DataTable().search($(this).val()).draw();
    });
    
    // Delete button click
    $(document).on('click', '.delete-employee', function() {
        const employeeId = $(this).data('id');
        deleteEmployee(employeeId);
    });
    
    // Edit button click
    $(document).on('click', '.edit-employee', function() {
        const employeeId = $(this).data('id');
        editEmployee(employeeId);
    });
    
    // View button click
    $(document).on('click', '.view-employee', function() {
        const employeeId = $(this).data('id');
        viewEmployee(employeeId);
    });
}

function saveEmployee() {
    // Validate form
    if (!validateEmployeeForm()) {
        return;
    }
    
    // Get form data
    const employeeData = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        department: $('#department').val(),
        position: $('#position').val(),
        joinDate: $('#joinDate').val(),
        salary: $('#salary').val(),
        address: $('#address').val()
    };
    
    // In a real application, this would be an AJAX POST request
    console.log('Saving employee:', employeeData);
    
    // Show success message
    showNotification('Employee saved successfully!', 'success');
    
    // Close modal
    $('#addEmployeeModal').modal('hide');
    
    // Reset form
    $('#addEmployeeForm')[0].reset();
    
    // Refresh table (in real app, you'd reload data)
    setTimeout(function() {
        location.reload();
    }, 1500);
}

function validateEmployeeForm() {
    let isValid = true;
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'department', 'position', 'joinDate', 'salary'];
    
    requiredFields.forEach(function(field) {
        const value = $('#' + field).val();
        if (!value || value.trim() === '') {
            $('#' + field).addClass('is-invalid');
            isValid = false;
        } else {
            $('#' + field).removeClass('is-invalid');
        }
    });
    
    // Validate email format
    const email = $('#email').val();
    if (email && !isValidEmail(email)) {
        $('#email').addClass('is-invalid');
        isValid = false;
    }
    
    // Validate phone format
    const phone = $('#phone').val();
    if (phone && !isValidPhone(phone)) {
        $('#phone').addClass('is-invalid');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
}

function deleteEmployee(employeeId) {
    if (confirm