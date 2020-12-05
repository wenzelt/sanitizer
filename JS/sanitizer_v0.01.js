        function squirt() {
            document.getElementById('nozzle').style.animation = "";
            document.getElementById('nozzle').style.animation = "MoveUpDown 1.0s ease-out 1";
            document.getElementById('droplet').style.animation = "drawArc 1.0s reverse ease-in 1";
            document.getElementById('droplet2').style.animation = "drawArc2 1.0s reverse ease-in 1";
            document.getElementById('droplet3').style.animation = "drawArc3 1.0s reverse ease-in 1";
            setTimeout(() => { document.getElementById('nozzle').style.animation = "";

            document.getElementById('droplet').style.animation = "";
            document.getElementById('droplet2').style.animation = "";
            document.getElementById('droplet3').style.animation = "";}, 1000);

        };
