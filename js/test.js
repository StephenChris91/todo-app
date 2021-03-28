const getIp = fetch('https://freegeoip.app/json/')
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(err => err)