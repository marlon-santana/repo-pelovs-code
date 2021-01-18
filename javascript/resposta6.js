function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo

    
}

console.log(jurosSimples(100, 1/100, 12));
console.log(jurosCompostos(100, 1/100, 12));


   //capitalinicial * (1 +taxa)** tempo