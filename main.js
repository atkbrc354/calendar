document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    // Инициализируем календарь с нужной настройкой
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        showNonCurrentDates: false // Это скроет числа с другого месяца
    });
    calendar.render();

    // Создание списка доступных таймслотов
    const timeslots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00'];
    const timeslotList = document.getElementById('timeslotList');
    
    timeslots.forEach(time => {
        let timeslotItem = document.createElement('li');
        timeslotItem.textContent = time;
        timeslotList.appendChild(timeslotItem);
        
        // Добавление реакции на клик по элементу списка
        timeslotItem.addEventListener('click', function() {
            
        });
    });
});