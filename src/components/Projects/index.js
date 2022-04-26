import "./styles.css"

import {ProjectSlide} from "../ProjectSlide";

export function Projects() {
    return (
        <div className="Projects" id="Projects">
            <p id="projectsP">PROJETOS</p>
            <p>Aqui estão listados os meus projetos:</p>

            <ProjectSlide
                name="ChatBots"
                images={[
                    "https://i.imgur.com/JNVgV2I.png",
                    "https://i.imgur.com/pBsfgFS.png",
                    "https://i.imgur.com/HN4oLsL.png",
                    "https://i.imgur.com/UAGHMep.png"]}
                descriptions={[
                    "A plataforma de controle dos meus bots pro Discord. Eles foram criados com o intúito de ajudar em seções de RPG de mesa e originalmente foram programados em python, mas eventualmente migrados para Javascript para a integração com a interface feita em React.",
                    "Arnitem é um bot que simulava jogos de tabuleiro ou baralho por chat do Discord. Atualmente nenhum jogo está integrado com a interface, e as versões funcionais do bot são todas em Python.",
                    "Edgar é um bot para jogar dados em chats em servidores do Discord. Os usuários jogam os dados e os resultados ficam salvos na interface, onde é possível também rolar dados e determinar o sistema de RPG de mesa. Ele também já foi capaz de manipular um banco de dados simples pelo próprio chat do discord.",
                    "Ibuki é um bot para tocar músicas em chats de vóz em servidores do Discord. Os usuários não interagem com ela, mas na interface é possível tocar, pausar, modificar o volume e salvar músicas para uso futuro."]}
            />
            <ProjectSlide 
                name="Portfólio"
                images = {[
                    "https://i.imgur.com/EpdgEc6.png"
                ]}
                descriptions={[
                    "Esse mesmo site, feito por mim. Um site simples feito com o propósito de reunir e resumir minhas habilidades e projetos, enquanto mostro o que sei fazer."
                ]}
            />
        </div>
    );
  }