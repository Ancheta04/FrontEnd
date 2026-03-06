// Attendance Management JavaScript

$(document).ready(function () {
    console.log("Attendance page loaded");
    initializeCalendar();

    // Search functionality
    $('#searchEmployee').on('keyup', function () {
        const searchTerm = $(this).val().toLowerCase();

        $('.attendance-list .list-group-item').each(function () {
            const text = $(this).text().toLowerCase();
            if (text.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});

function initializeCalendar() {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
            },
            events: [
                {
                    title: 'John Doe - Present',
                    start: '2024-03-01',
                    color: '#1cc88a'
                },
                {
                    title: 'Jane Smith - Present',
                    start: '2024-03-01',
                    color: '#1cc88a'
                },
                {
                    title: 'Mike Johnson - Absent',
                    start: '2024-03-01',
                    color: '#e74a3b'
                },
                {
                    title: 'Team Meeting',
                    start: '2024-03-15',
                    color: '#4e73df'
                }
            ],
            dateClick: function (info) {
                $('#attendanceModal').modal('show');
                // Set the date in the modal
                $('input[type="date"]').val(info.dateStr);
            }
        });
        calendar.render();
    }
}

function saveAttendance() {
    const date = $('input[type="date"]').val();
    const employee = $('select').first().val();
    const status = $('input[name="status"]:checked').next().text();

    alert(`Attendance marked for ${employee} on ${date}: ${status}`);
    $('#attendanceModal').modal('hide');

    // In real app, refresh calendar
    location.reload();
}