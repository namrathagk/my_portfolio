
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    document.getElementById("btn-readmore").addEventListener("click", function() {
        var moreContent = document.getElementById("more-content");
        if (moreContent.style.display === "none") {
          moreContent.style.display = "block";
          document.getElementById("btn-readmore").textContent = "Read less";
        } else {
          moreContent.style.display = "none";
          document.getElementById("btn-readmore").textContent = "Read more";
        }
      });

      document.addEventListener("DOMContentLoaded", function() {
        var textArray = ["I'm a passionate web developer", "and an enthusiastic coder"];
        var index = 0;
        var textElement = document.getElementById("alt");
    
        function typeWriter(text, i, callback) {
            if (i < text.length) {
                textElement.textContent += text.charAt(i);
                i++;
                setTimeout(function() {
                    typeWriter(text, i, callback);
                }, 100); // Change the typing speed (in milliseconds) as needed
            } else {
                setTimeout(callback, 2000); // Change the delay between texts (in milliseconds) as needed
            }
        }
    
        function eraseText(callback) {
            var text = textElement.textContent;
            var i = text.length;
            if (i > 0) {
                setTimeout(function() {
                    textElement.textContent = text.substring(0, i - 1);
                    i--;
                    eraseText(callback);
                }, 50); // Change the erasing speed (in milliseconds) as needed
            } else {
                setTimeout(callback, 1000); // Change the delay before typing the next text (in milliseconds) as needed
            }
        }
    
        function showNextText() {
            eraseText(function() {
                index = (index + 1) % textArray.length;
                typeWriter(textArray[index], 0, showNextText);
            });
        }
    
        typeWriter(textArray[index], 0, showNextText);
    });

   
