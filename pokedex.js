const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        if(res.status != 200){
            pokeImage("./img/pokemon-sad.gif")
        }

        else{
            return res.json();
        }
    }).then((data) => {
        if(data){
            let pokeImg = data.sprites.other.home.front_default;
            pokeImage(pokeImg);

            let pokeNum = data.id;
            pokeNumero(pokeNum);
            document.getElementById("pokeNumber").innerHTML = pokeNum;

            let pType = data.types[0].type.name;
            pokeType(pType);
            pType = pType.toUpperCase();
            document.getElementById("pType").innerHTML = pType;

            let pokeHp = data.stats[0].base_stat;
            pokeSalud(pokeHp);
            document.getElementById("hp").innerHTML = pokeHp;

            let pokeA = data.stats[1].base_stat;
            pokeSpecialDefense(pokeA);
            document.getElementById("attack").innerHTML = pokeA;

            let pokeD = data.stats[2].base_stat;
            pokeSpecialDefense(pokeD);
            document.getElementById("defense").innerHTML = pokeD;

            let pokeSA = data.stats[3].base_stat;
            pokeSpecialDefense(pokeSA);
            document.getElementById("special_attack").innerHTML = pokeSA;

            let pokeSD = data.stats[4].base_stat;
            pokeSpecialDefense(pokeSD);
            document.getElementById("special_defense").innerHTML = pokeSD;

            let pokeSP = data.stats[5].base_stat;
            pokeSpecialDefense(pokeSP);
            document.getElementById("speed").innerHTML = pokeSP;

            let pokeW = data.weight;
            pokeSpecialDefense(pokeW);
            document.getElementById("weight").innerHTML = pokeW / 10 + " Kg";

            let pokeH = data.height;
            pokeSpecialDefense(pokeH);
            document.getElementById("height").innerHTML = pokeH / 10 + " m";

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
};

const pokeNumero = (url) => {
    const pokeNumber = document.getElementById("pokeNumber");
    pokeNumber.src = url;
}

const pokeType = (url) => {
    const pokeTipo = document.getElementById("pType");
    pokeTipo.src = url;
};

const pokeSalud = (url) => {
    const pokeHealth = document.getElementById("hp");
    pokeHealth.src = url;
}

const pokeAtaque = (url) => {
    const pokeAttack = document.getElementById("attack");
    pokeAttack.src = url;
}

const pokeDefensa = (url) => {
    const pokeDefense = document.getElementById("defense");
    pokeAttack.src = url;
}

const pokeSpecialAttack = (url) => {
    const pokeAtaqueEspecial = document.getElementById("special_attack");
    pokeAtaqueEspecial.src = url;
}

const pokeSpecialDefense = (url) => {
    const pokeDefensaEspecial = document.getElementById("special_defense");
    pokeDefensaEspecial.src = url;
}

const pokeVelocidad = (url) => {
    const pokeSpeed = document.getElementById("speed");
    pokeSpeed.src = url;
}

const pokePeso = (url) => {
    const pokeWeight = document.getElementById("weight");
    pokeWeight.src = url;
}

const pokeAltura = (url) => {
    const pokeHeight = document.getElementById("height");
    pokeHeight.src = url;
}