console.log('====================================');
console.log("INDEX.JS RUNNING...");
console.log('====================================');

      const deg = 6;
        const hr = document.getElementById('hr');
        const min = document.getElementById('min');
        const sec = document.getElementById('sec');
        const date = document.getElementById('date')

        setInterval(()=>{

            let day = new Date();
            let hh = day.getHours() * 30 ;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
            min.style.transform = `rotateZ(${mm}deg)`;
            sec.style.transform = `rotateZ(${ss}deg)`;
            
            date.innerHTML = day.toDateString()
        })