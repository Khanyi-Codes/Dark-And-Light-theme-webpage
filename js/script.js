function darkTheme(){
            let theme = document.querySelector(".theme");
            theme.classList.add("dark");
        }
            // let button = document.querySelector("lightButton")
        
        function changeButtoncolor(){
            let buttonChange = document.querySelector(".buttoncolor");
            buttonChange.classList.remove("buttoncolor");
            buttonChange.classList.add("lightButton");
        }
            let button = document.querySelector("button");
            
            button.addEventListener("click",darkTheme);
            button.addEventListener("click", changeButtoncolor);

            
            // box.classList.add("buttoncolor");
        