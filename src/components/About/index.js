import "./styles.css"

import { AboutSlide } from "../AboutSlide";

export function About() {
    function getAge() {
        const birthDate = new Date(1066273200000);
        const currentDate = new Date();

        let age = currentDate.getFullYear() - birthDate.getFullYear();

        const monthDifference = currentDate.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getMonth() < birthDate.getMonth())) {
            age--;
        }

        return age;
    }

    return (
        <div id="About">
            <p id="aboutP">SOBRE</p>

            <AboutSlide titles={[
                "Sobre mim",
                "Competências",
                "Experiências"
            ]}

            descriptions={[
                `Meu nome é Thiago e tenho ${getAge()} anos.
                Sou desenvolvedor desde 2019 e atualmente estou cursando Análise e Desenvolvimento de Sistemas na Faculdade de Tecnologia de Ribeirão Preto.
                Utilizo o computador com frequência desde os 8 anos, o que me deixou familiarizado com o ambiente. Principalmente em relação ao Windows, mas também sei usar Linux.`,
                `Conhecimento em Python, C/C++, VBA, javascript, typescript, HTML, CSS, React. Falante nativo de português, fluente em Inglês.`,
                `Eu ainda não possuo experiência profissional, mas possuo experiência de interação com usuários em alguns projetos. Os meus principais projetos, que mostram minhas principais experiências.`
            ]}/>
        </div>
    );
  }