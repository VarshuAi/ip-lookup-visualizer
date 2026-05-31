
            window.lookupIp = function() {
                const ip = document.getElementById('ip-val').value;
                const res = document.getElementById('ip-res');
                res.innerHTML = JSON.stringify({
                    ip: ip,
                    country: "United States",
                    city: "Mountain View",
                    isp: "Google LLC",
                    lat: 37.422,
                    lon: -122.084
                }, null, 2);
            }
            lookupIp();
        