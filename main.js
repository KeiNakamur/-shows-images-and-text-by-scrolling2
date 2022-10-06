// originで開始位置を指定し、distanceでどれほどの位置からかを指定しないと動きが反映されないので注意
ScrollReveal({ reset: true, distance: "60px", duration: 1500, delay: 2000});
ScrollReveal().reveal('.main-title', {delay: 500, origin: "left"});
ScrollReveal().reveal('.image', {delay: 500, origin: "bottom"});
ScrollReveal().reveal('.text-box', {delay: 500, origin: "right"});
ScrollReveal().reveal('.media-icons i', {delay: 500, origin: "left", interval: 200});
ScrollReveal().reveal('.section-title', {delay: 500, origin: "left"});
ScrollReveal().reveal('.main-title', {delay: 500, origin: "left"});
ScrollReveal().reveal('.info', {delay: 500, origin: "right"});
ScrollReveal().reveal('.media-info li', {delay: 500, origin: "bottom", interval: 200});