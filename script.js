    const hari = new Map([
      ["1", "Senin"],
      ["2", "Selasa"],
      ["3", "Rabu"],
      ["4", "Kamis"],
      ["5", "Jumat"],
      ["6", "Sabtu"],
      ["0", "Ahad"]
    ])
    
    
    function startTime() {
      let today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      let dn = today.getDay().toString();
      m = checkTime(m);
      s = checkTime(s);
      let day = hari.forEach(function(value, key) {
        dayHari(value, key, dn)
      });
      document.getElementById('jam').innerHTML = h + ":" + m + ":" + s;
      setTimeout(startTime, 1000);
    }

    function checkTime(i) {
      if (i < 10) { i = "0" + i };
      return i;
    }
    
    function dayHari(value, key, dn) {
      let wkwk = value
      if (key == dn) {
        document.getElementById('tanggal').innerHTML = value.toString();
      }
    }