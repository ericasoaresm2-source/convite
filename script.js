document.addEventListener("DOMContentLoaded", function () {

    console.log("Site funcionando! 💗");


    // =========================
    // BOTÃO SIM
    // =========================

    const botaoSim = document.getElementById("sim");

    botaoSim.addEventListener("click", function () {

        document.getElementById("tela1").classList.remove("ativa");

        document.getElementById("tela2").classList.add("ativa");

    });


    // =========================
    // BOTÃO NÃO FOGE
    // =========================

    const botaoNao = document.getElementById("nao");

    function fugir() {

        botaoNao.style.position = "fixed";

        const larguraBotao = botaoNao.offsetWidth;
        const alturaBotao = botaoNao.offsetHeight;

        const x = Math.random() * (window.innerWidth - larguraBotao);

        const y = Math.random() * (window.innerHeight - alturaBotao);

        botaoNao.style.left = x + "px";

        botaoNao.style.top = y + "px";
    }


    // Computador
    botaoNao.addEventListener("mouseenter", fugir);


    // Celular
    botaoNao.addEventListener("touchstart", function (event) {

        event.preventDefault();

        fugir();

    });


    // =========================
    // CONTINUAR - TELA 2
    // =========================

    const continuar1 = document.getElementById("continuar1");

    continuar1.addEventListener("click", function () {

        document.getElementById("tela2").classList.remove("ativa");

        document.getElementById("tela3").classList.add("ativa");

    });


    // =========================
    // CONFIRMAR DATA
    // =========================

    const continuar2 = document.getElementById("continuar2");

    continuar2.addEventListener("click", function () {

        const data = document.getElementById("data").value;


        if (data === "") {

            alert("Escolhe uma data primeiro, gatinho! 🥺💗");

            return;

        }


        // Transformar a data para formato brasileiro

        const dataFormatada = new Date(data + "T00:00:00")
            .toLocaleDateString("pt-BR");


        document.getElementById("dataEscolhida").innerHTML =
            "📅 Nosso encontro será no dia <strong>" +
            dataFormatada +
            "</strong> 💗";


        document.getElementById("tela3").classList.remove("ativa");

        document.getElementById("tela4").classList.add("ativa");

    });


    // =========================
    // CONTINUAR - TELA 4
    // =========================

    const continuar3 = document.getElementById("continuar3");

    continuar3.addEventListener("click", function () {

        document.getElementById("tela4").classList.remove("ativa");

        document.getElementById("tela5").classList.add("ativa");

    });

});