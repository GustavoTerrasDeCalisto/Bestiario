const creatures = {
  "Glink's": {
    vida: 50,
    sanidade: 30,
    especial: 20,
    armadura: 1,
    vidaPorNivel: 10,
    sanidadePorNivel: 3,
    especialPorNivel: 1,
    armaduraPorNivel: 3,
    bru: 14, agi: 16, det: 12, pre: 13, lib: 8, cnx: 9,
    bruDano: 1, agiDano: 2, detDano: 1, preDano: 1, libDano: 0, cnxDano: 0,
    bruTest: 2, agiTest: 3, detTest: 1, preTest: 1, libTest: -2, cnxTest: -1,
    bonus:`Resistente:Ácido
    Vulnerável: Aura`,
    bonus2: `Ataque com calda - teste de Brutalidade: Quando ataca causa 2d8 de dano esmagante.
Ataque com garras - teste de Agilidade: Ao acertar causa 3d6 de dano cortante.
Ataque com arma coletada: sua arma supersticiosa causa dano ácido extra de 2d4, e pode envenenar.
cuuuuuuuuuuuuuuuuuuuuuuu.
`,
    Magias: `Nível 5 - Cuspe ácido, nível 7 - Fogo vivo.`,
    Passivas:` Nível 1 - Raiva.`,
    Talentos: `Foices, Espadas, Machados.`,
    img: "imagens/Glink's.png"
  }
};

const select = document.getElementById('creatureSelect');
const nameEl = document.getElementById('creatureName');
const imageEl = document.getElementById('creatureImage');

// Popula o menu de seleção
Object.keys(creatures).forEach(creature => {
  const option = document.createElement('option');
  option.value = creature;
  option.textContent = creature;
  select.appendChild(option);
});

// Quando um item for selecionado
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
    document.getElementById('Magias').textContent = selected.Magias;
    document.getElementById('Passivas').textContent = selected.Passivas;
    document.getElementById('Talentos').textContent = selected.Talentos;

    // Definindo o nível inicial
    document.getElementById('creatureLevel').textContent = 1; 
    updateStats(selected, 1); // Atualiza as estatísticas no início
  } else {
    document.getElementById('creatureStats').style.display = 'none';
  }
});

// Botão para aumentar o nível
document.getElementById('levelUpButton').addEventListener('click', () => {
  const levelElement = document.getElementById('creatureLevel');
  let level = parseInt(levelElement.textContent);
  const selected = creatures[select.value];

  if (selected) {
    level += 1; // Aumenta o nível
    levelElement.textContent = level;
    updateStats(selected, level); // Atualiza as estatísticas com o novo nível
  }
});

// Botão para diminuir o nível
document.getElementById('levelDownButton').addEventListener('click', () => {
  const levelElement = document.getElementById('creatureLevel');
  let level = parseInt(levelElement.textContent);
  const selected = creatures[select.value];

  if (selected && level > 1) { // Impede que o nível seja menor que 1
    level -= 1; // Diminui o nível
    levelElement.textContent = level;
    updateStats(selected, level); // Atualiza as estatísticas com o novo nível
  }
});

// Função para atualizar as estatísticas
function updateStats(creature, level) {
  const vida = creature.vida + (creature.vidaPorNivel * (level - 1)); // Vida base + (vida por nível * (nível atual - 1))
  const sanidade = creature.sanidade + (creature.sanidadePorNivel * (level - 1));
  const especial = creature.especial + (creature.especialPorNivel * (level - 1));
  const armadura = creature.armadura + Math.floor((level - 1) / creature.armaduraPorNivel);

  // Atualiza a interface com as novas estatísticas
  document.getElementById('vida').textContent = vida;
  document.getElementById('sanidade').textContent = sanidade;
  document.getElementById('especial').textContent = especial;
  document.getElementById('armadura').textContent = armadura;
}

function formatBonusText(text, type = "default") {
  let className;
  if (type === "bonus1") className = "bonus1-paragraph";
  else if (type === "bonus2") className = "bonus2-paragraph";
  else if (type === "bonus3") className = "bonus3-paragraph";
  else className = "bonus-paragraph";

  return text.split(/\n+/).map(sentence =>
    sentence.trim() ? `<p class="${className}">${sentence}</p>` : ''
  ).join('');
}

select.addEventListener('change', () => {
  const selected = creatures[select.value];
  if (selected) {
    document.getElementById('creatureStats').style.display = 'block';
    nameEl.textContent = select.value;
    imageEl.src = selected.img;

    document.getElementById('bonus').innerHTML = formatBonusText(selected.bonus, "bonus1"); // Estilo exclusivo
    document.getElementById('bonus2').innerHTML = formatBonusText(selected.bonus2, "bonus2");
    document.getElementById('bonus3').innerHTML = formatBonusText(selected.bonus3, "bonus3");

    // Outras configurações de stats...
  } else {
    document.getElementById('creatureStats').style.display = 'none';
  }
});



