      // constant named of  id functions.
      const hours = document.querySelector('#hours');
      const minutes = document.querySelector('#minutes');
      const seconds = document.querySelector('#seconds');

      const month = document.querySelector('#month');
      const day = document.querySelector('#day');
      const year = document.querySelector('#year');

      function setDate() {
          //"new Date"method to get current time
          const now = new Date();

          // current month, day, year 
          const mm = now.getMonth();
          const dd = now.getDate();
          const yyyy = now.getFullYear();

          //current sec, min, hours 
          const secs = now.getSeconds();
          const mins = now.getMinutes();
          const hrs = now.getHours();

          //constant named "monthName"
          const monthName = [
              'January', 'February', 'March', 'April',
              'May', 'June', 'July', 'August', 'September',
              'October', 'November', 'December'
          ];
          //display information 
          year.innerHTML = yyyy;
          month.innerHTML = monthName[mm];
          day.innerHTML = dd;

          //0 will add when the time is below 10
          if (hrs < 10) {
              hours.innerHTML = '0' + hrs + ':';
          } else {
              hours.innerHTML = hrs + ':';
          }
          if (mins < 10) {
              minutes.innerHTML = '0' + mins + ':';
          } else {
              minutes.innerHTML = mins + ':';
          }
          if (secs < 10) {
              seconds.innerHTML = '0' + secs;
          } else {
              seconds.innerHTML = secs;
          }

          // setting time AM or PM
          if (hrs < 13) {
              // hrs -= 12;
              document.querySelector('#ap').textContent = "AM";
          } else {
              document.querySelector('#ap').textContent = "PM";
          }
      }
      setInterval(setDate, 1000);