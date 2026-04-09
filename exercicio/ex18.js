let dia = "Quinta";

switch (dia) {
    case "Segunda":
    case "Terça":
    case "Quarta":
    case "Quinta":
    case "Sexta":
        console.log("Dia de trabalhar! 💼");
        break;
    case "Sábado":
    case "Domingo":
        console.log("Dia de descanso! 🏖️");
        break;
    default:
        console.log("Dia inválido.");
}