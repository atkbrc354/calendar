document.addEventListener("DOMContentLoaded", function () {
    let calendarEl = document.getElementById("calendar");
    let timeslotsContainer = document.querySelector('.timeslots-container'); // Получаем контейнер для временных слотов

    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        locale: 'ru',
        headerToolbar: {
            left: "prev",
            center: "title",
            right: "next",
        },
        dateClick: function (info) {
            let windowWidth = window.innerWidth; 

                if (windowWidth <= 768) {
                    document.getElementById('calendar').style.display = 'none';
                }

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
        
            let scrollgridSyncTables = document.querySelectorAll('.fc-scrollgrid-sync-table');
            scrollgridSyncTables.forEach(function(table) {
                table.classList.add('active');
            });

            let date = new Date(info.dateStr);
            let options = { weekday: "long", month: "long", day: "numeric" };
            let formattedDate = date.toLocaleDateString("ru-RU", options);
            
            document.querySelector(".title-time").textContent = formattedDate;

            timeslotsContainer.style.display = 'block'; 

            const timeslotButtons = document.querySelectorAll('.timeslot__btn-time');


            timeslotButtons.forEach(function(btn) {
                btn.addEventListener('click', function() {

                    timeslotButtons.forEach(function(otherBtn) {
                        otherBtn.classList.remove('timeslot__btn-time--active');
                    });

                    let existingNextButton = document.querySelector('.next-button');
                    if (existingNextButton) {
                        existingNextButton.remove();
                    }


                    btn.classList.add('timeslot__btn-time--active');

                    let nextButton = document.createElement('button');
                    nextButton.innerText = 'Далее';
                    nextButton.classList.add('next-button');
                    
                    nextButton.addEventListener('click', function() {
                        window.location.href = 'email.html';
                    });

                    btn.parentElement.appendChild(nextButton);
                });
            });
        },
        showNonCurrentDates: false, 
    });
    calendar.render();
});