document.addEventListener("DOMContentLoaded", function () {
    let calendarEl = document.getElementById("calendar");
    let timeslotsContainer = document.querySelector('.timeslots-container'); // Получаем контейнер для временных слотов

    // Инциализация календаря с нужной настройкой
    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        headerToolbar: {
            left: "prev",
            center: "title",
            right: "next",
        },
        dateClick: function (info) {

            let colHeader = document.querySelector('.fc-col-header');
            if(colHeader) {
                colHeader.classList.add('active');
            }

            let allDayNumbers = document.querySelectorAll('.fc-daygrid-day-number');
            allDayNumbers.forEach(function(dayNumber) {
                dayNumber.classList.remove('active');
            });

            let dayNumber = info.dayEl.querySelector('.fc-daygrid-day-number');
            if(dayNumber) {
                dayNumber.classList.add('active');
            }
        
            // Добавление класса 'active' ко всем найденным элементам '.fc-scrollgrid-sync-table'
            let scrollgridSyncTables = document.querySelectorAll('.fc-scrollgrid-sync-table');
            scrollgridSyncTables.forEach(function(table) {
                table.classList.add('active');
            });
            // Форматирование выбранной даты в желаемом формате и отображение в заголовке
            let date = new Date(info.dateStr);
            let options = { weekday: "long", month: "long", day: "numeric" };
            let formattedDate = date.toLocaleDateString("en-US", options);
            
            // Изменение текста заголовка
            document.querySelector(".title-time").textContent = formattedDate;

            // Показываем контейнер с временными слотами при клике на дату
            timeslotsContainer.style.display = 'block'; // Явно устанавливаем display значение

            const timeslotList = document.getElementById("timeslotList");

            
            // Очистка списка для удаления предыдущих временных слотов
            timeslotList.innerHTML = '';
            const timeslots = [
                "09:00", "09:30", "10:00", "10:30", 
                "11:00", "11:30", "12:00", "12:30", 
                "13:00", "13:30", "14:00",
            ];
            timeslots.forEach((time) => {
                let timeslotItem = document.createElement("li");
                timeslotItem.textContent = time;
                timeslotList.appendChild(timeslotItem);

                // Добавляем реакцию на клик по элементу списка
                timeslotItem.addEventListener("click", function() {
                    console.log("Выбрано время: " + time); // Или ваша собственная логика
                });
            });
        },
        showNonCurrentDates: false, // Скрывает даты другого месяца
    });
    calendar.render();
});