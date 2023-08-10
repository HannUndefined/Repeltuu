    const hari = new Map([
      ["1", "Senin"],
      ["2", "Selasa"],
      ["3", "Rabu"],
      ["4", "Kamis"],
      ["5", "Jumat"],
      ["6", "Sabtu"],
      ["0", "Ahad"]
    ])

    const bulan = new Map([
      ["0", "Januari"],
      ["1", "Februari"],
      ["2", "Maret"],
      ["3", "April"],
      ["4", "Mei"],
      ["5", "Juni"],
      ["6", "Juli"],
      ["7", "Agustus"],
      ["8", "September"],
      ["9", "Oktober"],
      ["10", "November"],
      ["11", "Desember"]
      ])

    function startTime() {
      let today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      let dt = today.getDate();
      let month = today.getMonth().toString();
      let year = today.getUTCFullYear();
      let dn = today.getDay().toString();
      m = checkTime(m);
      s = checkTime(s);
      
      if (document.getElementById('hari') != null) {
          hari.forEach(function(value, key) {
            dayHari(value, key, dn, dt, month, year)
          });
      }
      if (document.getElementById('tanggal') != null) {
        bulan.forEach(function(value, key) {
          monthBulan(value, key, dn, dt, month, year)
        })
      }
      document.getElementById('jam').innerHTML = h + ":" + m + ":" + s;
      setTimeout(startTime, 1000);
    }

    function checkTime(i) {
      if (i < 10) { i = "0" + i };
      return i;
    }

    function dayHari(value, key, dn, dt, month, year) {
      if (key == dn) {
        document.getElementById('hari').innerHTML = value.toString() + ', ';
      }
    }

    function monthBulan(value, key, dn, dt, month, year) {
      if (key == month) {
        document.getElementById('tanggal').innerHTML = `${dt}` + ' ' + value.toString() + ' ' + year;
      }
    }