// Departments Management JavaScript

$(document).ready(function () {
    console.log("Departments page loaded");
});

function showAssignModal(departmentName) {
    $('#selectedDept').text(departmentName);
    $('#assignEmployeeModal').modal('show');
}

function saveDepartment() {
    const deptName = $('#deptName').val();
    const manager = $('#manager').val();
    const location = $('#location').val();

    if (!deptName) {
        alert('Please enter department name');
        return;
    }

    // Simulate saving
    alert(`Department "${deptName}" saved successfully!`);
    $('#addDepartmentModal').modal('hide');
    $('#addDepartmentForm')[0].reset();

    // In real app, refresh department list
    location.reload();
}

function assignEmployee() {
    const employee = $('#employeeSelect').val();
    const department = $('#selectedDept').text();

    alert(`Employee "${employee}" assigned to ${department} department!`);
    $('#assignEmployeeModal').modal('hide');
    $('#assignForm')[0].reset();
}