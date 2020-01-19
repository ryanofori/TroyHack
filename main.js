function saveData(){
                var data  = localStorage.getItem("date");
                var dates = data ? JSON.parse(data) : [];
                dates.push( Date.now() );
                localStorage.setItem("date", JSON.stringify(dates));  
                alert("Your data is stored");
            }