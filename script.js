document.addEventListener("DOMContentLoaded", function () {

    console.log("Site funcionando! 💗");


    // =========================
    // BOTÃO SIM
    // =========================

    const botaoSim = document.getElementById("sim");

    if (botaoSim) {
        botaoSim.addEventListener("click", function () {

            document.getElementById("tela1").classList.remove("ativa");
            document.getElementById("tela2").classList.add("ativa");

        });
    }


    // =========================
    // BOTÃO NÃO FOGE
    // =========================

    const botaoNao = document.getElementById("nao");

    if (botaoNao) {

        function fugir() {

            const larguraBotao = botaoNao.offsetWidth;
            const alturaBotao = botaoNao.offsetHeight;

            const maxX = window.innerWidth - larguraBotao - 20;
            const maxY = window.innerHeight - alturaBotao - 20;

            const x = Math.max(10, Math.random() * maxX);
            const y = Math.max(10, Math.random() * maxY);

            botaoNao.style.position = "fixed";
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

    }


    // =========================
    // CONTINUAR - TELA 2
    // =========================

    const continuar1 = document.getElementById("continuar1");

    if (continuar1) {

        continuar1.addEventListener("click", function () {

            document.getElementById("tela2").classList.remove("ativa");
            document.getElementById("tela3").classList.add("ativa");

        });

    }


    // =========================
    // CONFIRMAR DATA
    // =========================

    const continuar2 = document.getElementById("continuar2");

    if (continuar2) {

        continuar2.addEventListener("click", function () {

            const data = document.getElementById("data").value;

            if (data === "") {

                alert("Escolhe uma data primeiro, gatinho! 🥺💗");

                return;
            }

            const dataFormatada = new Date(data + "T00:00:00")
                .toLocaleDateString("pt-BR");

            document.getElementById("dataEscolhida").innerHTML =
                "📅 Nosso encontro será no dia <strong>" +
                dataFormatada +
                "</strong> 💗";

            document.getElementById("tela3").classList.remove("ativa");
            document.getElementById("tela4").classList.add("ativa");

        });

    }


    // =========================
// WHATSAPP
// =========================

const whatsapp = document.getElementById("whatsapp");

if (whatsapp) {

    whatsapp.addEventListener("click", function () {

        const data = document.getElementById("data").value;

        if (data === "") {

            alert("Escolhe uma data primeiro! 🥺");

            return;
        }

        const dataFormatada = new Date(data + "T00:00:00")
            .toLocaleDateString("pt-BR");

        const mensagem =
            "Oi, meu amor! 💗 Escolhi o dia " +
            dataFormatada +
            " para dormir aí! 😍";

        const numero = "5527996446213";

        const link =
            "https://wa.me/" +
            numero +
            "?text=" +
            encodeURIComponent(mensagem);

        window.location.href = link;

    });

}

    // =========================
    // CONTINUAR - TELA 4
    // =========================

    const continuar3 = document.getElementById("continuar3");

    if (continuar3) {

        continuar3.addEventListener("click", function () {

            document.getElementById("tela4").classList.remove("ativa");

            document.getElementById("tela5").classList.add("ativa");

        });

    }

});