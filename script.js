const creatures = {
  "Glink's": {
    vida: 50,
    sanidade: 30,
    especial: 20,
    armadura: 1,
    movimento:9,
    vidaPorNivel: 10,
    sanidadePorNivel: 3,
    especialPorNivel: 1,
    armaduraPorNivel: 3,
    bru: 14, agi: 16, det: 12, pre: 13, lib: 8, cnx: 9,
    bruDano: 1, agiDano: 2, detDano: 1, preDano: 1, libDano: 0, cnxDano: 0,
    bruTest: 2, agiTest: 3, detTest: 1, preTest: 1, libTest: -2, cnxTest: -1,
    bonus:`Resistente:Ácido
    Vulnerável: Aura`,
    bonus2: `{pigmento}*Ataque com calda - teste de Brutalidade:*{/pigmento} Quando ataca causa _2d8 de dano esmagante_.
{pigmento}*Ataque com garras - teste de Agilidade:*{/pigmento} Ao acertar causa _3d6 de dano cortante_.
{pigmento}*Ataque com arma coletada:*{/pigmento} sua arma supersticiosa causa dano _ácido extra de 2d4_, e pode envenenar.
`,
    bonus3:`Os Protetores da floresta
Elemento - Caos`,
    Magias: `Nível 5 - Cuspe ácido, nível 7 - Fogo vivo.`,
    Passivas:` Nível 1 - Raiva.`,
    Talentos: `Foices, Espadas, Machados.`,
    Descricao:`Os Glink's são criaturas humanoides com características de lagartos, encontrados principalmente em florestas densas e selvagens. Possuem escamas que variam de tons esverdeados a marrons, facilitando a camuflagem em seu habitat natural. Suas feições mesclam traços humanos e reptilianos, com olhos penetrantes e pupilas fendidas que demonstram sua conexão primitiva e instintiva com o ambiente ao seu redor.
Embora sua origem seja desconhecida, os Glink's possuem uma ligação profunda com o elemento Caos. Esse vínculo é refletido tanto em suas ações quanto em sua natureza imprevisível. São criaturas extremamente territoriais, protegendo com fervor as áreas que consideram suas, utilizando armas como espadas, foices ou machados para amedrontar e afastar invasores. Seus territórios são sagrados para eles, e qualquer intruso é rapidamente eliminado ou expulso com brutalidade.
Apesar de sua conexão com a natureza, os Glink's não têm afeto pela ideia de proteger toda a floresta ou preservar o equilíbrio natural em uma escala maior. Eles veem a natureza fora de seus domínios como algo a ser corrompido ou destruído. Quando se aventuram fora de seus territórios, esses seres muitas vezes queimam, destroem e envenenam a terra e as plantas que encontram. Essa dualidade reflete sua essência caótica, onde a proteção e a destruição da natureza coexistem de maneira imprevisível.
Os Glink's desprezam sociedades evoluídas e a vida em grandes grupos. Vivem em pequenos bandos ou até mesmo sozinhos, preferindo a solidão ou o contato limitado com outros de sua espécie. Eles evitam qualquer forma de civilização avançada, considerando-a uma ameaça para suas formas primitivas de vida e para a floresta que habitam. Por essa razão, são frequentemente vistos como inimigos das civilizações humanas, druidas e outros protetores da natureza.
Seus comportamentos e motivações são muitas vezes incompreendidos, mas uma coisa é certa: os Glink's são forças imprevisíveis e perigosas da natureza, que devem ser tratados com extrema cautela.`,
 _imgs: [
      "imagens/Glink's.png",
      "imagens/Glink's.png",
      "imagens/Glink's.png",
      "imagens/Glink's.png",
      "imagens/Glink's.png"
    ],
    
    get img() {
      return this._imgs[Math.floor(Math.random() * this._imgs.length)];
    },

    _imgs2: [
      "imagens/Token-Glink's.png",
      "imagens/Token-Glink's.png",
      "imagens/Token-Glink's.png"
    ],

    get img2() {
      return this._imgs2[Math.floor(Math.random() * this._imgs2.length)];
    },

    // outros dados como vida, sanidade, etc. aqui...
  },"Musplum": {
    vida: 30,
    sanidade: 15,
    especial: 15,
    armadura: 1,
    movimento:8,
    vidaPorNivel: 8,
    sanidadePorNivel: 5,
    especialPorNivel: 2,
    armaduraPorNivel: 4,
    bru: 13, agi: 17, det: 12, pre: 9, lib: 9, cnx: 11,
    bruDano: 1, agiDano: 2, detDano: 1, preDano: 0, libDano: 0, cnxDano: 1,
    bruTest: 1, agiTest: 3, detTest: 1, preTest: -1, libTest: -1, cnxTest: 1,
    bonus:`Resistente:Escuridão
    Vulnerável: Gelo`,
    bonus2: `{pigmento}*Ataque com bico - teste de Agilidade :*{/pigmento} Prioriza as pernas e causa _1d12 de dano perfurante_.
{pigmento}*Ataque com garras - teste de Brutalidade:*{/pigmento} Ao acertar causa _3d6 de dano cortante_.
{pigmento}*Olhar no escuro:*{/pigmento} pode enxergar no escuro.`,
bonus3:`Rastejadores obscuros
Elemento - Caos`,
    Magias: `Nível 3 - Força gélida , nível 10 - Tempestade da natureza.`,
    Passivas:` Nível 1 - Furtividade sombria.`,
    Talentos: `-`,
    Descricao:`O Musplum é uma criatura peculiar e misteriosa, com uma forma bípede coberta por penas e pelugem, que a faz parecer um híbrido entre uma ave e um mamífero. Embora possua orelhas grandes, semelhantes às de um rato, seu rosto e comportamento se assemelham mais ao de uma ave de rapina. O bico preto e curvado do Musplum é uma de suas principais características, usado para caçar e se alimentar de carcaças, reforçando sua natureza necrófaga.
Essas criaturas são rápidas e evasivas, preferindo habitar os ambientes mais sombrios e inóspitos, como florestas densas, cavernas profundas e os subterrâneos abandonados. Os Musplums são criaturas noturnas, sendo praticamente impossíveis de serem avistadas durante o dia. Eles evitam a luz e qualquer tipo de exposição, preferindo se manter escondidos até o anoitecer, quando se tornam mais ativos.
Quando jovens, os Musplums são minúsculos, medindo entre 3 cm e 10 cm de altura. Durante essa fase, podem facilmente se abrigar em pequenos buracos ou até dentro das casas das pessoas, onde passam despercebidos devido ao seu tamanho. No entanto, à medida que amadurecem, sofrem uma série de protometamorfoses que mudam drasticamente sua aparência. As penas começam a crescer em maior quantidade, seu bico aumenta consideravelmente e suas garras se tornam mais afiadas, transformando-os em predadores noturnos muito mais perigosos. Nessa fase adulta, a convivência próxima com humanos se torna inviável, pois seus instintos caçadores e sua agressividade se intensificam.
Os Musplums são conhecidos por serem extremamente furtivos e sorrateiros durante a noite, movendo-se com precisão quase sobrenatural. Embora prefiram evitar o confronto, quando forçados a se revelar, eles se tornam inimigos metódicos e agressivos. Ataques de Musplums são rápidos e inesperados, com movimentos calculados para atingir pontos vitais de suas presas. São criaturas territoriais e cautelosas, mas quando se sentem ameaçadas, sua natureza predatória se manifesta com força total.
Sua presença em florestas e cavernas torna esses locais ainda mais perigosos para aventureiros desavisados, e muitos caçadores de mitos afirmam que os Musplums são responsáveis por desaparecimentos misteriosos em regiões remotas. Essas criaturas sombrias e enigmáticas permanecem envoltas em lendas e superstições, sempre espreitando nas sombras, à espera do momento certo para atacar.`,
    img: "imagens/Musplum.png",
    img2: "imagens/Token-Musplum.png"
  }
  
  
  
  ,"Peões Desordeiros": {
    "vida": 35,
    "sanidade": 45,
    "especial": 20,
    "armadura": 3,
    "movimento":7,
    "vidaPorNivel": 7,
    "sanidadePorNivel": 3,
    "especialPorNivel": 4,
    "armaduraPorNivel": 2,
    "bru": 25,
    "agi": 8,
    "det": 10,
    "pre": 12,
    "lib": 15,
    "cnx": 30,
    "bruDano": 4,
    "agiDano": -2,
    "detDano": 1,
    "preDano": 0,
    "libDano": 2,
    "cnxDano": 5,
    "bruTest": 4,
    "agiTest": -2,
    "detTest": 1,
    "preTest": 1,
    "libTest": 2,
    "cnxTest": 5,
    "bonus": "Resistente: Distorção\nVulnerável: Maldição",
    "bonus2": "{pigmento}*Transformação em Peças de Xadrez:*{/pigmento} Quando quebrados, os Peões Desordeiros podem se transformar em peças de xadrez em tamanho real (10 cm). Quando alguém vencer um jogo de xadrez usando-os, eles retornam à forma humanoide e atacam com socos, causando _4d12 de dano físico esmagante_.\n{pigmento}*Banimento:*{/pigmento} Podem ser banidos com um rito de desafio. Se se separarem por mais de 50 metros ou pisarem em divisórias no chão, explodem e causam _8d20 de dano de Maldição_ em área.\n{pigmento}*Peão Branco:*{/pigmento} Cria um grid branco no chão, e quem pisar fora dele pode ser paralisado e será o alvo do Peão Branco.\n{pigmento}*Peão Preto:*{/pigmento} Cria um grid preto no chão, e quem pisar nele será teleportado para o lado e atacado com um soco de maldição, causando _4d12 de dano_.",
    "bonus3": "Peões Desordeiros\nElemento - Desconhecido",
    "Magias": "Nenhuma",
    "Passivas": "Nenhuma",
    "Talentos": "Nenhum",
    "Descricao": `Uma antiga lenda diz que os Peões Desordeiros aparecem para aqueles que jogam xadrez usando peões no lugar dos reis. Crianças que chamarem por eles jogando xadrez serão caçadas por essas entidades implacáveis. Ao cair da noite, os Peões Desordeiros surgem nas sombras, buscando aqueles que ousaram desafiar as regras do destino.
      Em Terras de Calisto, onde as lendas ganham vida, a história dos Peões Desordeiros é temida. As crianças que, sem saber, invocam esses peões durante uma partida, tornam-se alvos de uma caçada mortal. Os peões, ao ganharem vida, não são mais simples peças de um jogo – tornam-se caçadores que desafiarão seus jogadores até que alguém vença o jogo ou a morte os consuma.
      Quando o jogo começa, o silêncio se instala nas terras, e os peões tornam-se predadores. Eles atacam implacavelmente até que alguém consiga derrotá-los. Se a vitória for alcançada, os peões retornam à sua forma humana, mas se o jogo terminar com derrota, eles permanecem como peças, aguardando novos jogadores para mais uma rodada.
      Dizem que a cada noite, em locais remotos ou até mesmo no coração das cidades, os Peões Desordeiros podem ser ouvidos em seus jogos distantes, prontos para caçar aqueles que desafiarem as regras sagradas.`,
    "img": "imagens/PeaoDesordeiro.png",
    "img2": "imagens/Token-PeaoDesordeiro.png"
}

  
  
  
  ,"Paralios": {
    vida: 110,
    sanidade: 70,
    especial: 25,
    armadura: 2,
  movimento:7,
    vidaPorNivel: 15,
    sanidadePorNivel: 8,
    especialPorNivel: 4,
    armaduraPorNivel: 2,
    bru: 12, agi: 14, det: 11, pre: 8, lib: 25, cnx: 28,
    bruDano: 0, agiDano: 1, detDano: 0, preDano: 0, libDano: 3, cnxDano: 4,
    bruTest: 1, agiTest: 2, detTest: 1, preTest: -2, libTest: 5, cnxTest: 6,
    bonus:`Imune a dano de:Morte
    Imune a dano de:Sono
    Resistente:Alma
    Vulnerável:Eclipe
    Vulnerável: Cinzas`,
    bonus2: `_Alvos que acertarem diretamente o {pigmento}*coração*{/pigmento} causam dano dobrado na rolagem. Ao ser ferido no coração, Paralios marca imediatamente o atacante como sua obsessão até o fim do combate. Enquanto estiver focado nesse inimigo, Paralios recebe {pigmento}*+1d20 de dano de Sangue*{/pigmento} contra ele, além de priorizá-lo em suas ações._
{pigmento}*Invocar Almas Sombrias:*{/pigmento} Paralios invoca _2 almas flutuantes_ que orbitam acima dele. Caso receba um _golpe fatal_, pode consumir as almas para _curar 4d12_. (Teste de Conexão para invocar - sem custo).
{pigmento}*Intangibilidade Inesperada:*{/pigmento} Como reação por turno, torna-se intocável e esquiva automaticamente de um acerto.
{pigmento}*Sussurros do Sono:*{/pigmento} Como ação livre, tenta colocar um inimigo em sono profundo (teste de Conexão vs Libertação).
{pigmento}*Braço Etéreo Dourado:*{/pigmento} Um ataque com braço dourado fantasmagórico, causando _2d20 de dano Alma_. Pode carregar o ataque usando a ação completa ou movimento para causar _4d20_.
{pigmento}*Névoa do Pesadelo:*{/pigmento} Passiva Ativável - Paralios ativa uma maldição no ambiente: ninguém no raio de 1000 km consegue dormir direito ou se recuperar, gerando insônia, medo e pesadelos contínuos.`,
bonus3:`O Anunciador dos Sonhos
Elemento - Desconhecido`,
    Magias: `Nível 1 - Sonho Frágil, Nível 3 - Sonhos Forçados, Nível 4 - Labirinto Mental, Nível 5 - Dimensão dos Sonhos`,
    Passivas:` Nível 1 - Teleporte repentino, Nível 4 - Furtividade Sombria.`,
    Talentos: `Furtividade - Requisito: Agilidade,
Intimidação - Requisito: Conexão,
Liderança -Requisito: Conexão.`,
    Descricao:`Uma entidade sombria e semi-transparente, de aparência esguia e perturbadora. Seu rosto é um contraste marcante: pele branca como porcelana rachada, envolta por manchas e traços negros que escorrem como tinta. No vazio de sua face, os olhos vermelhos brilham intensamente, parecendo atravessar a alma de quem ousa encará-lo.
Paralios não caminha — paira silenciosamente pelo ar, como se a gravidade não o alcançasse. Sua presença é sempre envolta por névoas escuras e sussurros indecifráveis, carregando consigo o frio da noite e o peso dos sonhos malditos.
Nas Terras de Calisto, Paralios é conhecido como o Anunciador dos Sonhos, o Arauto de Morpheus, o guardião dos pesadelos que anuncia a chegada da entidade maior. Onde Paralios passa, pragas de insônia surgem, e os pesadelos tomam forma, se arrastando para fora da mente dos aflitos.
Dizem que ele aparece sobre o peito de suas vítimas, imobilizando-as com a paralisia do sono, enquanto seus olhos vermelhos são a última coisa que os vivos veem antes de acordar sem alma… ou nunca mais acordar.`,
    img: "imagens/Paralios.png",
    img2: "imagens/Token-Paralios.png"
  }
  
  
  
  
  
  
  ,"A Bolha": {
  "vida": 50,
  "sanidade": 4,
  "especial": 12,
  "armadura": 8,
  movimento:8,
  "vidaPorNivel": 20,
  "sanidadePorNivel": 2,
  "especialPorNivel": 5,
  "armaduraPorNivel": 2,

  "bru": 16, "agi": 8, "det": 10, "pre": 8, "lib": 8, "cnx": 12,
  "bruDano": 1, "agiDano": 0, "detDano": 0, "preDano": 0, "libDano": 0, "cnxDano": 0,
  "bruTest": 2, "agiTest": -2, "detTest": 0, "preTest": -2, "libTest": -2, "cnxTest": 1,

  "bonus": "Imune: Ácido, Veneno, Sono\nResistente: Físico não-mágico\nVulnerável: Eletricidade, Luz",
  "bonus2": "{pigmento}*Absorção Corrosiva:*{/pigmento} Sempre que elimina uma criatura, recupera 1d10+1d8 de vida e aumenta sua vida máxima em +20, aumente 1 Nível.\n{pigmento}*Diluição Instintiva:*{/pigmento} Pode atravessar grades, frestas e espaços minúsculos sem custo, mas não pode passar por barreiras mágicas.\n{pigmento}*Grito Gelatinoso:*{/pigmento} Uma vez por combate, solta um grito que afeta todas as criaturas em 10m. Cada inimigo deve passar em um teste de Conexão (DT 13) ou fica Apavorado por 1 turno.\n{pigmento}*Corrosão Viva:*{/pigmento} Causa 5d12 de dano ácido a cada turno a quem estiver em contato direto com seu corpo. Objetos não mágicos tocados se desfazem em 2 turnos.",
  
  "bonus3": "Criatura Amórfica\nElemento - Caos / Ácido",
  "Descricao": "Uma massa colossal de matéria corrosiva viva, nascida de um experimento alquímico proibido. A Bolha rasteja absorvendo tudo em seu caminho. Seus gritos não têm som, mas ecoam na mente dos que a veem. Com o tempo, cresce, engole estruturas e digere seres vivos, revelando fragmentos derretidos de ossos em sua transparência pulsante.",
  "img": "imagens/A-Bolha.png",
  "img2": "imagens/Token-A-Bolha.png"
}
  
  
  
  
  
  ,"Deinonychus": {
    vida: 72,
    sanidade: 33,
    especial: 8,
    armadura: 2,
  movimento:12,
    vidaPorNivel: 15,
    sanidadePorNivel: 4,
    especialPorNivel: 3,
    armaduraPorNivel: 2,
    bru: 22, agi: 12, det: 11, pre: 10, lib: 13, cnx: 10,
    bruDano: 2, agiDano: 1, detDano: 1, preDano: 0, libDano: 1, cnxDano: 0,
    bruTest: 5, agiTest: 1, detTest: 1, preTest: 0, libTest: 1, cnxTest: 0,
    bonus:`Resistente: dano Perfurante
    Vulnerável: Dano de Sono
    Imune: Dano de Mental`,
     bonus2: `{pigmento}*Caçada Feroz:*{/pigmento} Quando estão com pouca vida eles podem ecoar um som que chama a atenção de outros Deinonychus próximos, que surgem para auxiliar no combate. Essas criaturas patrulham em grupos de 5 a 7, sendo que um deles sempre tem de 2 a 5 níveis a mais que os demais, atuando como o líder. Os que forem atraídos e ainda não estiverem na fila de iniciativa entram no final da fila.
{pigmento}*Ferocidade ancestral – teste de Agilidade :*{/pigmento} Todo turno pode atacar duas vezes podendo escolher os seguintes golpes – Depois que acertar dois golpes seguidos em uma alvo tem chance debilitar o alvo (o alvo quando for atingido deve rodar 1d20 Determinação, a DT é 12:
{pigmento}*Garras laminares*{/pigmento} – golpeia em área 3m de distancia até 3 alvos _2d12 de dano Cortante_.
{pigmento}*Mordida assombrosa*{/pigmento} – Pula até 5m em um alvo e morde causando _3d10 de dano Cortante_.
{pigmento}*Cauda chicote*{/pigmento} – Faz um giro que causa _3d8 de dano Esmagante_ em área em quem estiver próximo de 2m.`,
    bonus3:`Deinonychus antirrhopus
Elemento – Desconhecido`,
    Magias: `Nenhuma.`,
    Passivas:` Nível 1 – Consumir, nível 3 – Vingança.`,
    Talentos: `Intimidação - Requisito: Conexão, Percepção - Requisito: Libertação e Sobrevivência - Requisito: Determinação.`,
    Descricao:`O Deinonychus antirrhopus é uma criatura ancestral que parece ter sido arrancada das profundezas do tempo, trazida de volta ao mundo atual por forças sobrenaturais. Este dinossauro terópode, que viveu originalmente no período Cretáceo, agora caminha novamente pelo continente, causando um desequilíbrio ecológico devastador. Com uma estranha aura negra que parece envolver seu corpo, o Deinonychus se destaca como uma aberração, um sobrevivente de uma era extinta que não pertence à fauna moderna.
Embora aparentem ser animais comuns à primeira vista, o comportamento e a presença perturbadora desses predadores revelam sua verdadeira natureza. Eles surgiram no continente de Eldoria há mais de 850 anos, antes da grande separação do território, trazidos de volta por algum evento misterioso e não natural. Desde então, adaptaram-se de forma assustadoramente eficiente ao novo mundo, dominando as áreas em que se estabeleceram. Suas aparições causam terror nas populações locais, pois não se sabe ao certo se essa é a única espécie ancestral ressuscitada ou se outras criaturas antigas podem também estar à espreita.
Os Deinonychus são caçadores territoriais e implacáveis, conhecidos por sua crueldade e comportamento predatório. Muitas vezes, eles caçam não pela necessidade de sobrevivência, mas por puro instinto, quase como se estivessem brincando com suas presas em um jogo macabro. Eles caçam em bandos, normalmente compostos de 5 a 7 indivíduos, e suas emboscadas são organizadas e letais. Curiosamente, apesar de sua tendência a caçar em grupo, os Deinonychus são egoístas e cabeças-duras, preferindo muitas vezes caçar sozinhos. Eles só chamam seus companheiros de bando quando estão gravemente feridos ou em perigo iminente.
A aparência imponente desses predadores é complementada por sua pele dura e resistente, que lhes proporciona uma defesa natural contra ataques. Suas garras afiadas são comparáveis a lâminas, capazes de cortar profundamente seus alvos, enquanto sua mordida poderosa é o suficiente para desmembrar presas com facilidade. O comportamento de caça, sua territorialidade agressiva, e a forma como perturbam o equilíbrio ecológico tornam o Deinonychus antirrhopus uma ameaça assustadora para o mundo moderno.
Em momentos de grande perigo, quando estão sozinhos e encurralados, emitem um som agudo e estridente que convoca rapidamente seus companheiros. Essas criaturas representam não apenas uma ameaça física, mas também um enigma sobre a origem de seu retorno, sugerindo que forças muito maiores e desconhecidas podem estar em jogo, manipulando o tempo e a vida.`,
    img: "imagens/Deinonychus.png",
    img2: "imagens/Token-Deinonychus.png"
  }
  
  
  
  
  
  ,"Raposa Selvagem": {
    vida: 24,
    sanidade: 14,
    especial: 0,
    armadura: 2,
  movimento:8,
    vidaPorNivel: 5,
    sanidadePorNivel: 3,
    especialPorNivel: 0,
    armaduraPorNivel: 5,
    bru: 10, agi: 16, det: 12, pre: 14, lib: 12, cnx: 10,
    bruDano: 0, agiDano: 1, detDano: 0, preDano: 0, libDano: 0, cnxDano: 0,
    bruTest: -1, agiTest: 3, detTest: 1, preTest: 2, libTest: 1, cnxTest: 0,
    bonus:`Resistente: dano de Caos
    Vulnerável: dano de Fogo`,
 bonus2: `{pigmento}*Mordida Ágil:*{/pigmento} A Raposa Selvagem avança rapidamente contra o alvo, desferindo uma mordida precisa e veloz. Ela pode realizar este ataque natural em combate corpo a corpo com grande facilidade, Dano esmagante: 1d8 +Nível atual, Dificuldade de teste (DT):15.
{pigmento}*Garras Cortantes:*{/pigmento} Com um salto rápido, a Raposa desfere um golpe com suas garras dianteiras, mirando pontos frágeis do inimigo, Dano: 1d6 +Nível atual, Dificuldade de teste (DT):12.
{pigmento}*Evasão Instintiva:*{/pigmento} Acostumada a sobreviver, a Raposa pode usar sua agilidade para se esquivar de ataques e armadilhas. Sempre que for alvo de um ataque, ganha +1d8 no teste.
{pigmento}*Furtividade Natural:*{/pigmento} Em ambientes como florestas, campos e montanhas, a Raposa recebe um bônus de furtividade de 8+teste de Preservação.
{pigmento}*Faro Aguçado:*{/pigmento} Capaz de rastrear presas e inimigos a até 50 metros. DT para rastrear ou localizar inimigos escondidos: 8.`,
    bonus3:`Animal Comum
Elemento – Caos`,
    Magias: `Nenhuma.`,
    Passivas:`Nenhuma.`,
    Talentos: `Furtividade – Requisito: Agilidade, Percepção – Requisito: Libertação.`,
    Descricao:`A Raposa Selvagem é uma criatura ágil, inteligente e desconfiada, predominante nas florestas e campos das Terras de Calisto. Com pelagem avermelhada e olhos atentos, sobrevive caçando pequenos roedores e aves, usando a furtividade como sua principal arma.
Apesar de ser encontrada em quase todos os continentes, as raposas originárias de Elfnoria se destacam por sua pelagem mais densa e coloração branca, adaptadas ao frio das florestas élficas. Essas raposas possuem uma destreza superior e um faro apurado, tornando-se caçadoras ainda mais letais e difíceis de capturar.
Quando acuada, a Raposa Selvagem não hesita em usar sua velocidade e reflexos para reagir com ataques precisos ou simplesmente desaparecer na mata.`,
    img: "imagens/RaposaSelvagem.png",
    img2: "imagens/Token-RaposaSelvagem.png"
}
  
  
  
  
  ,"Alce Florenar": {
  vida: 12,
  sanidade: 8,
  especial: 0,
  armadura: 10,
  movimento: 13,
  vidaPorNivel: 2,
  sanidadePorNivel: 1,
  especialPorNivel: 0,
  armaduraPorNivel: 3,
  bru: 14, agi: 10, det: 12, pre: 16, lib: 14, cnx: 12,
  bruDano: 0, agiDano: 0, detDano: 0, preDano: 0, libDano: 0, cnxDano: 0,
  bruTest: 2, agiTest: 0, detTest: 1, preTest: 3, libTest: 2, cnxTest: 1,
  bonus: `Resistente: dano Mental
Vulnerável: dano Sombrio`,
  bonus2: `{pigmento}*Montaria:*{/pigmento} Permite ser montado, caso passe em um teste de Cavalgar - Requisito: Agilidade DT 13.
  {pigmento}*Chifre Florido:*{/pigmento} Um ataque cerimonial raro realizado apenas quando o Alce se sente ameaçado. Dano esmagante: 10+1d12.
{pigmento}*Despertar Floral:*{/pigmento} Uma vez por ano, durante o florescer das árvores em Elfinória, o Alce Florenar manifesta sua habilidade ancestral de montaria sagrada, permitindo que qualquer criatura montada nele viaje a 3x seu movimento, Requisito: Conexão DT 15 
{pigmento}*Montaria Sagrada:*{/pigmento} Criatura naturalmente domável para montaria em cerimônias, tarefas de arado e rituais élficos. Confere bônus narrativo de respeito e conexão espiritual com as forças da natureza.`,
  bonus3: `Animal Raro
Elemento – Caos`,
  Magias: `Nenhuma.`,
  Passivas: `Nenhuma.`,
  Talentos: `Nenhuma.`,
  Descricao: `Os Alces Florenares caminham com majestade silenciosa, ostentando chifres que se ramificam como galhos floridos de árvores encantadas. Pequenas flores brotam de suas pontas, caindo suavemente pelo caminho e exalando um perfume adormecedor. São considerados presságios de sonhos ou de revelações futuras.

Originários da região ocidental de Calisto, em Elfinória — a Terra dos Lyrithil —, esses alces já foram usados como mascotes espirituais, montarias sagradas e até para o arado em rituais de fertilidade. Apesar de sua aparência frágil, sua conexão com a terra lhes concede uma resistência notável, e poucos são dignos de montar um Alce Florenar.`,
  img: "imagens/AlceFlorenar.png",
  img2: "imagens/Token-AlceFlorenar.png"
}

  
,"Andaluz": {
  vida: 30,
  sanidade: 12,
  especial: 8,
  armadura: 1,
  movimento: 10,
  vidaPorNivel: 10,
  sanidadePorNivel: 6,
  especialPorNivel: 2,
  armaduraPorNivel: 1,
  bru: 14, agi: 17, det: 12, pre: 9, lib: 8, cnx: 11,
  bruDano: 2, agiDano: 2, detDano: 1, preDano: 0, libDano: 0, cnxDano: 1,
  bruTest: 2, agiTest: 3, detTest: 1, preTest: -1, libTest: -2, cnxTest: 1,
  bonus: `Resistente: dano de Tremor\nVulnerável: dano de Tempestade`,
  bonus2: `{pigmento}*Montaria:*{/pigmento} Permite ser montado, caso passe em um teste de Cavalgar - Requisito: Agilidade DT 12.
{pigmento}*Passo Gracioso:*{/pigmento} Ignora penalidades de terreno acidentado e recebe +2 em testes de Equilíbrio.
{pigmento}*Instinto de Proteção:*{/pigmento} Uma vez por turno, pode interceptar um ataque contra o cavaleiro, reduzindo o dano em 50% e ganhando +2 de Defesa por 1 turno.`,
bonus3: `Montaria
Elemento – Fé`,
  Magias: `Nível 5 – Sacrifício de Vida\nCavalo branco (Nível 11) – Levitação da Serenidade\nCavalo preto (Nível 11) – Tentáculos Sombrios.`,
  Passivas: `Nível 3 – Força Gélida`,
  Talentos: `Percepção, Sobrevivência`,
  Descricao: `Os cavalos Andaluz são uma das raças mais antigas e comuns a galopar pelos vastos campos verdes do continente. [...]
  Sua amizade pode durar toda a vida, sendo uma fonte constante de força e proteção.`,
  img: "imagens/Andaluz.png",
  img2: "imagens/Token-Andaluz.png"
},  
"Vannir": {
  vida: 25,
  sanidade: 10,
  especial: 6,
  armadura: 1,
  movimento: 12,
  vidaPorNivel: 6,
  sanidadePorNivel: 4,
  especialPorNivel: 2,
  armaduraPorNivel: 1,
  bru: 13, agi: 15, det: 12, pre: 11, lib: 10, cnx: 14,
  bruDano: 1, agiDano: 1, detDano: 0, preDano: 0, libDano: 0, cnxDano: 2,
  bruTest: 1, agiTest: 2, detTest: 1, preTest: 0, libTest: 0, cnxTest: 2,
  bonus: `Resistente: dano de Caos\nVulnerável: dano de Eletricidade`,
  bonus2: `{pigmento}*Montaria:*{/pigmento} Permite ser montado, caso passe em um teste de Cavalgar - Requisito: Agilidade DT 14.
{pigmento}*Bolha Protetora:*{/pigmento} Cria uma bolha de ar ao redor do cavaleiro, permitindo respiração e conjuração submersa por até 10 minutos.
{pigmento}*Movimento Aquático:*{/pigmento} Anda 12m em terra, 20m em água rasa e 30m submerso. Recebe +2 em testes de movimentação aquática.`,
bonus3: `Montaria
Elemento – Caos`,
  Magias: `Nenhuma.`,
  Passivas: `{pigmento}AFOGAR:{/pigmento} Teste do Conjurador: Preservação | Teste do Alvo: Determinação.`,
  Talentos: `Percepção, Sobrevivência`,
  Descricao: `Originário das regiões costeiras de Marstrøm, Fiskehavn e Saonasjørand — lares ancestrais dos elfos das profundezas e dos tritões —, o Vannir é uma criatura singular, muitas vezes confundida com o lendário hipocampo. No entanto, ao contrário destes, o Vannir possui pernas de cavalo perfeitamente desenvolvidas, capazes de galopar firme em solo firme, enquanto seu corpo é coberto por escamas azul-esverdeadas que brilham sob a luz do sol ou das algas luminescentes do fundo do mar. Algumas dessas escamas são marcadas por antigas runas, testemunhos de batalhas e pactos selados com as forças abissais.
Comum entre os Glublorps e elfos submersos, os Vannir são domesticados desde jovens, sendo presença constante nos portos de AskVillGlubrust’s e nas profundezas de Havlýrien. Quando imersos até a cintura, movem-se com mais liberdade que em terra, atingindo velocidades impressionantes ao mergulharem, tornando-se ideais para patrulhas aquáticas e missões de exploração.
O Vannir protege seu cavaleiro com uma bolha de ar criada por sua glândula branquial lateral, permitindo respiração e conjuração subaquática. Por essa razão, é considerado uma montaria vital em qualquer travessia profunda. Embora silenciosos e serenos, são capazes de se defender ferozmente quando ameaçados, e há registros de um Vannir afogando invasores que tentaram aprisioná-lo.
Raros fora de seus habitats nativos, esses seres são respeitados como símbolos de equilíbrio entre terra e mar — um elo vivo entre o mundo seco e o abissal.`,
  img: "imagens/Vannir.png",
  img2: "imagens/Token-Vannir.png"
}
,



"Zafhir-Thandral": {
  vida: 28,
  sanidade: 10,
  especial: 5,
  armadura: 2,
  movimento: 30,
  vidaPorNivel: 7,
  sanidadePorNivel: 4,
  especialPorNivel: 1,
  armaduraPorNivel: 1,
  bru: 15, agi: 18, det: 13, pre: 12, lib: 11, cnx: 13,
  bruDano: 2, agiDano: 2, detDano: 1, preDano: 1, libDano: 0, cnxDano: 1,
  bruTest: 2, agiTest: 3, detTest: 1, preTest: 1, libTest: 0, cnxTest: 1,
  bonus: `Resistente: dano de Tremor\nVulnerável: dano de Caos`,
  bonus2: `{pigmento}*Montaria:*{/pigmento} Permite ser montado, caso passe em um teste de Cavalgar - Requisito: Agilidade DT 16.
{pigmento}*Avanço Esmagador:*{/pigmento} Avança em linha reta com força total, causando 20 + 1d20 de dano esmagante.
{pigmento}*Surto Relâmpago:*{/pigmento} Magia de eletricidade (Elemento do Poder, possível influência do Caos). Teste do conjurador: Conexão. Teste do alvo: Agilidade.`,
bonus3: `Montaria
Elemento – Poder`,

  Magias: `Surto Relâmpago (Elemento: Eletricidade | Teste do Conjurador: Conexão | Teste do Alvo: Agilidade)`,
  Passivas: `{pigmento}Ódio:{/pigmento} Ganha +1d6 contra inimigos que já causaram dano a ele.
{pigmento}Teleporte Repentino:{/pigmento} Teleporta-se com seu cavaleiro aleatoriamente a até 10 metros. Não pode ser controlado.`,
  Talentos: `Atletismo, Percepção`,
  Descricao: `Nativo das planícies escaldantes e savanas abertas de Sultan LesteGronklech’sDurock’s, Zafhir-Thandral é uma raríssima criatura de linhagem selvagem e nobre. Possui pelagem laranja intensa coberta por pintas negras, frequentemente confundido com grandes felinos, o que causa engano fatal em predadores e caçadores desavisados. Seu pescoço grosso e musculoso, unido ao corpo esguio e firme, permite-lhe manobras de alta velocidade e resistência em terrenos áridos.
Embora poucos o montem fora de suas terras natais, Thandral é altamente valorizado entre caçadores, líderes tribais e, ocasionalmente, até por gigantes das montanhas de DrønnjernThudrok’s — embora apenas os maiores exemplares possam suportar tais cavaleiros. Nos portos de Grã Teach, sua imagem aparece em brasões e tapeçarias como símbolo de força incontrolável.
Durante o combate, Zafhir-Thandral pode realizar investidas relâmpago devastadoras, usando seus pequenos chifres e cascos fortalecidos para causar dano esmagador. Alguns estudiosos afirmam que sua ligação com os elementos é instável, o que explicaria sua afinidade com a magia do Surto Relâmpago, apesar de seu corpo ser pura expressão do Poder. Há indícios de que essa anomalia venha de uma ancestralidade esquecida relacionada ao Caos.
Rápido, feroz e livre, Thandral representa a selvageria incontrolável da savana — um espírito que só se curva diante da verdadeira conexão.`,
  img: "imagens/Zafhir.png",
  img2: "imagens/Token-Zafhir.png"
}
,



  
"Skýfurr": {
  vida: 35,
  sanidade: 15,
  especial: 10,
  armadura: 2,
  movimento: 15,
  movimentoVoo: 20,
  vidaPorNivel: 9,
  sanidadePorNivel: 6,
  especialPorNivel: 3,
  armaduraPorNivel: 1,
  bru: 16, agi: 19, det: 14, pre: 13, lib: 11, cnx: 12,
  bruDano: 2, agiDano: 3, detDano: 1, preDano: 1, libDano: 0, cnxDano: 1,
  bruTest: 2, agiTest: 4, detTest: 2, preTest: 1, libTest: 0, cnxTest: 1,
  bonus: `Resistente: dano de Tempestade\nVulnerável: dano de Caos`,
  bonus2: `{pigmento}*Montaria:*{/pigmento} Permite ser montado, caso passe em um teste de Cavalgar - Requisito: Agilidade DT 20.
{pigmento}*Investida Aérea:*{/pigmento} Voo em linha reta causando 25 + 1d8 de dano esmagante.
{pigmento}*Garras e Coices:*{/pigmento} Ataques corpo a corpo com 14 + 1d12 de dano.
{pigmento}*Voo:*{/pigmento} Pode voar 20m por turno. Ataques e reações durante o voo têm desvantagem. Alterar altitude consome metade do movimento.`,
bonus3: `Montaria
Elemento – Desconhecido`,

  Magias: `Nenhuma.`,
  Passivas: `Nenhuma.`,
  Talentos: `Sobrevivência, Atletismo`,
  Descricao: `Originário da lendária Ilha do Céu e das regiões elevadas acima do King Vórtex, Skýfurr é uma criatura ancestral que evoluiu junto aos antigos habitantes dos continentes flutuantes, como os Krahzhik – IgnisAlatus e os Skywalkers – Flumplux. Sua aparência é a de um imponente mamífero alado, com asas que brotam das costas de maneira natural ou, como alguns creem, por meio de magia antiga e esquecida.
Possui pelagem leve e sedosa que ajuda na aerodinâmica, além de patas traseiras poderosas para decolagens abruptas. Seu voo é estável, mas requer do cavaleiro concentração e domínio da arte de montar em movimento aéreo. Por isso, qualquer ação ofensiva ou reação em pleno voo é feita com desvantagem, e controlar sua altitude consome parte do deslocamento.
Skýfurr é usado com frequência para vigiar as passagens aéreas de Eldoria fragmentada e transportes urgentes entre as ilhas do céu. Quando em combate, utiliza investidas aéreas e ataques coordenados com suas garras e coices, tornando-se um predador letal mesmo sem cavaleiro.
Seu temperamento é reservado, e aceitar ser montado exige uma conexão emocional profunda, além de preparo físico do cavaleiro. Alguns Skýfurr desenvolveram raciocínio quase racional, sendo capazes de entender ordens complexas e tomar decisões autônomas em batalha.
Essas criaturas são as sentinelas do céu — livres, solenes e praticamente inalcançáveis para quem vive preso ao chão.`,
  img: "imagens/Skýfurr.png",
  img2: "imagens/Token-Skýfurr.png"
}
,


  

"Albitaur": {
  vida: 55,
  sanidade: 17,
  especial: 12,
  armadura: 2,
  movimento: 15,
  vidaPorNivel: 13,
  sanidadePorNivel: 5,
  especialPorNivel: 3,
  armaduraPorNivel: 0.33,
  bru: 22, agi: 16, det: 15, pre: 13, lib: 14, cnx: 10,
  bruDano: 2, agiDano: 2, detDano: 1, preDano: 1, libDano: 1, cnxDano: 0,
  bruTest: 5, agiTest: 3, detTest: 2, preTest: 1, libTest: 2, cnxTest: 0,
  bonus: `Resistente: Tremor
Vulnerável: Maldição
Imune: Luz`,
 bonus2: `{pigmento}*Montaria:*{/pigmento} Permite ser montado, caso passe em um teste de Conexão (DT 25).
{pigmento}*Garras do Tigre:*{/pigmento} Ataques físicos causam crítico com 18, +2d8 no dano critíco.
{pigmento}*Olhar Intimidante:*{/pigmento} Encarada penetrante que abala o emocional do inimigo (uso único por combate): em falha crítica, o alvo foge em pânico; com resultado abaixo de 5, hesita e perde seus bônus naquele turno.`,

  bonus3:`Descendente dos centauros

Elemento – Desconhecido`,
  Magias: `Nível 1 – Fogo Vivo
Nível 4 – Sombra Animal
Nível 7 – Órgãos Sombrios`,
  Passivas:`Nível 2 – Controle Adestrado
Nível 3 – Selvageria`,
  Talentos: `Arcos e Bestas, Percepção, Atletismo.`,
  Descricao:`Os Albitaur são criaturas imponentes com o tronco de um tigre branco e uma cabeça que remete a um tigre, dando-lhes uma aparência majestosa e única. Esses seres velozes e ferozes vivem nas vastas planícies, onde erguem aldeias em tocas e desenvolvem civilizações sofisticadas. Cada tribo é liderada por um rei distinto, refletindo uma estrutura hierárquica bem organizada e uma sociedade rica em funções e responsabilidades.
Extremamente hábeis em combate, os Albitaur são conhecidos por sua Agilidade com arcos e flechas, que utilizam para proteger seus territórios. Eles são cuidadosos e reservados, evitando contato com espécies que não conhecem. Este comportamento cauteloso é um resquício dos dias em que piratas invadiam o continente leste para caçá-los, buscando vender seus cascos valiosos. Embora a demanda por esses cascos tenha diminuído com a descoberta de um minério mais precioso, os cascos dos Albitaur ainda possuem propriedades mágicas cujas características foram esquecidas ao longo do tempo.
Os Albitaur combinam brutalidade e inteligência com um profundo sentido de preservação. Eles defendem suas terras com fervor e mantêm sua cultura intacta frente a ameaças externas, garantindo a continuidade de sua sociedade e tradições.`,
  img: "imagens/Albitaur.png",
  img2: "imagens/Token-Albitaur.png"
}

  
  
  ,"Doggers": {
    vida: 25,
    sanidade: 10,
    especial: 8,
    armadura: 1,
  movimento:9,
    vidaPorNivel: 12,
    sanidadePorNivel: 4,
    especialPorNivel: 2,
    armaduraPorNivel: 3,
    bru: 14, agi: 10, det: 8, pre: 13, lib: 9, cnx: 17,
    bruDano: 1, agiDano: 0, detDano: 0, preDano: 1, libDano: 0, cnxDano: 2,
    bruTest: 2, agiTest: 0, detTest: -2, preTest: 1, libTest: -1, cnxTest: 3,
    bonus: `Resistente: dano de Mental
    Vulnerável: dano de Escuridão`,
    bonus2: `{pigmento}*Latido amistoso:*{/pigmento} Eles podem ecoar um som que chama a atenção de outros doggers próximos, que surgem para auxiliar no combate. Essas criaturinhas patrulham em grupos de 3 a 5, sendo que um deles sempre tem de 2 a 5 níveis a mais que os demais, atuando como o líder. Os que forem atraídos e ainda não estiverem na fila de iniciativa entram no final da fila.
    {pigmento}*Ataque conjunto:*{/pigmento} se houver 2 ou mais próximos de um alvo eles podem atrasar sua ação para atacar ao mesmo tempo com vantagem – teste de Agilidade.
    {pigmento}*Postura animal:*{/pigmento} pode entrar em uma postura bípede, dobrando sua movimentação, não é possível usar armas enquanto nessa postura.`,
    bonus3: `Doggers
    Elemento – Caos`,
    Magias: `Nível 4 – Sombra animal, nível 5 – Sacrifício de vida`,
    Passivas: `Nível 1 – Selvageria`,
    Talentos: `Escudos`,
    Descricao: `Os Doggers são pequenos humanoides, com altura máxima de 1,30 metros, que habitam campos amplos e verdes, pastagens e, ocasionalmente, se aventuram nas fronteiras de sociedades mais desenvolvidas. Embora não falem nenhuma língua conhecida, se comunicam por meio de latidos, rosnados e gestos, o que dá a impressão de um comportamento canino. Apesar dessa comunicação peculiar, os Doggers possuem um forte espírito de comunidade e sociedade, vivendo em grupos coesos e demonstrando grande lealdade uns aos outros.
    Essas criaturas constroem pequenas vilas improvisadas, geralmente feitas de palha e materiais simples encontrados na natureza. Suas habitações são modestas, refletindo seu estilo de vida mais isolado e primitivo. Eles preferem viver distantes de raças mais inteligentes e tecnológicas, preferindo o conforto de suas pequenas vilas em campos abertos. No entanto, alguns Doggers mais curiosos e aventureiros podem ser encontrados explorando os limites de cidades e vilarejos, sempre mantendo um ar de curiosidade e cautela.
    Os Doggers adoram perseguir pequenos animais peludos, não por instinto predatório, mas por pura diversão. Eles brincam de correr atrás de coelhos, esquilos e outras criaturas menores, e muitas vezes fazem disso um passatempo comunitário. Essa tendência a perseguir animais peludos é uma das características mais notáveis de sua personalidade lúdica e despreocupada.
    Existe um ditado popular entre os habitantes das áreas rurais: “Onde há um Dogger, há muitos outros.” Isso se deve ao fato de que essas criaturas raramente são vistas sozinhas. Eles se movem em grupos, sempre acompanhados de seus companheiros, e exibem um senso de unidade que os torna difíceis de lidar em situações de perigo.
    Embora não pareçam agressivos à primeira vista, os Doggers podem se tornar caçadores implacáveis quando ameaçados ou quando alguém interfere em suas brincadeiras ou caças. Quando enfurecidos, eles coordenam ataques rápidos e precisos, utilizando sua velocidade e agilidade para cercar e derrubar suas presas. Apesar de seu tamanho diminuto, sua ferocidade em grupo e determinação podem surpreender qualquer adversário desavisado.
    Os Doggers são uma raça enigmática, ao mesmo tempo amigável e feroz, que prefere a simplicidade da vida em grupo nos campos abertos, mas que não hesitará em defender seu território e sua comunidade com uma força que contrasta com sua aparência dócil.`,
    img: "imagens/Doggers.png",
    img2: "imagens/Token-Doggers.png"
}
  
  
  
  ,"Antigos Esquecidos": {
    vida: 5,
    sanidade: 7,
    especial: 2,
    armadura: 1,
  movimento:6,
    vidaPorNivel: 5,
    sanidadePorNivel: 3,
    especialPorNivel: 2,
    armaduraPorNivel: 3,
    bru: 14, agi: 14, det: 15, pre: 9, lib: 11, cnx: 8,
    bruDano: 1, agiDano: 1, detDano: 1, preDano: 0, libDano: 1, cnxDano: 0,
    bruTest: 2, agiTest: 2, detTest: 2, preTest: -1, libTest: 1, cnxTest: -2,
    bonus: `Imune: dano de Sangue
    Vulnerável: dano de Sagrado, dano de Fogo`,
    bonus2: `{pigmento}*Inoportuno:*{/pigmento} Após ser derrotado, fica morto por 5 turnos. Se não tiver seus ossos queimados ou for exorcizado, volta à vida com 5 de vida. Seus ossos se remontam e um brilho os faz ficar em pé.
    {pigmento}*Almas protetoras:*{/pigmento} Cada turno em combate tenta remontar sua alma original, ganhando uma parte dela todo turno. Recebe 1d10 de vida temporária (máximo de 50 de vida temporária proveniente dessa passiva).
    {pigmento}*Memória muscular:*{/pigmento} As memórias da vida passada ainda não retornaram completamente. Ao atacar com um soco torto, os ossos quebrados rasgam o alvo, causando 1d12 de dano cortante (Teste de Agilidade).`,
    bonus3: `Antigos Esquecidos
    Elemento – Poder`,
    Magias: `Nível 7 – Almas perturbadas`,
    Passivas: `Nível 1 – Consumir`,
    Talentos: `Intimidação - Requisito: Conexão`,
    Descricao: `Os Antigos Esquecidos são criaturas reanimadas por almas sem corpo, que vagam sem descanso até encontrar um aglomerado de ossos para habitar. Essas almas misteriosas surgem de antigos falecidos e mimetizam uma forma humanoide ao reorganizar os ossos que encontram em seu caminho. Nascidos do elemento Poder, esses seres não possuem um nome exato, pois ninguém sabe ao certo a identidade ou a origem das almas que os movem. Sua presença é sempre hostil e ameaçadora, e a forma esquelética que assumem esconde um poder crescente e sombrio.
    Esses esqueletos surgem quando há um amontoado de ossos, especialmente em lugares esquecidos como cemitérios antigos ou ruínas abandonadas. Inicialmente, sua Determinação é frágil, e seus ossos são facilmente despedaçados, mas conforme o tempo passa, a ligação levitacional que sustenta seu corpo se fortalece, tornando os esqueletos mais resistentes e difíceis de destruir. Esse processo gradual faz dos Antigos Esquecidos uma ameaça crescente com o passar do tempo, especialmente se não forem eliminados rapidamente.
    Essas criaturas são particularmente vulneráveis a ataques de fogo e magia sagrada, que podem exorcizar ou destruir seus corpos. Quando um Esquecido é derrotado, uma aura brilhosa permanece onde ele caiu, um indício de que sua alma ainda está presa ao mundo material. Se não for atingido por fogo ou magia sagrada para selar seu destino, o Esquecido renascerá, tornando-se um pesadelo constante para aqueles que cruzam seu caminho.
    A presença dos Antigos Esquecidos é aterrorizante, especialmente em cemitérios, onde são conhecidos por assombrar os vivos. Sua capacidade de se regenerar torna a luta contra eles exaustiva e desesperadora. Por essa razão, muitos povos preferem cremar os corpos de seus entes queridos ou realizar rituais especiais de proteção, na esperança de impedir o surgimento dessas criaturas amaldiçoadas.
    Para aqueles que os enfrentam, os Antigos Esquecidos são um lembrete cruel de que até os mortos podem se tornar uma ameaça. Sua forma macabra e sua persistência sobrenatural os tornam o terror de lugares onde a morte se acumulou, e qualquer tentativa de ignorar ou minimizar sua presença pode ter consequências fatais.`,
    img: "imagens/AntigosEsquecidos.png",
    img2: "imagens/Token-AntigosEsquecidos.png"
}
  
  
  
  ,"Yonkis": {
    vida: 33,
    sanidade: 11,
    especial: 5,
    armadura: 4,
  movimento:7,
    vidaPorNivel: 11,
    sanidadePorNivel: 3,
    especialPorNivel: 1,
    armaduraPorNivel: 3,
    bru: 17, agi: 8, det: 13, pre: 10, lib: 8, cnx: 15,
    bruDano: 2, agiDano: 0, detDano: 1, preDano: 0, libDano: 0, cnxDano: 1,
    bruTest: 3, agiTest: -2, detTest: 1, preTest: 0, libTest: -2, cnxTest: 2,
    bonus:`Resistente: Tempestade
    Resistente: Cortante
    Vulnerável: Balístico`,
    bonus2: `{pigmento}*Pele Dura:*{/pigmento} Quando ameaçados, os Yonkis usam suas crostas de sujeira para se proteger, enrijecendo sua pele. Possuem 4 de armadura base.
{pigmento}*Respiração Tortuosa:*{/pigmento} Pode sentir a presença de inimigos mesmo invisíveis ou escondidos, +4 em Percepção.
{pigmento}*Cabeçada - teste de Agilidade:*{/pigmento} Uma cabeçada extremamente forte que causa 2d12 de dano esmagante.`,
    bonus3:`Caçadores de Plantios
Elemento - Caos`,
    Magias: `Nível 4 - Dominação da Água.`,
    Passivas:`Nível 1 - Preguiça Ativa (sempre sem custo).`,
    Talentos: `Obter Informação - Requisito: Conexão, Percepção - Requisito: Libertação.`,
    Descricao:`Os Yonkis são criaturas que se assemelham a porcos, com uma variedade que inclui tanto indivíduos bípedes quanto quadrúpedes. Muitos estudiosos acreditam que os Yonkis compartilham uma ancestralidade com os “Gronklech – Durock“, devido à semelhança física entre as duas raças. No entanto, os Yonkis possuem diferenças significativas em seus hábitos e ambiente, vivendo principalmente em regiões aquosas e lamacentas.
Eles possuem uma relação única com a água, manipulando-a para cultivar plantas e cuidar de pântanos ou terrenos férteis que encontram em seus arredores. Esses seres, apesar de sua aparência robusta e sua pele dura, são surpreendentemente habilidosos no manejo da vegetação e na criação de pequenos jardins que sustentam sua dieta estritamente vegana. Os Yonkis adultos, após atingirem a maturidade, tendem a migrar para áreas afastadas da civilização, onde formam famílias e criam seus filhotes em relativo isolamento.
O ciclo de vida dos Yonkis é marcado por uma transição importante: durante o período de crescimento de seus filhotes, os pais, que normalmente se alimentam apenas de plantas, adotam um comportamento muito mais agressivo e predatório. Nesse estágio, caçam carcaças ou animais vivos para garantir que seus filhos cresçam saudáveis e fortes. Este é um período perigoso para qualquer criatura que cruzar o caminho de um Yonki em busca de alimento, pois eles se tornam ferozmente protetores e violentos, dispostos a usar qualquer meio necessário para garantir a sobrevivência de sua prole.
Quando os filhotes atingem a maturidade, retornam com seus pais aos grupos maiores de Yonkis, onde o líder da tribo julga se o jovem será aceito ou banido. Esse rito de passagem é crucial para a integração dos jovens Yonkis na sociedade.
Os Yonkis adultos, especialmente os que estão em busca de alimento para seus filhotes, são conhecidos por sua agressividade e suas habilidades de combate. Lutam utilizando porretes improvisados, suas cabeças para aplicar poderosas cabeçadas, ou dominando a água para criar ataques que confundem e afogam seus inimigos. Sua pele grossa e resistente os torna alvos difíceis, mas alguns caçadores ousados os caçam com armas de fogo, utilizando-os como alimento em algumas culturas. Portanto, ao encontrar um Yonki, é essencial observar em que fase de sua vida ele se encontra – se for um Yonki adulto em busca de alimento, o melhor é evitar o confronto.`,
    img: "imagens/Yonkis.png",
    img2: "imagens/Token-Yonkis.png"
}
  
  
  
  
  ,"Splendianos": {
    vida: 65,
    sanidade: 20,
    especial: 15,
    armadura: 1,
  movimento:6,
    vidaPorNivel: 10,
    sanidadePorNivel: 4,
    especialPorNivel: 2,
    armaduraPorNivel: 2,
    bru: 8, agi: 12, det: 11, pre: 16, lib: 14, cnx: 10,
    bruDano: 0, agiDano: 1, detDano: 1, preDano: 2, libDano: 1, cnxDano: 0,
    bruTest: -2, agiTest: 1, detTest: 1, preTest: 3, libTest: 2, cnxTest: 0,
    bonus:`Resistente: Fogo
    Imune a dano de: Água
    Vulnerável: Eletricidade`,
    bonus2:`{pigmento}*Coleção Sagrada*{/pigmento} Splendianos podem manter até 2 itens coletados brilhando com uma aura rosa e levitá-los no próprio turno. Esses itens ganham vantagem em testes de Agilidade e causam +4 de dano de Aura se usados para atacar.
    Splendianos podem roubar um item na casa de seus chefes e torna-los um item de sua {pigmento}*coleção sagrada.*{/pigmento}`,
    bonus3:`Ilusionistas de Pratas
    Elemento - Poder`,
    Magias: `Nível 6 - Poltergeist.`,
    Passivas: `Nível 1 - Afogar - Pode usar uma vez por combate sem custo e com vantagem.`,
    Talentos: `Intimidação - Requisito: Conexão.`,
    Descricao:`Os Splendianos são uma raça humanoide inspirada no Betta Splendens, com características que lembram peixes de cores vibrantes e formas elegantes. Com escamas brilhantes e barbatanas que se assemelham a mantos ondulantes, são seres orgulhosos e profundamente territoriais, mas com uma natureza paradoxalmente amável e servil quando em sociedade.
Originários das profundezas de lagos cristalinos e rios profundos, os Splendianos costumam deixar seu habitat aquático para habitar temporariamente em lares humanos. Apesar de sua natureza reclusa e levemente enigmática, eles se oferecem para servir voluntariamente, sem discriminar ou julgar os humanos com quem interagem. Essa característica os faz aparecer em momentos inesperados, onde cozinham, limpam, lavam e arrumam com uma dedicação impressionante.
Uma curiosidade sobre os Splendianos é seu hábito peculiar de furtar discretamente pratarias e pequenos objetos da casa onde estão servindo, os quais consideram “objetos sagrados”. Mesmo que suas ações possam parecer maliciosas, eles não fazem isso por maldade, mas por um profundo senso de reverência. Para eles, esses itens são sinais de suas relações e do ambiente que habitam, mantendo uma conexão com o mundo dos humanos ao qual se dedicaram por breves momentos.
Apesar dessa natureza amável e servil, os Splendianos podem se tornar ferozmente hostis quando afrontados ou quando alguém tenta tomar seus “objetos sagrados”. Nessas situações, eles defendem a propriedade de seus anfitriões contra qualquer invasor com a mesma intensidade que dedicam ao serviço. A presença deles é sempre temporária, pois nunca permanecem mais de 24 horas em uma propriedade antes de retornar ao mar ou ao rio de onde vieram. Raramente voltam ao mesmo local, e quando o fazem, é improvável que sejam os mesmos Splendianos de antes, mantendo um ar de mistério sobre seu povo e suas intenções.
Embora existam raças tritônicas no mundo, os Splendianos se diferenciam por sua comunicação limitada. Conversam apenas entre si e, mesmo assim, de forma raríssima, preferindo o silêncio e as ações ao diálogo. Sua passagem pelos lares humanos é vista como um presságio de proteção temporária, um fenômeno curioso e quase ritualístico que intriga e, por vezes, assusta aqueles que têm o privilégio de testemunhá-los em ação.`,
    img: "imagens/Splendianos.png",
    img2: "imagens/Token-Splendianos.png"
}
  
  
  
  
  
  ,"Griffinhalf": {
    vida: 68,
    sanidade: 24,
    especial: 15,
    armadura: 3,
  movimento:11,
    vidaPorNivel: 15,
    sanidadePorNivel: 4,
    especialPorNivel: 3,
    armaduraPorNivel: 2,
    bru: 14, agi: 13, det: 25, pre: 14, lib: 11, cnx: 8,
    bruDano: 1, agiDano: 1, detDano: 2, preDano: 1, libDano: 1, cnxDano: 0,
    bruTest: 2, agiTest: 1, detTest: 6, preTest: 2, libTest: 1, cnxTest: -2,
    bonus: `Resistente: Alma
Vulnerável: Distorção
Imune: Maldição`,
    bonus2: `{pigmento}*Aura Dourada:*{/pigmento} As armas dos Griffinhalf brilham com uma luz dourada sempre que estão em combate, adicionando +3 de dano de Luz. Enquanto estiver a até 10 metros de um aliado, ganha vantagem em testes de ataque.
{pigmento}*Sentinela dos Céus:*{/pigmento} Pode {pigmento}*voar*{/pigmento} 12 metros em linha reta como ação bônus uma vez por turno, sem provocar ataques de oportunidade.
{pigmento}*Espírito Guardião:*{/pigmento} Como ação, escolhe um aliado visível até 15 metros e o protege, concedendo resistência a dano físico (corte, perfuração e esmagamento) por combate, enquanto visível. Só pode proteger um por vez e usar uma vez por combate.
{pigmento}*Golpe Dourado:*{/pigmento} Como ação bônus, realiza um ataque com armas encantadas e adiciona 1d10 de dano sagrado. Precisa descansar 1 rodada para usar novamente.`,
    bonus3: `Guardiões de Skypia
Elemento - Fé`,
    Magias: `Nível 3 - Consagrar Divino
Nível 5 - Benção Antiga`,
    Passivas: `Nível 2 - Salvaguarda`,
    Talentos: `Cavalgar - Requisito: Agilidade,
Conhecimento - Requisito: Preservação.`,
    Descricao: `Nas florestas que cercam as ilhas flutuantes de Terras de Calisto, encontram-se os enigmáticos Griffinhalf, guardiões das lendárias Cidades Douradas de Skypia. Embora a existência dessas cidades continue sendo um mistério, os Griffinhalf acreditam com uma fé inabalável que elas são reais e que seu dever é proteger esse antigo legado, herança de um mítico Rei Dourado. Suas ações são dedicadas a manter as entradas das cidades escondidas e a proteger as florestas que as cercam.
É amplamente conhecido que existem ilhas flutuantes nos céus dessas terras, mas até mesmo os habitantes das ilhas raramente exploram seus mistérios mais profundos. Os Griffinhalf atuam como guardiões invisíveis, rondando as florestas e agindo de maneira quase espectral, cobrindo as ilhas com uma aura de mistério. Muitos acreditam que suas ações não passam de memórias ecoantes de um tempo perdido, mas para os Griffinhalf, sua missão é sagrada e vital.
Essas criaturas têm a habilidade de voar e utilizam armas que brilham em dourado quando entram em combate, uma manifestação de seu vínculo espiritual com as Cidades Douradas. Apesar de serem calmos e falarem com pompa e lentidão, qualquer um que tente descobrir a entrada para Skypia será recebido com hostilidade e agressividade. Seus ataques são rápidos e precisos, e sua fé serve como uma força motriz, guiando seus corações e suas armas.
Estudiosos especulam que os Griffinhalf possam ser descendentes dos lendários Grifos, criaturas antigas que viveram antes da separação dos continentes. Embora sua aparência e papel tenham mudado ao longo dos milênios, sua função como guardiões permanece inalterada. Hoje, os Griffinhalf vivem como protetores das lendas e do legado de Skypia, zelando para que seus segredos continuem ocultos aos olhos do mundo.`,
    img: "imagens/Griffinhalf.png",
    img2: "imagens/Token-Griffinhalf.png"
}
  
  
  
  
  ,"Goblin Caotico": {
    vida: 42,
    sanidade: 26,
    especial: 10,
    armadura: 1,
  movimento:8,
    vidaPorNivel: 8,
    sanidadePorNivel: 3,
    especialPorNivel: 2,
    armaduraPorNivel: 4,
    bru: 8, agi: 18, det: 11, pre: 12, lib: 10, cnx: 14,
    bruDano: 0, agiDano: 2, detDano: 0, preDano: 1, libDano: 0, cnxDano: 0,
    bruTest: 0, agiTest: 4, detTest: 1, preTest: 1, libTest: 0, cnxTest: 2,
    bonus: `Resistente: Ácido
    Vulnerável: Luz
    Vulnerável: Psicológico`,
    bonus2: `{pigmento}*Brincadeira Mortal:*{/pigmento} O Goblin Caótico é mestre em ludibriar seus inimigos. Como uma ação bônus, ele pode criar uma ilusão momentânea para confundir um alvo em até 6 metros. O alvo deve passar em um teste de Determinação (DT 12) ou ficará Confuso até o final do próximo turno.
{pigmento}*Explosão Improvisada:*{/pigmento} Utilizando tudo ao seu redor como arma, o Goblin Caótico pode arremessar objetos aleatórios que explodem ao impacto. Ele faz um ataque à distância causando 2d6 de dano de Fogo ou de Ácido. Qualquer criatura a até 1 metro do alvo sofre metade desse dano.
{pigmento}*Especialização Goblinoide:*{/pigmento} Desde a infância, os Goblins Caóticos escolhem um caminho para aprimorar suas habilidades. Cada Goblin recebe um bônus diferente baseado em sua escolha:
    - Arqueiro: +4 em teste com armas de longo alcance, +6 em dano à distância.
    - Conjurador: +4 em danos com magias e +2 em testes.
    - Guerreiro: +3 em testes de Brutalidade e +4 em dano corpo a corpo.`,
    bonus3:`Elemento: Caos`,
    Magias: `Nível 3 - Sombra Animal, Nível 5 - Cogumelos Tóxicos`,
    Passivas: `Nível 1 - Bêbado, Nível 4 - Preguiça`,
    Talentos: `Armadilhas - Requisito: Agilidade, Enganação - Requisito: Conexão, Escavação - Requisito: Determinação.`,
    Descricao: `Os Goblins Caóticos são pequenas criaturas traiçoeiras que vivem para causar o máximo de confusão e destruição possível. Diferente de outros goblins, eles não possuem uma hierarquia definida ou uma sociedade organizada. Preferem viver no meio do caos, montando armadilhas elaboradas e realizando ataques-surpresa cheios de imprevisibilidade.
Sempre sorridentes e falantes, esses goblins não demonstram medo de absolutamente nada. Pelo contrário, adoram zombar de seus inimigos e se divertem com a própria destruição. Seus esconderijos são um verdadeiro campo minado, repletos de engenhocas instáveis e explosivos improvisados.
Apesar de sua aparência diminuta e frágil, subestimá-los é um erro fatal. Sua velocidade é impressionante, permitindo-lhes escapar de quase qualquer situação. Além disso, sua sorte parece ser sobrenatural, já que conseguem sair ilesos das situações mais absurdas, deixando para trás apenas o rastro do caos que criaram.
A presença de um Goblin Caótico em uma região costuma ser acompanhada por eventos estranhos, como incêndios misteriosos, quedas de estruturas e até mesmo surtos de loucura entre os habitantes locais. Muitos acreditam que eles são a personificação do azar e evitam cruzar seu caminho a qualquer custo.
Se você ouvir risadas estridentes ecoando na escuridão, tome cuidado: um Goblin Caótico pode estar por perto, pronto para transformar seu dia em um pesadelo imprevisível.`,
 _imgs: [
      "imagens/Goblin-BaixoEscalão.png",
      "imagens/Goblin-BaixoEscalão2.png",
      "imagens/Goblin-BaixoEscalão3.png"
    ],
    
    get img() {
      return this._imgs[Math.floor(Math.random() * this._imgs.length)];
    },

    _imgs2: [
      "imagens/Token-Goblin-BaixoEscalão.png",
      "imagens/Token-Goblin-BaixoEscalão2.png",
      "imagens/Token-Goblin-BaixoEscalão3.png",
      "imagens/Token-Goblin-BaixoEscalão4.png"
    ],

    get img2() {
      return this._imgs2[Math.floor(Math.random() * this._imgs2.length)];
    },

    // outros dados aqui também...
  }
  
 
  
  
  ,"Goblin Corrompido": {
      vida: 58,
      sanidade: 40,
      especial: 18,
      armadura: 3,
        movimento:7,
      vidaPorNivel: 12,
      sanidadePorNivel: 4,
      especialPorNivel: 4,
      armaduraPorNivel: 3,
      bru: 14, agi: 11, det: 18, pre: 12, lib: 16, cnx: 10,
      bruDano: 1, agiDano: 1, detDano: 2, preDano: 1, libDano: 2, cnxDano: 0,
      bruTest: 2, agiTest: 1, detTest: 4, preTest: 1, libTest: 3, cnxTest: 0,
      bonus: `Resistente: Escuridão
      Vulnerável: Distorção
      Imune: Tempestade`,
      bonus2: `{pigmento}*Invocar Almas Perdidas - teste de Determinação:*{/pigmento} O Goblin Corrompido conjura almas escuras que atormentam um inimigo em um raio de 12m. Se falhar no teste (DT 15), sofre _3d10 de dano de Energia_ por turno (3 turnos por alvo). O Goblin pode manter até _3 alvos_ sob esse efeito.

  {pigmento}*Fortificação Sombria:*{/pigmento} Como ação bônus, aumenta sua _Armadura em +2_ e ganha _resistência a dano Físico_ (Corte, Perfurante, Esmagamento) por _2 turnos_.

  {pigmento}*Golpe Fantasmal:*{/pigmento} Ao atacar, reduz a _Armadura do inimigo em 3_ e causa _+1d10 de dano de Plasma_.

  {pigmento}*Absorção Sombria:*{/pigmento} Se um inimigo morrer enquanto sofre de *Almas Perdidas*, o Goblin recupera _10 de Vida_ e _5 de Sanidade_. Além disso, seu próximo ataque causa _+1d10 de dano de Energia_.`,
  bonus3: `Goblin Corrompido - Mestre das Almas Perdidas
  Elemento – Poder`,
  Magias: `Nível 1 – Aura de Proteção e Mão Fantasma,
  Nível 3 – Abalo Sutil,
  Nível 5 – Pulso de Plasma`,
  Passivas: `Nível 1 – Vingança,
  Nível 5 – Separar a Alma`,
  Talentos: `Liderança - Requisito: Conexão`,
  Requisitos: `Conexão e Tática
  Preservação`,
  Descricao: "Os Goblins Corrompidos são o resultado de gerações de experimentos com forças espirituais e sombrias. Diferente de seus primos caóticos e trapaceiros, esses goblins evoluíram em meio a energias poderosas, transformando-se em conjuradores temidos e guerreiros sombrios. Sua pele esverdeada adquiriu tons escuros, emana uma energia azulada escura e seus olhos brilham em azul, um reflexo do poder que os acompanha.\n\nEles vivem em clãs ocultos, sempre liderados pelo mais forte entre eles. São estrategistas natos e prezam pela eficiência em batalha, utilizando tanto suas habilidades físicas aprimoradas quanto seu domínio sobre as almas perdidas. Quando atacam um inimigo, pequenas entidades espectrais surgem ao redor, corroendo sua energia vital até que nada reste.\n\nDiferente da maioria dos goblins, os Corrompidos não vivem pelo caos, mas sim pelo poder. Eles enxergam a vida como uma batalha constante e acreditam que apenas os mais fortes podem prosperar. Os aventureiros que ousam enfrentá-los devem estar preparados para lutar não apenas contra seus corpos aprimorados, mas também contra as almas atormentadas que os acompanham.\n\nSe você encontrar um Goblin Corrompido em combate, lembre-se: cada golpe que você der pode apenas fortalecer seu inimigo.",
    "img": "imagens/Goblin_Corrompido.png",
    "img2": "imagens/Token-Goblin_Corrompido.png"
  }
  
  
  ,"Vespa-Cogumelo": {
    "vida": 25,
    "sanidade": 1,
    "especial": 7,
    "armadura": 7,
    "movimento":12,
    "vidaPorNivel": 3,
    "sanidadePorNivel": 1,
    "especialPorNivel": 3,
    "armaduraPorNivel": 3,
"bru": 8, "agi": 14, "det": 10, "pre": 11, "lib": 8, "cnx": 8,
  "bruDano": 0, "agiDano": 2, "detDano": 0, "preDano": 1, "libDano": 0, "cnxDano": 0,
  "bruTest": -1, "agiTest": 3, "detTest": 1, "preTest": 1, "libTest": -1, "cnxTest": -1,
    "bonus": "Resistente: Veneno\nVulnerável: Fogo, Escuridão\nImune: Sono",
    "bonus2": "{pigmento}*Esporos Tóxicos:*{/pigmento} Inimigos em até 1,5m devem fazer um teste de Determinação (DT 12) ou sofrem 1d4 de dano de Ácido.\n{pigmento}*Chamado do Enxame:*{/pigmento} Se não sofrer dano por 3 turnos, emite um grito que chama 2 Vespas-Cogumelo (iguais a ela) no próximo turno.\n{pigmento}*Picada de Nectar:*{/pigmento} Causa 1d6 de dano perfurante. Se o alvo falhar em um teste de Determinação (DT 13), fica Confuso por 2 turnos.",
    "bonus3": "Criatura Corrompida\nElemento - Caos / Ácido",
    "Magias": "Nível 3 – Cogumelos Tóxicos",
    "Passivas": "Nível 2 – Ódio",
    "Talentos": "Armadilhas - Requisito: Agilidade",
    "Descricao": "Criada por um desequilíbrio fúngico mágico, a Vespa-Cogumelo é frágil individualmente, mas perigosa em grupo. Vive nas sombras de florestas e ruínas úmidas, crescendo em número quando ignorada. Seu corpo é leve e repleto de fungos venenosos, com asas barulhentas e um ferrão infeccioso. O ódio fúngico se manifesta quando vê outras criaturas, atacando sem hesitar mesmo que isso leve à sua morte. Se não for eliminada rapidamente, atrai outras, transformando um pequeno combate em um pesadelo de esporos.",
    "img": "imagens/VespaCogumelo.png",
    "img2": "imagens/Token-VespaCogumelo.png"
  },"Manifestação do Poder": {
  vida: 409,
  sanidade: 81,
  especial: 13,
  armadura: 15,
  movimento:12,
  vidaPorNivel: 9,
  sanidadePorNivel: 9,
  especialPorNivel: 9,
  armaduraPorNivel: 3,
  bru: 12, agi: 10, det: 22, pre: 16, lib: 99, cnx: 13,
  bruDano: 2, agiDano: 0, detDano: 2, preDano: 2, libDano: 18, cnxDano: 1,
  bruTest: 1, agiTest: 0, detTest: 4, preTest: 3, libTest: 30, cnxTest: 2,
  bonus: `Resistente: Caos
Vulnerável: Desconhecido, Fé
Imune: Poder`,
  bonus2: `{pigmento}*Corpo Ascendido:*{/pigmento} Transforma-se em energia pura por 2 turnos. Ataques físicos viram dano de Plasma, ignoram resistências. +4 dano, +2 testes de Brutalidade, +4 testes de Libertação. Sofre 1d10 de dano ao final do efeito.
{pigmento}*Almas Irradiantes:*{/pigmento} Invoca almas que disparam 3d10 de dano de Alma em até 2 inimigos por 3 turnos. Teste de Libertação (DT 16) ou ficam Atordoados. Se o inimigo morrer, recupera 20 Vida e 5 Sanidade.
{pigmento}*Pulso de Autoridade:*{/pigmento} A cada 3 turnos, explode aura de Plasma em 8m. Teste de Determinação (DT 17) ou sofre 4d10 de dano e é empurrado 6m. Metade do dano em sucesso.
{pigmento}*Domínio da Força Viva:*{/pigmento} Inimigo que sofre dano recebe **Marcado pela Força**. No 3º acúmulo, faz teste de Libertação (DT 18). Se falhar, explode em 6d10 de dano de Alma e não pode se curar por 2 turnos. Se passar, sofre metade.
{pigmento}*Reflexo do Vazio Silencioso:*{/pigmento} Uma vez por dia, ao atingir 0 de vida, teleporta para um receptáculo a até 18m. Ressurge com vida cheia, mas nível 0. Pode ser impedido com folhas secas e galhos ao redor da área.`,
  bonus3: `Entidade do Poder
Elemento - Poder`,
  Magias: `Nível 1 – Todas as Magias de Poder.`,
  Passivas: `Nível 2 – Todas as Passivas de Poder.`,
  Talentos: `Diplomacia - Requisito: Conexão
Percepção - Requisito: Libertação
Vigilância - Requisito: Libertação`,
  Descricao: `A Entidade do Poder é uma manifestação viva da força que ultrapassa o entendimento mortal. Seu corpo parece estar em constante instabilidade, oscilando entre carne e pura energia pulsante. Cada passo que dá deixa marcas fundidas no solo, e sua presença distorce a realidade ao redor como se o mundo não estivesse preparado para contê-la.
Ela não fala com palavras, mas com ondas de energia que invadem a mente daqueles que a encaram. Seu olhar é como o plasma vivo de uma estrela prestes a colapsar, e sua voz ressoa como mil gritos ecoando de uma única garganta. A Entidade do Poder não negocia, não hesita, não cede.
Costuma manifestar objetos ao seu redor como reflexos de sua própria essência — estátuas imponentes que irradiam energia, fragmentos de armaduras colossais ou mesmo figuras de pessoas mais fracas que já destruiu, recriadas apenas para que sejam esmagadas novamente. As manifestações mais comuns são estátuas de gárgulas, brinquedos antigos ou objetos do cotidiano que passam a irradiar um brilho azul cósmico, tornando-se receptáculos temporários de seu poder.
Essas criações não passam de símbolos: lembranças do que foi vencido e humilhado diante de sua presença. Embora não seja sua verdadeira forma, esses avatares são poderosos o suficiente para devastar cidades. Sua forma real é puramente cósmica, uma entidade de energia e presença tão intensa que sua simples aparição verdadeira destruiria o mundo — por isso, ela só se manifesta por meio de receptáculos.
Se uma de suas manifestações for destruída, a entidade pode entrar em estado de dormência. Durante esse tempo, todas as magias, habilidades e forças ligadas ao elemento Poder tornam-se mais frágeis ou instáveis, como se o mundo sentisse a ausência de sua presença suprema.
Todo o sistema sobrenatural voltado para almas e pós-vida provém dessa criatura. Ela é a guardião suprema do Reino dos Mortos, detendo o controle absoluto sobre o fluxo de almas e o destino final de cada espírito que cruza os limites da vida. Seu domínio garante o equilíbrio entre os vivos e os mortos, guiando espíritos perdidos até seu julgamento final — onde repouso ou condenação são decididos por sua vontade incognoscível. Nenhuma alma escapa de sua vigilância.
Contudo, suas ações muitas vezes causam desequilíbrios que não se sabe ao certo se são intencionais ou se fazem parte de um plano maior para estabilizar outras forças sobrenaturais vindas de fontes externas às Terras de Calisto.
Essa entidade é extremamente antiga, tendo reinado muito antes do mundo se chamar Terras de Calisto. Na era de Eldoria, sua força era a principal responsável por manter a ordem mundial, alimentada pelo impulso de poder e conquista. Naquele tempo, povos inteiros buscavam seu favor, tornando-a mais poderosa que qualquer outro ser. Hoje, isso já não é mais verdade.
Seu propósito é um só: testar a força de tudo que vive — e destruir o que for fraco.`,
  img: "imagens/EntidadePoder.png",
  img2: "imagens/Token-EntidadePoder.png"
}
  
  
  
  
  
  ,"Carniceiras Noturnas": {
  vida: 67,
  sanidade: 56,
  especial: 34,
  armadura: 3,
  movimento:8,
  vidaPorNivel: 8,
  sanidadePorNivel: 4,
  especialPorNivel: 2,
  armaduraPorNivel: 3,

  bru: 12,
  agi: 20,
  det: 8,
  pre: 9,
  lib: 9,
  cnx: 15,

  bruTest: 1,
  agiTest: 4,
  detTest: -2,
  preTest: -1,
  libTest: -1,
  cnxTest: 2,

  bruDano: 0,
  agiDano: 2,
  detDano: 0,
  preDano: 0,
  libDano: 0,
  cnxDano: 1,

  bonus: `Resistente: Escuridão, Eclipse  
Vulnerável: Cinzas, Alma  
Imune: Tempestade`,

  bonus2: `
{pigmento}Cuspe Corrosivo{/pigmento} – Cospe um líquido azul que queima ao contato, atingindo até 5m de distância.  
Dano: 3d12 ácido | DT 13 Agilidade  
Se o alvo falhar, sofre 1d6 de dano contínuo por 2 turnos.

{pigmento}Fagulha de Alma{/pigmento} – Seu corpo se incendeia em chamas azuladas espirituais, queimando quem se aproxima.  
Dano de contato: 2d12 fogo  
Efeitos adicionais: -1 em testes de Sanidade e provoca a passiva *Pavor* se o alvo falhar em teste de Presença.

{pigmento}Golpes Desesperados{/pigmento} – Ataca em fúria com garras, pernas e mordidas.  
Dano: 3d10 físico cortante | DT Agilidade  
Se atingir mais de um alvo, recupera 1d8 de vida e ativa *Pavor* por 1 turno.
`,

  bonus3: `Espreitadora da Noite  
Elemento – Desconhecido`,

  Magias: `-`,
  Passivas: `-`,
  Talentos: `-`,

  Descricao: `Carniceiras Noturnas são criaturas sombrias e deformadas que habitam os becos esquecidos das grandes cidades de Rohan. Atuam nas sombras, devorando aqueles que se perdem ou se aproximam demais do perigo. Apesar de sua aparência aterradora e comportamento errático, alguns moradores ousam alimentá-las, criando laços frágeis e imprevisíveis. Com o tempo, podem se tornar serviçais fiéis — mas jamais confiáveis. Envoltas por um estranho fogo azul e uma fome desesperada, essas entidades representam o desespero personificado.`,

  img: "imagens/Carniceiras Noturnas.png",
  img2: "imagens/Token-Carniceiras Noturnas.png"
  }

  
  
  
  
  ,	
"Verme Fúngico": {
  vida: 10,
  sanidade: 10,
  especial: 15,
  armadura: 0,
  movimento:5,
  vidaPorNivel: 2,
  sanidadePorNivel: 5,
  especialPorNivel: 5,
  armaduraPorNivel: 3,

  bru: 10,
  agi: 10,
  det: 20,
  pre: 25,
  lib: 10,
  cnx: 10,

  bruTest: 0,
  agiTest: 0,
  detTest: 4,
  preTest: 5,
  libTest: 0,
  cnxTest: 0,

  bruDano: 0,
  agiDano: 0,
  detDano: 2,
  preDano: 3,
  libDano: 0,
  cnxDano: 0,

  bonus: `Resistente: Distorção, Água  
Vulnerável: Sangue, Fogo  
Imune: Mental, Ácido`,

  bonus2: `
{pigmento}Devorador{/pigmento} – Pode usar a passiva *Consumir* sem custo e sem sofrer penalidades negativas.

{pigmento}Sobrevivente{/pigmento} – Possui vantagem em todos os lançamentos de dados feitos durante o combate.

{pigmento}Praga Prolifera{/pigmento} – Sempre que for morto por qualquer tipo de dano que **não seja** Cinzas, Sangue, Laser, Plasma, Fogo ou Eletricidade, o Verme Fúngico ressuscita automaticamente e se divide em dois, cada um com metade da vida original.
`,

  bonus3: `A Praga  
Elemento – Caos`,

  Magias: `Nível 1 – Vinhas Mágicas  
Nível 3 – Cogumelos Tóxicos`,

  Passivas: `Nível 2 – Consumir`,

  Talentos: `Sobrevivência - Requisito:Determinação`,

  Descricao: `O Verme Fúngico é uma aberração nascida da fusão entre energia caótica e a flora corrompida por forças desconhecidas. Originário de uma floresta em colapso, ele é uma das principais causas de proliferação de infecções mágicas e crescimento fúngico descontrolado. Ao ser morto, pode se multiplicar, tornando-se uma ameaça crescente e difícil de erradicar. Sua mente é vazia, mas seu instinto é de propagação e destruição.`,

  img: "imagens/Verme fungico.png",
  img2: "imagens/Token-Verme fungico.png"
}
  
  
  
  
  
  
  ,"Rastejadores": {
    vida: 20,
    sanidade: 1,
    especial: 10,
    armadura: 0,
    movimento:9,
    vidaPorNivel: 12,
    sanidadePorNivel: 8,
    especialPorNivel: 5,
    armaduraPorNivel: 1,
    bru: 10, agi: 10, det: 10, pre: 10, lib: 20, cnx: 20,
    bruDano: 0, agiDano: 0, detDano: 0, preDano: 0, libDano: 2, cnxDano: 2,
    bruTest: 0, agiTest: 0, detTest: 0, preTest: 0, libTest: 4, cnxTest: 4,
    bonus: `Resistente:Alma, Aura
Vulnerável: Luz, Sagrado
Imune: Mental, Sono`,
    bonus2: `{pigmento}*Silêncio.*{/pigmento} - _rastejadores não fazem barulho algum ganhando +4 em Furtividade._
    {pigmento}*Fúria Rastejate*{/pigmento} - Quando em combate ataca desesperadamente alvos proximos causando 15+2d12 corpo a corpo.
{pigmento}*Captação de alma*{/pigmento} - o rastejador sente a essência de vida ao redor podendo localizar qualquer presa a quilômetros de distância mesmo que esteja em Furtividade.
{pigmento}*Absorção de vida*{/pigmento} - o rastejador se alimenta da vida, cada ataque bem sucedido recupera vida igual ao dano.
`,
    bonus3: `Rastejantes
Elemento – o elemento Fé`,
    Magias: `Nível 1 - Toque do cadáver, nível 2 - Sussurros da sepultura`,
    Passivas: `Nível 3 - Medo oculto`,
    Talentos: `Intimidação - requisito: Conexão`,
    Descricao: `Pouco se sabe sobre a verdadeira origem dos Rastejadores — seres que rastejam nas sombras e evocam o terror primordial do desconhecido. Acredita-se que tenham surgido como um erro ritualístico, invocados por aprendizes do Culto da Morte que não compreendiam plenamente os limites da necromancia.
Essas criaturas emergem das entranhas da terra, com corpos longos e deformados, cobertos por uma pele translúcida de coloração esverdeada, semelhante à carne de um cadáver em decomposição. Seus olhos pequenos e vermelhos brilham com uma fome ancestral, como se buscassem algo que foi perdido entre a vida e a morte.
Alguns profetas da fé sombria afirmam que os Rastejadores são ecos da própria Morte, encarnações da consequência que aguarda os imprudentes. Outros dizem que nunca existiram de fato — que são apenas ilusões alimentadas pelo medo e pelas falhas da alma durante magias como Chamados do Túmulo ou Apocalipse das Sombras.
Se são reais ou não, pouco importa. Seu nome já basta para silenciar conversas em corredores escuros.`,
    img: "imagens/Inferis.png",
    img2: "imagens/Token-Inferis.png"
  }
  
  
  
  
  
  
  
  
  ,
  "Donzela branca": {
    vida: 100,
    sanidade: 50,
    especial: 20,
    armadura: 6,
    movimento:10,
    vidaPorNivel: 15,
    sanidadePorNivel: 5,
    especialPorNivel: 5,
    armaduraPorNivel: 3,
    bru: 20, agi: 20, det: 10, pre: 15, lib: 10, cnx: 10,
    bruDano: 2, agiDano: 2, detDano: 0, preDano: 1, libDano: 0, cnxDano: 0,
    bruTest: 4, agiTest: 4, detTest: 0, preTest: 2, libTest: 0, cnxTest: 0,
    bonus: `Resistente: Escuridão, Eclipse ,Luz, Sagrado
Vulnerável: Alma, Tremor
Imune: Maldição, Sono`,
 bonus2: `
{pigmento}*Presença Divina:*{/pigmento} Em templos ou igrejas, recebe +5 em testes. Aliados a até 6m ganham +4 em testes de cura. Detecta criaturas malignas em 10m e, 1x por dia, pode ver o invisível por 1 minuto.  
{pigmento}*Voto Sagrado:*{/pigmento} Enquanto estiver em local sagrado, protege criaturas neutras ou bondosas. O voto se rompe se o templo for ameaçado.  
{pigmento}*Corpo de Fé:*{/pigmento} Reduz em 2 o dano físico recebido. 1x por dia pode remover uma maldição leve ou moderada.  
{pigmento}*Caminho dos Justos:*{/pigmento} 1x por semana pode teleportar um aliado entre locais sagrados. Se for destruído, retorna após 7 dias com um ritual de sacerdote.  
{pigmento}*Espada da Retidão:*{/pigmento} Causa 15 + 3d8 + dano da arma contra malignos; 12 + dano da arma contra demais inimigos.  
{pigmento}*Sacrifício Final:*{/pigmento} Pode se autodestruir para causar _20d10 de dano Sagrado_ e cegueira em 6m. Não pode ser reconstruído após isso.
`

 ,   bonus3: `Sanctae Sentinellae
Elemento – o elemento Fé`,
    Magias: `Nível 2 - Proteção divina, nível 4 - Céu santo`,
    Passivas: `Nível 6 - Escudo elemental`,
    Talentos: `Tática - requisito: Preservação`,
    Descricao: `As Sanctae Sentinellae são estátuas de mármore branco preenchidas com energia sagrada. São as sentinelas que desceram do céu para proteger a igreja ou templo divino. Não se sabe ao certo se essas crituras realmente existem`,
 _imgs: [
      "imagens/Donzela branca.png",
      "imagens/Donzela branca2.png"
    ],
    
    get img() {
      return this._imgs[Math.floor(Math.random() * this._imgs.length)];
    },

    _imgs2: [
      "imagens/Token-Donzela branca.png"
    ],

    get img2() {
      return this._imgs2[Math.floor(Math.random() * this._imgs2.length)];
    },

  
  }
  ,"Ildtreets Hevn": {
  vida: 122,
  sanidade: 78,
  especial: 24,
  armadura: 10,
  movimento:8,
  vidaPorNivel: 18,
  sanidadePorNivel: 6,
  especialPorNivel: 4,
  armaduraPorNivel: 2,
  bru: 25, agi: 15, det: 10, pre: 8, lib: 9, cnx: 16,
  bruDano: 3, agiDano: 2, detDano: 1, preDano: 0, libDano: 0, cnxDano: 2,
  bruTest: 5, agiTest: 3, detTest: 1, preTest: 0, libTest: 0, cnxTest: 3,

  bonus: `Resistente: Fogo, Caos
Vulnerável: Gelo, Sagrado, Cortante
Imune: Água, Ácido`,

  bonus2: `{pigmento}*Dilaceramento regenerativo:*{/pigmento} pode usar *Dilacerar* com seus próprios galhos. Após o combate ou durante o descanso, esses galhos se regeneram completamente.
{pigmento}*Arena Incandescente:*{/pigmento} uma vez por dia, cria uma arena de madeira em chamas com 15m² ao redor de si. A arena dura _1d12 turnos_ e pode ser encolhida a cada turno. Criaturas dentro da arena sofrem 2d8 de dano de fogo por turno.
{pigmento}*Avanço Rápido:*{/pigmento} pode saltar em direção a um alvo, causando um impacto em área de 6m² (em círculo). Causa _4d20 de dano físico_ aos afetados no impacto.
{pigmento}*Golpes Flamejantes:*{/pigmento} seus ataques comuns causam _1d20 de dano de fogo_ e _1d20 de dano de esmagamento físico_.
`,

  bonus3: `O Silêncio Flamejante
Elemento – o elemento Caos`,

  Magias: `Nível 1 - Lançar Orbe de Fogo, Nível 3 - Coluna Infernal`,
  Passivas: `Nível 5 - Armadura Sobrenatural, Nível 6 - Dilacera e Atacar`,
  Talentos: `Nenhum`,
  Descricao: `Criatura de origem caótica, a Árvore que Posterga o Fogo é uma entidade viva feita de madeira carbonizada, constantemente em combustão interna. Seus galhos se regeneram após combates violentos, e ela usa o próprio corpo para criar terrenos incendiários ao seu redor, limitando movimentos inimigos. É uma força destrutiva e imprevisível da natureza.`,
  img: "imagens/Ildtreets Hevn.png",
  img2: "imagens/Token-Ildtreets Hevn.png"
}
  
  
  
  
  
  ,"Naegh": {
  vida: 60,
  sanidade: 50,
  especial: 40,
  armadura: 0,
  vidaPorNivel: 15,
  sanidadePorNivel: 10,
  especialPorNivel: 10,
  armaduraPorNivel: 4,
movimento: 7,
  bru: 10, agi: 35, det: 10, pre: 10, lib: 10, cnx: 10,
  bruTest: 0, agiTest: 9, detTest: 0, preTest: 0, libTest: 0, cnxTest: 0,
  bruDano: 0, agiDano: 5, detDano: 0, preDano: 0, libDano: 0, cnxDano: 0,

  bonus: `Resistente: Distorção, Sono  
Vulnerável: Tempestade  
Imune: Névoa`,

bonus2: `
{pigmento}*Forma Nébulosa:*{/pigmento} Pode alterar seu tamanho à vontade, assumindo formas disformes de névoa.
{pigmento}*Campo Enevoado:*{/pigmento} Conjura uma névoa com raio de 1km por *1d10+5 turnos*. A névoa acompanha o conjurador, mantendo-o no centro. Dentro dela, é possível escolher um ponto em até 10m onde a visão é reduzida para 1m por *1d6 turnos* ou enquanto durar a névoa.
{pigmento}*Soberano da Névoa:*{/pigmento} Dentro da névoa, recebe *+5 em todos os testes*. Magias de névoa não têm custo e ataques causam *+1d6 de dano de névoa*. Fora da névoa, sofre *-5* nos testes e o custo das magias de névoa é dobrado.
{pigmento}*Corpo Vaporoso:*{/pigmento} Torna-se névoa, ignorando o próximo ataque. Pode mover-se instantaneamente para qualquer ponto ou atravessar locais estreitos, desde que dentro da névoa. (Se atacar, o efeito é desfeito).
{pigmento}*Predador Nebuloso:*{/pigmento} Todos os testes físicos e danos usam *Agilidade*. Pode atacar com *garras silenciosas*, causando *1d12 de dano furtivo*. O alvo faz um teste de percepção com desvantagem para perceber ou reagir.
{pigmento}*Bloqueio Sensorial:*{/pigmento} Enquanto estiver dentro da névoa, inimigos devem passar em um teste de percepção contra sua *Agilidade* para conseguir atacá-lo.
{pigmento}*Ilusões da Névoa:*{/pigmento} Pode criar ou silenciar vozes e sombras dentro da névoa, desorientando ou amedrontando os inimigos. Pode gerar um *clone de névoa* por *1d6 turnos*. O clone não causa dano.
{pigmento}*Apatia Sombria:*{/pigmento} Pode usar as habilidades passivas *Tristeza Oculta* e *Preguiçoso* sem custos até 2 vezes por combate e sem penalidades.
`
,

  bonus3: `Açoite da Névoa  
Elemento – o elemento Desconhecido`,

  Magias: `Nível 1 – Névoa Sussurrante, Nível 2 – Corrente das Brumas, Nível 4 – Neblina Aprisionadora, Nível 5 – Falsa Criatura, Nível 6 – Véu de Ilusão.`,
  Passivas: `Nível 3 – Tristeza Oculta, Nível 3 – Furtividade Sombria, Nível 3 – Preguiça.`,
  Talentos: `Armadilhas – Requisito: Agilidade`,

  Descricao: `Uma criatura de aparência felina com olhos assassinos brilhantes.  
Junto à névoa espessa espreita um demônio do desconhecido. Quase não houve sobreviventes, e os poucos que escaparam relatam delírios: parentes chamando por socorro, monstros gritando, sombras se movendo.  
No entanto, todos afirmam o mesmo: a paz só veio... quando deixaram a névoa.`,

  img: "imagens/Naegh.png",
  img2: "imagens/Token-Naegh.png"
}






};
// Assuma que creatures está definido em outro arquivo ou é importado
const select = document.getElementById('creatureSelect');
const nameEl = document.getElementById('creatureName');
const imageEl = document.getElementById('creatureImage');
const descricao = document.getElementById("descricao");
const abrirPopup = document.getElementById("abrirPopup");
const popup = document.getElementById("popup");
const listaCriaturas = document.getElementById("listaCriaturas");
const creatureStats = document.getElementById("creatureStats");
const imageContainer = document.getElementById("imageContainer");
const imageControls = document.getElementById("imageControls");
let currentImage = 0;
let images = [];
let selected = null;

Object.keys(creatures).forEach(creature => {
  const option = document.createElement('option');
  option.value = creature;
  option.textContent = creature;
  select.appendChild(option);
});

select.addEventListener('change', () => {
  const nome = select.value;
  if (!creatures[nome]) return;
  selected = creatures[nome];
  exibirCriatura(nome);
});

document.getElementById('levelUpButton').addEventListener('click', () => {
  const levelElement = document.getElementById('creatureLevel');
  let level = parseInt(levelElement.textContent);
  if (selected) {
    level += 1;
    levelElement.textContent = level;
    updateStats(selected, level);
  }
});

document.getElementById('levelDownButton').addEventListener('click', () => {
  const levelElement = document.getElementById('creatureLevel');
  let level = parseInt(levelElement.textContent);
  if (selected && level > 1) {
    level -= 1;
    levelElement.textContent = level;
    updateStats(selected, level);
  }
});

function updateStats(creature, level) {
  const vida = creature.vida + (creature.vidaPorNivel * (level - 1));
  const sanidade = creature.sanidade + (creature.sanidadePorNivel * (level - 1));
  const especial = creature.especial + (creature.especialPorNivel * (level - 1));
  const armadura = creature.armadura + Math.floor((level - 1) / creature.armaduraPorNivel);

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

  return text
    .split(/\n+/)
    .map(sentence => {
      if (sentence.trim()) {
        const formattedSentence = sentence
          .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
          .replace(/_(.*?)_/g, '<em>$1</em>')
          .replace(/~(.*?)~/g, '<u>$1</u>')
          .replace(/-(.*?)-/g, '<s>$1</s>')
          .replace(/{pigmento}(.*?){\/pigmento}/g, '<span class="pigmento">$1</span>');
        return `<p class="${className}">${formattedSentence}</p>`;
      } else {
        return '';
      }
    })
    .join('');
}

function formatDescriptionText(text) {
  return text.split(/\n+/).map(paragraph =>
    paragraph.trim() ? `<p>${paragraph}</p>` : ''
  ).join('');
}

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function exibirCriatura(nome) {
  selected = creatures[nome];
  if (!selected) return;

  creatureStats.style.display = 'block';
  nameEl.textContent = nome;
  descricao.innerHTML = formatDescriptionText(selected.Descricao);

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
  document.getElementById('movimento').textContent = selected.movimento + "m";
  document.getElementById('Magias').textContent = selected.Magias;
  document.getElementById('Passivas').textContent = selected.Passivas;
  document.getElementById('Talentos').textContent = selected.Talentos;
  document.getElementById('bonus').innerHTML = formatBonusText(selected.bonus, "bonus1");
  document.getElementById('bonus2').innerHTML = formatBonusText(selected.bonus2, "bonus2");
  document.getElementById('bonus3').innerHTML = formatBonusText(selected.bonus3, "bonus3");

  images = [];
  let index = 1;
  while (selected[`img${index}`] || (index === 1 && selected.img)) {
    const imgSrc = selected[`img${index}`] || selected.img;
    const imgElement = document.createElement("img");
    imgElement.src = imgSrc;
    imgElement.style.display = "none";
    images.push(imgElement);
    index++;
  }

  imageContainer.innerHTML = "";
  images.forEach(img => imageContainer.appendChild(img));

  currentImage = 0;
  showImage(currentImage);
  imageControls.style.display = images.length > 1 ? "block" : "none";

  document.getElementById('creatureLevel').textContent = 1;
  updateStats(selected, 1);
}

abrirPopup.addEventListener("click", () => {
  listaCriaturas.innerHTML = "";
  Object.entries(creatures).forEach(([nome, dados]) => {
    const card = document.createElement("div");
    card.className = "card-criatura";

    if (dados.img2) {
      const img = document.createElement("img");
      img.src = dados.img2;
      img.alt = nome;
      card.appendChild(img);
    }

    const titulo = document.createElement("div");
    titulo.textContent = nome;
    card.appendChild(titulo);

   card.addEventListener("click", () => {
    document.getElementById("abrirPopup").textContent = `Selecionado: ${nome}`;
    popup.style.display = "none";
    exibirCriatura(nome);
    
    // Rolar até o topo da tela
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
});

    listaCriaturas.appendChild(card);
  });

  popup.style.display = "flex";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});

document.getElementById('prevImage').onclick = () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
};

document.getElementById('nextImage').onclick = () => {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
};

document.querySelector('.toggle-button').addEventListener('click', () => {
  document.querySelector('.toggle-content').classList.toggle('show');
});

document.getElementById("contador").textContent = Object.keys(creatures).length;
function menuShow() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('open');
}
