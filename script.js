
const creatures = {
  "Glink's": {
    vida: 50,
    sanidade: 30,
    especial: 20,
    armadura: 1,
    vidaPorNivel: 10,
    sanidadePorNivel: 3,
    especialPorNivel: 1,
    armaduraPorNivel:3,
    bru: 14, agi: 16, det: 12, pre: 13, lib: 8, cnx: 9,
    bruDano: 1, agiDano: 2, detDano: 1, preDano: 1, libDano: 0, cnxDano: 0,
    bruTest: 2, agiTest: 3, detTest: 1, preTest: 1, libTest: -2, cnxTest: -1,
    bonus: "Resistente:Ácido, Vulnerável: Aura",
    bonus2: `
Ataque com calda - teste de Brutalidade: Quando ataca causa 2d8 de dano esmagante.

Ataque com garras - teste de Agilidade: Ao acertar causa 3d6 de dano cortante.

Ataque com arma coletada: sua arma supersticiosa causa dano ácido extra de 2d4, e pode envenenar.`,
    bonus3: "Vsndadnasndandado.",
    img: "imagens/Glink's.png"
  }
};

const select = document.getElementById('creatureSelect');
const nameEl = document.getElementById('creatureName');
const imageEl = document.getElementById('creatureImage');

Object.keys(creatures).forEach(creature => {
  const option = document.createElement('option');
  option.value = creature;
  option.textContent = creature;
  select.appendChild(option);
});

select.addEventListener('change', () => {
  const selected = creatures[select.value];
  if (selected) {
    document.getElementById('creatureStats').style.display = 'block';
    nameEl.textContent = select.value;
    imageEl.src = selected.img;

    document.getElementById('bru').textContent = selected.bru;
    document.getElementById('agi').textContent = selected.agi;
    document.getElementById('det').textContent = selected.det;
    document.getElementById('pre').textContent = selected.pre;
    document.getElementById('lib').textContent = selected.lib;
    document.getElementById('cnx').textContent = selected.cnx;
    document.getElementById('bruDano').textContent = selected.bruDano;
    document.getElementById('agiDano').textContent = selected.agiDano;
    document.getElementById('detDano').textContent = selected.detDano;
    document.getElementById('preDano').textContent = selected.preDano;
    document.getElementById('libDano').textContent = selected.libDano;
    document.getElementById('cnxDano').textContent = selected.cnxDano;
    document.getElementById('bruTest').textContent = selected.bruTest;
    document.getElementById('agiTest').textContent = selected.agiTest;
    document.getElementById('detTest').textContent = selected.detTest;
    document.getElementById('preTest').textContent = selected.preTest;
    document.getElementById('libTest').textContent = selected.libTest;
    document.getElementById('cnxTest').textContent = selected.cnxTest;
    document.getElementById('bonus').textContent = selected.bonus;
    document.getElementById('bonus2').textContent = selected.bonus2;
    document.getElementById('bonus3').textContent = selected.bonus3;

    document.getElementById('vida').textContent = selected.vida;
    document.getElementById('sanidade').textContent = selected.sanidade;
    document.getElementById('especial').textContent = selected.especial;
    document.getElementById('armadura').textContent = selected.armadura;

    document.getElementById('creatureLevel').textContent = 1; // nível inicial
  } else {
    document.getElementById('creatureStats').style.display = 'none';
  }
});

document.getElementById('levelUpButton').addEventListener('click', () => {
  const level = parseInt(document.getElementById('creatureLevel').textContent);
  const selected = creatures[select.value];

  if (selected) {
    document.getElementById('creatureLevel').textContent = level + 1;
    updateStats(selected, level + 1);
  }
});

function updateStats(creature, level) {
  document.getElementById('vida').textContent = creature.vida + (creature.vidaPorNivel * level);
  document.getElementById('sanidade').textContent = creature.sanidade + (creature.sanidadePorNivel * level);
  document.getElementById('especial').textContent = creature.especial + (creature.especialPorNivel * level);
  document.getElementById('armadura').textContent = creature.armadura + Math.floor(level / creature.armaduraPorNivel);

}
