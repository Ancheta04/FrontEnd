$(document).ready(function () {
    // Initialize charts
    initAttendanceChart();
    initDepartmentChart();
});

function initAttendanceChart() {
    var ctx = document.getElementById('attendanceChart');
    if (!ctx) return;

    ctx = ctx.getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Present',
                data: [95, 98, 92, 96, 94, 85, 80],
                borderColor: '#1cc88a',
                backgroundColor: 'rgba(28, 200, 138, 0.1)',
                tension: 0.4,
                fill: true
            }, {
                label: 'Absent',
                data: [12, 8, 15, 10, 13, 22, 28],
                borderColor: '#e74a3b',
                backgroundColor: 'rgba(231, 74, 59, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });
}

function initDepartmentChart() {
    var ctx = document.getElementById('departmentChart');
    if (!ctx) return;

    ctx = ctx.getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['IT', 'HR', 'Finance', 'Marketing', 'Operations'],
            datasets: [{
                data: [35, 20, 25, 18, 26],
                backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            cutout: '60%'
        }
    });
}

function refreshDashboard() {
    // Show loading spinner
    $('.card').append('<div class="spinner-overlay"><div class="spinner"></div></div>');

    // Simulate API call
    setTimeout(function () {
        $('.spinner-overlay').remove();
        alert('Dashboard refreshed successfully!');
    }, 1500);
}