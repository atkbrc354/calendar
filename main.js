document.addEventListener("DOMContentLoaded", function () {
    let calendarEl = document.getElementById("calendar");
    let timeslotsContainer = document.querySelector('.timeslots-container'); // Получаем контейнер для временных слотов

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
        
            let scrollgridSyncTables = document.querySelectorAll('.fc-scrollgrid-sync-table');
            scrollgridSyncTables.forEach(function(table) {
                table.classList.add('active');
            });

            let date = new Date(info.dateStr);
            let options = { weekday: "long", month: "long", day: "numeric" };
            let formattedDate = date.toLocaleDateString("en-US", options);
            
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
                    nextButton.innerText = 'Next';
                    nextButton.classList.add('next-button');
                    
                    nextButton.addEventListener('click', function() {
                        console.log('Кнопка Next была нажата');
                    });

                    btn.parentElement.appendChild(nextButton);
                });
            });
        },
        showNonCurrentDates: false, 
    });
    calendar.render();
});