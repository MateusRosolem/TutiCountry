window.onload = function() {
        var menuFixo = document.getElementById("menuFixo");
        
        // Função para verificar a posição de rolagem e ajustar o menu
        function verificarScroll() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                menuFixo.style.top = "0";
            } else {
                menuFixo.style.top = "-58px";
            }
        }

        // Verificar a posição de rolagem ao carregar a página
        verificarScroll();
        
        // Verificar a posição de rolagem ao rolar a página
        window.onscroll = verificarScroll;
    };