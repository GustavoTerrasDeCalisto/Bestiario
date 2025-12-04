const creatures = {
  "Glink's": {
	nome: "Glink's",
	id: "glinks01",
    vida: 50,
    sanidade: 30,
    especial: 20,
    armadura: 1,
    movimento:9,
    vidaPorNivel: 10,
    sanidadePorNivel: 3,
    especialPorNivel: 1,
    armaduraPorNivel: 3,
    Ataquebásico: `2d6 de dano Cortante - Agilidade`,
    TagsCriatura: "AskVill,Floresta,Animal,",
 TipoElementoCriatura: "Caos",
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
    TagsCriatura: "Gormandia,Racional,Animal,",
 TipoElementoCriatura: "Caos",
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
 TagsCriatura: "Comum,Solitário,Pequeno",
 TipoElementoCriatura: "Caos",
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
  TagsCriatura: "Montaria,Elfinoria,Raro",
   TipoElementoCriatura: "Caos",
  bru: 14, agi: 10, det: 12, pre: 16, lib: 14, cnx: 12,
  bruDano: 0, agiDano: 0, detDano: 0, preDano: 0, libDano: 0, cnxDano: 0,
  bruTest: 2, agiTest: 0, detTest: 1, preTest: 3, libTest: 2, cnxTest: 1,
  bonus: `Resistente: dano Mental
Vulnerável: dano Sombrio`,
  bonus2: `{pigmento}*Montaria:*{/pigmento} Permite ser montado, caso passe em um teste de Cavalgar - Requisito: Agilidade DT 13.
  {pigmento}*Chifre Florido:*{/pigmento} Um ataque cerimonial raro realizado apenas quando o Alce se sente ameaçado. Dano esmagante: 10+1d12.
{pigmento}*Despertar Floral:*{/pigmento} Uma vez por ano, durante o florescer das árvores em Elfinória, o Alce Florenar manifesta sua habilidade ancestral de montaria sagrada, permitindo que qualquer criatura montada nele viaje a 3x seu movimento, Requisito: Conexão DT 15 
{pigmento}*Montaria Sagrada:*{/pigmento} Criatura naturalmente domável para montaria em cerimônias, tarefas de arado e rituais élficos. Confere bônus narrativo de respeito e conexão espiritual com as forças da natureza.`,
  bonus3: `Animal Sagrados
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
  TagsCriatura: "Montaria,Campo Aberto,Cidade",
  TipoElementoCriatura: "Fé",
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
  TagsCriatura: "Montaria,Oceano,Lago",
  TipoElementoCriatura: "Caos",
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
  TagsCriatura: "Montaria,Savana,Eletricidade",
  TipoElementoCriatura: "Poder",
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
  TagsCriatura: "Montaria,Céu,Voador",
   TipoElementoCriatura: "Desconhecido",
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
  armaduraPorNivel: 1,
  TagsCriatura: "Montaria,Floresta,Templo",
  TipoElementoCriatura: "Desconhecido",
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
,"DracoGrurafa": {
    vida: 238,
    sanidade: 54,
    especial: 45,
    armadura: 6,
    movimento: 8,
    vidaPorNivel: 30,
    sanidadePorNivel: 5,
    especialPorNivel: 6,
    armaduraPorNivel: 4,
    TagsCriatura: "Sultan Leste,Agressivo,Raro",
    TipoElementoCriatura: "Desconhecido",
    bru: 28, agi: 14, det: 12, pre: 10, lib: 20, cnx: 22,
    bruDano: 6, agiDano: 2, detDano: 1, preDano: 0, libDano: 3, cnxDano: 4,
    bruTest: 8, agiTest: 3, detTest: 2, preTest: 0, libTest: 5, cnxTest: 6,
    bonus:`Imune a dano de:Fogo
    Resistente:Tempestade
    Vulnerável:Gelo
    Vulnerável:Alma`,
    bonus2: `{pigmento}*Terror Gigantesco:*{/pigmento} Criaturas a até 30m devem realizar um teste de Liberação (DT 18) ou ficam paralisadas de medo por 1 turno.
{pigmento}*Alma Flamejante:*{/pigmento} O DracoGrurafa emana calor abrasador, causando _1d6 de dano de fogo_ a todos em 3m no início do turno.
{pigmento}*Grito Rubro:*{/pigmento} Uma vez a cada 3 turnos, solta um urro que atravessa corpos e mentes, forçando todos em um cone de 20m a realizar Liberação (DT 17) ou sofrer _4d10+6 de dano Tempestade_.
{pigmento}*Pisoteio de Titã:*{/pigmento} Ao se mover, pode esmagar inimigos no caminho causando _3d8 de dano físico_.
{pigmento}*Voo Membranoso:*{/pigmento} Não possui asas tradicionais, mas pode planar e dar grandes saltos usando membranas como morcegos, percorrendo até _12m_ em um salto de combate.`,
    bonus3:`O Titã da Garganta Rubra
Elemento - Desconhecido`,
    Passivas:`Nível 2 - Vingança`,
    Descricao:`O DracoGrurafa é um titã ancestral marcado por uma mutação sobrenatural que se manifestou ao longo de incontáveis anos de evolução. Seu corpo carrega ainda a herança das antigas girafas das planícies esquecidas, mas foi corrompido e transformado em algo além da compreensão natural.
Das suas costas emergiram asas membranosas, resultado da distorção de sua essência, que lhe permitem planar por céus turbulentos e realizar mergulhos brutais contra suas presas. Seu pescoço longo e flexível mantém o traço mais evidente de sua origem, agora aliado a uma musculatura predatória adaptada para o combate aéreo.
Sua pele exibe padrões manchados reminiscentes das girafas, mas alterados em formas que lembram sombras vivas, camuflando-se entre nuvens e tempestades. Chamado de Titã da Garganta Rubra, seu urro ecoa como trovões e é temido tanto por muralhas quanto por exércitos inteiros.
Não é apenas uma fera, mas o resultado de uma evolução profana — uma girafa que se ergueu aos céus pela mutação do Desconhecido, tornando-se um predador das alturas e senhor das tempestades.`,
    img: "imagens/DracoGrurafa.png",
    img2: "imagens/DracoGrurafa.png"
}
  ,"Wyvnnoraptor": {
    vida: 210,
    sanidade: 48,
    especial: 30,
    armadura: 4,
    movimento: 10,
    vidaPorNivel: 28,
    sanidadePorNivel: 4,
    especialPorNivel: 4,
    armaduraPorNivel: 3,
    TagsCriatura: "Planície Nevada,Agressivo,Raro",
    TipoElementoCriatura: "Caos",
    bru: 24, agi: 20, det: 14, pre: 8, lib: 10, cnx: 12,
    bruDano: 5, agiDano: 4, detDano: 3, preDano: 0, libDano: 2, cnxDano: 2,
    bruTest: 7, agiTest: 6, detTest: 4, preTest: 0, libTest: 3, cnxTest: 3,
    bonus:`Imune: dano de Veneno
Resistente: dano de Gelo
Vulnerável: dano de Fogo
Vulnerável: dano de Distorção`,
	  Ataquebásico: `2d12 de dano Cortante - Agilidade`,
    bonus2:`{pigmento}*Cuspe Ácido:*{/pigmento} Uma vez a cada 4 turnos, o Wyvnnoraptor cospe um líquido corrosivo em uma área de 15m. Criaturas atingidas devem realizar um teste de Determinação (DT 17) ou sofrem _3d10 de dano Ácido_. A área permanece coberta por ácido por 4 turnos, causando _1d8 de dano Ácido_ por turno a quem permanecer nela.
{pigmento}*Ferocidade Instintiva – teste de Agilidade:*{/pigmento} Pode atacar duas vezes por turno com seus membros ou mordidas. Se acertar ambos os ataques em um mesmo alvo, este deve realizar um teste de Determinação (DT 15) ou fica debilitado até o próximo turno, reduzindo em -2 seus testes físicos.
{pigmento}*Garras Serrilhadas:*{/pigmento} Golpeia em área de até 3m de distância, atingindo até 3 alvos e causando _2d12 de dano Cortante_.
{pigmento}*Mordida Voraz:*{/pigmento} Avança sobre o alvo e morde causando _3d10 de dano Físico_. Caso reduza a vida do alvo a zero, o Wyvnnoraptor regenera metade do dano como vida temporária.
{pigmento}*Cauda Dilacerante:*{/pigmento} Realiza um golpe giratório causando _3d8 de dano Esmagante_ em área de 2m. Alvos atingidos devem realizar um teste de Brutalidade (DT 16) ou caem no chão.
{pigmento}*Voo Predatório:*{/pigmento} Suas asas cobertas por penas e ossos reforçados permitem manobras aéreas em ventos extremos. Quando ataca de mergulho, o ataque causa +1d10 de dano adicional e o alvo deve realizar um teste de Agilidade (DT 16) ou ser derrubado.
{pigmento}*Passivas: Nível 2*{/pigmento} – <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p14">Raiva</a>.`,
    bonus3:`Wyvnnoraptor glacialis
Elemento – Caos`,
    Magias:`Nenhuma.`,
    Passivas:`Nível 2 - Raiva`,
    Talentos:`-`,
    Descricao:`O Wyvnnoraptor glacialis é uma das criaturas mais imponentes e perigosas das regiões frias e montanhosas. Considerado por muitos estudiosos um descendente direto dos antigos raptores, esta espécie evoluiu de forma brutal e eficiente para dominar os céus e vales congelados.
Seu corpo é coberto por densas penas brancas e detalhes avermelhados, asas de penas, que servem tanto como isolamento térmico quanto camuflagem natural entre a neve e as rochas. Com cerca de 6 metros de altura e uma envergadura que pode ultrapassar 30 metros, o Wyvnnoraptor combina força e velocidade de maneira aterrorizante. Suas asas possuem garras afiadas nas articulações, usadas tanto para se firmar em superfícies quanto para golpear oponentes em pleno voo.Dotado de sentidos aguçados e instintos agressivos, o Wyvnnoraptor caça sozinho, preferindo atacar de emboscada ou de mergulho. Seu cuspe ácido é uma arma evolutiva rara, projetada para destruir tanto presas quanto rivais — dissolvendo carne, metal e gelo com facilidade.
Essas criaturas são extremamente territoriais e reagem a qualquer intruso com fúria instantânea. Quando entram em estado de raiva, tornam-se verdadeiros desastres naturais, atacando sem hesitação até que tudo ao redor esteja destruído. O rugido estridente que emitem antes do ataque é inconfundível, ecoando por quilômetros entre as montanhas geladas — um aviso tardio para aqueles que ousam cruzar seu domínio.`,
    img: "imagens/Wyvnnoraptor.png",
    img2: "imagens/Wyvnnoraptor.png"
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
            TagsCriatura: "Caça em Grupo,Irracional,Cortante",
 TipoElementoCriatura: "Desconhecido",
    bru: 22, agi: 12, det: 11, pre: 10, lib: 13, cnx: 10,
    bruDano: 2, agiDano: 1, detDano: 1, preDano: 0, libDano: 1, cnxDano: 0,
    bruTest: 5, agiTest: 1, detTest: 1, preTest: 0, libTest: 1, cnxTest: 0,
    bonus:`Resistente: dano Perfurante
    Vulnerável: Dano de Sono
    Imune: Dano de Mental`,
	  Ataquebásico: `2d8 de dano Cortante - Agilidade`,
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
    img2: "imagens/Token_Deinonychus.png"
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
    TagsCriatura: "Caça em Grupo,Gormandia,Pacífico",
    TipoElementoCriatura: "Caos",
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
    TagsCriatura: "Maldição,Agressivo,Ruínas Antigas",
    TipoElementoCriatura: "Poder",
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
    
   _imgs: [
      "imagens/AntigosEsquecidos.png"
    ],
    
    get img() {
      return this._imgs[Math.floor(Math.random() * this._imgs.length)];
    },

    _imgs2: [
      "imagens/Token-AntigosEsquecidos.png",
      "imagens/Token-AntigosEsquecidos2.png",
      "imagens/Token-AntigosEsquecidos3.png"
    ],

    get img2() {
      return this._imgs2[Math.floor(Math.random() * this._imgs2.length)];
    },

    // outros dados aqui também...
  },
  "Ossarion Fúngico": {
  vida: 25,
  sanidade: 5,
  especial: 10,
  armadura: 8,
  movimento: 6,
  vidaPorNivel: 10,
  sanidadePorNivel: 2,
  especialPorNivel: 1,
  armaduraPorNivel: 4,
  TagsCriatura: "Ácido,Pântano,Agressivo,",
  TipoElementoCriatura: "Caos",

  bru: 14, agi: 8, det: 15, pre: 24, lib: 10, cnx: 8,
  bruTest: 2, agiTest: -2, detTest: 2, preTest: 5, libTest: 0, cnxTest: -2,
  bruDano: 1, agiDano: 0, detDano: 1, preDano: 3, libDano: 0, cnxDano: 0,

  bonus: `Resistente: Ácido, Gelo
Vulnerável: Fogo, Eletricidade
Imune: Sangue`,

  bonus2: `{pigmento}*Habilidade de Descanso Longo Fúngico:*{/pigmento} Pode adormecer fora de combate, curando _3d20 de vida_. Se sobreviveu a um combate anterior, os fungos crescem e eleva 1 nível.

{pigmento}*Golpe Desesperado:*{/pigmento} Sempre ataca fisicamente. Causa _2d12 de dano ácido_ e _10 + 1d10 de dano físico_ com socos ou garradas. Usa magias raramente.

{pigmento}*Cogumelos Vivos:*{/pigmento} Quando acertado, pode causar _1d12 de dano ácido_ no atacante. Se o inimigo errar, o Ossarion cura _10 + 1d10_, pois os esporos reagem com toxinas.

{pigmento}*Fraqueza Extra:*{/pigmento} Quando queimado ou eletrocutado, os fungos podem ser expurgados. Ao ser derrotado, ele só permanece morto se receber dano de Fogo ou Eletricidade; caso contrário, retorna com _10 de vida_.`,

  bonus3: `Aspercordys Ossuum
Elemento – o elemento Caos`,

  Magias: `Nível 3 - Cogumelos Tóxicos`,
  Passivas: `-`,
  Talentos: `Cura - Requisito: Libertação`,

  Descricao: `As forças da natureza nunca estiveram tão coléricas. O Ossarion Fúngico surge quando colônias de fungos parasitas se espalham por flores e cadáveres, crescendo de forma descontrolada. Essas entidades se originam nos cemitérios, onde corpos são colonizados por esporos que canalizam o poder do caos natural. Não são apenas cadáveres reanimados, mas estruturas ósseas dominadas por uma consciência coletiva fúngica que busca retaliar a destruição da natureza. 

Seu andar trêmulo e seus movimentos irregulares escondem uma força brutal e uma fúria silenciosa. Quando atacado, seus fungos reagem como organismos vivos, liberando toxinas para ferir e curar. Mesmo após ser vencido, sua essência caótica permite que volte à vida, desde que os fungos não sejam incinerados ou eletrocutados. 

É uma representação viva da revolta da natureza diante das ações destrutivas da civilização — um aviso de que até os mortos podem se erguer se a floresta assim desejar.`,

  _imgs: [
    "imagens/Ossarion Fúngico.png",
    "imagens/Ossarion Fúngico.png"
  ],
  get img() {
    return this._imgs[Math.floor(Math.random() * this._imgs.length)];
  },

  _imgs2: [
    "imagens/Token-Ossarion Fúngico.png",
    "imagens/Token-Ossarion Fúngico2.png"
  ],
  get img2() {
    return this._imgs2[Math.floor(Math.random() * this._imgs2.length)];
  }
},

"Cadavérico Rubro": {
  vida: 19,
  sanidade: 2,
  especial: 2,
  armadura: 5,
  movimento: 6,
  vidaPorNivel: 15,
  sanidadePorNivel: 7,
  especialPorNivel: 2,
  armaduraPorNivel: 3,
  Ataquebásico: `5 + 1d10 de dano Esmagante - Brutalidade`,
  TagsCriatura: "Sangue,Agressivo,Cidade",
  TipoElementoCriatura: "Fé",
  bru: 14, agi: 8, det: 18, pre: 9, lib: 11, cnx: 12,
  bruDano: 1, agiDano: 0, detDano: 2, preDano: 0, libDano: 0, cnxDano: 0,
  bruTest: 2, agiTest: -2, detTest: 3, preTest: -1, libTest: 1, cnxTest: 1,
  bonus:`Resistente: Sangue, Esmagamento
Vulnerável: Luz, Sagrado`,

  bonus2: `{pigmento}*Cuspe de Sangue:*{/pigmento} Uma vez por combate, cospe um jato de sangue fervente em cone de 3 metros. Causa _3d6 de dano de sangue_ e impõe condição 'Queimando' (dano contínuo por 2 turnos).
{pigmento}*Sangue Fervido:*{/pigmento} Quando é atingido por um ataque corpo a corpo, o atacante sofre _1d6 de dano de sangue_ por espirro fervente, uma vez por turno.
{pigmento}*Banimento Caótico:*{/pigmento} Se for atingido por um **crítico** de uma magia de **Luz** ou **Sagrado**, pode ser imediatamente banido (morto novamente), **mesmo que ainda tenha pontos de vida**.
{pigmento}*Forma Variável:*{/pigmento} A aparência e os poderes do Cadavérico Rubro variam conforme o tempo entre a morte e a reanimação:

- _{pigmento}Reanimado Rápido{/pigmento}_ (até 6h após a morte): Corpo ainda cheio de carne e sangue pulsante. Ganha +2 em testes de Brutalidade e, ao causar dano com um ataque corpo a corpo, recupera 15 pontos de vida, absorvendo o sangue do inimigo. {pigmento}Raça{/pigmento} Algumas características da raça que morreu se mantêm, por exemplo: voar, respirar debaixo d'água, etc., variando no RP.


- _{pigmento}Reanimado Tardio{/pigmento}_ (após 24h): Corpo parcialmente esquelético, desidratado e ágil. Ganha **+2 em testes de Agilidade** e **Movimento**, e seus ataques críticos causam dano **x3 ao invés de x2**. Se a arma ou habilidade já causaria mais de x2, **soma +1 ao multiplicador de crítico**.`,

  bonus3:`Criatura Falha da Ressurreição
Elemento - Fé`,

  Magias: ``,
  Passivas: ``,
  Talentos: ``,

  Descricao:`Os Cadavéricos Rubros são o resultado de tentativas imperfeitas de reviver almas durante rituais relacionados à Calisto. Ao contrário de uma verdadeira reencarnação, são apenas ecos malformados — uma falha no tecido espiritual. Quando sangue toca um túmulo imaculado ou um corpo recém-falecido sob um rito distorcido, a alma não retorna completamente: apenas fome e instinto.
Esses seres voltam à vida com fragmentos de memória, olhos vazios e uma ânsia incessante por sangue. Eles perambulam por velórios, cemitérios e ruínas sagradas, buscando a presença dos vivos como mariposas à luz, mas apenas para consumir.
Sua presença é marcada por um odor de ferro queimado e pelo som nauseante de sangue fervendo por dentro. Sem intelecto, sem paz, e sem propósito, os Cadavéricos Rubros são uma consequência viva de um mundo que tenta brincar com forças maiores do que pode controlar.

Sua forma física varia conforme o tempo decorrido entre a morte e o ritual de reanimação: quanto mais cedo o corpo for revivido, mais carne e força ele retém — quanto mais tarde, mais seco, ágil e mortal ele se torna. Ambas as formas compartilham uma sede insaciável por sangue e uma tendência a reagir violentamente à energia sagrada.

Embora possam surgir em qualquer continente, são **mais comuns no Continente do Luar** e nas **regiões sombrias de Sultan Leste**, onde rituais proibidos e o culto à morte ainda persistem em segredo.`,

  _imgs: [
    "imagens/Califálido1.png",
    "imagens/Califálido1.png",
    "imagens/Califálido1.png",
    "imagens/Califálido1.png",
    "imagens/Califálido1.png",
    "imagens/Califálido1.png",
    "imagens/Califálido2.png",
    "imagens/Califálido3.png"
  ],

  get img() {
    return this._imgs[Math.floor(Math.random() * this._imgs.length)];
  },

  _imgs2: [
    "imagens/Token-Califálido1.png",
    "imagens/Token-Califálido2.png",
    "imagens/Token-Califálido3.png",
    "imagens/Token-Califálido1.png",
    "imagens/Token-Califálido2.png",
    "imagens/Token-Califálido3.png",
    "imagens/Token-Califálido4.png",
    "imagens/Token-Califálido5.png",
    "imagens/Token-Califálido6.png"
  ],

  get img2() {
    return this._imgs2[Math.floor(Math.random() * this._imgs2.length)];
  },
}
,"Observador Sombrio": {
  vida: 45,
  sanidade: 5,
  especial: 3,
  armadura: 4,
  movimento: 11,
  vidaPorNivel: 18,
  sanidadePorNivel: 4,
  especialPorNivel: 2,
  armaduraPorNivel: 2,
  Ataquebásico: `3 + 1d12 de dano Cortante - Agilidade`,
  TagsCriatura: "Escuridão,Agressivo,Raro",
  TipoElementoCriatura: "Poder",
  bru: 15, agi: 20, det: 12, pre: 8, lib: 24, cnx: 9,
  bruDano: 2, agiDano: 4, detDano: 1, preDano: 0, libDano: 5, cnxDano: 0,
  bruTest: 3, agiTest: 5, detTest: 2, preTest: 1, libTest: 6, cnxTest: 1,
  bonus:`Resistente: Escuridão, Cortante
Vulnerável: Luz, Sagrado`,

  bonus2: `{pigmento}*Zona da Sombra:*{/pigmento} O Observador Sombrio gera uma escuridão densa de **8 metros** ao seu redor. Criaturas dentro da área **não podem causar acertos críticos** devido à exaustão visual. Para cada inimigo dentro dessa área, ele ganha **+15 de Vida Temporária**. Essa vida extra é perdida se o inimigo sair da área.
{pigmento}*Olho Abissal:*{/pigmento} Em sua barriga se esconde um olho grotesco. Aqueles que o olham perdem **10 de Sanidade** imediatamente. Se ele conseguir **agarrar** um alvo (Teste de Agilidade para esquivar do pulo e de Brutalidade para se soltar), força a vítima a olhar diretamente para o olho, causando **perda automática de +10 de Sanidade** e **ficar Confuso por 1 turno**.
{pigmento}*Pulo das Trevas:*{/pigmento} Uma vez por combate, pode **pular diretamente no rosto** de um alvo a até 6 metros de distância. Teste de Agilidade (CD 15) para evitar.
{pigmento}*Sombra da Distopia (Passiva):*{/pigmento} Sempre que estiver em ambiente escuro ou sombras, recebe **+2 de movimento** e **+1 dado bônus em testes de Esquiva**.`,

  bonus3:`Esqueleto corrompido pelo Elemento de Poder
Elemento - Poder / Escuridão`,

  Magias: `Sombras Ofuscantes (Nível 1)`,
  Passivas: `Sombra da Distopia (Nível 5)`,
  Talentos: ``,

  Descricao:`Diferente dos antigos esquecidos — manifestações clássicas do Elemento Poder — o Observador Sombrio representa um caminho obscuro, corrompido pela ambição e pela rendição total ao desconhecido. Esse esqueleto, outrora um ser profundamente conectado ao Poder, ofereceu seu próprio corpo como receptáculo a uma entidade sombria de intenções desconhecidas.
Coberto por um manto de escuridão viva, o Observador se move com leveza e letalidade. A criatura pode surgir em qualquer continente de Terras de Calisto, mas é **mais comum nas ruínas amaldiçoadas da Antiga Gormandia**, onde segredos antigos ainda sussurram entre as sombras.
A origem desse poder não é totalmente compreendida. Alguns dizem que há algo por trás da escuridão — algo que observa e manipula através do olho abissal em sua barriga, um portal de loucura e controle. Independentemente da raça ou cultura, qualquer ser vivo que caia sob o olhar dessa aberração sente que está sendo avaliado... e condenado.`,

  _imgs: [
    "imagens/ObservadorSombrio1.png",
    "imagens/ObservadorSombrio1.png",
    "imagens/ObservadorSombrio1.png",
    "imagens/ObservadorSombrio1.png"
  ],

  get img() {
    return this._imgs[Math.floor(Math.random() * this._imgs.length)];
  },

  _imgs2: [
    "imagens/Token-ObservadorSombrio1.png",
    "imagens/Token-ObservadorSombrio2.png",
    "imagens/Token-ObservadorSombrio2.png"
  ],

  get img2() {
    return this._imgs2[Math.floor(Math.random() * this._imgs2.length)];
  },
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
    TagsCriatura: "Sultan Leste,Pântano,Pacífico",
    TipoElementoCriatura: "Caos",
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
    TagsCriatura: "Pacífico,Item,Solitário",
    TipoElementoCriatura: "Poder",
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
    TagsCriatura: "Lendário,Templo,Ilha do Céu",
    TipoElementoCriatura: "Fé",
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
Essas criaturas têm a habilidade de voar e utilizam armas que brilham em dourado quando entram em combate, uma  de seu vínculo espiritual com as Cidades Douradas. Apesar de serem calmos e falarem com pompa e lentidão, qualquer um que tente descobrir a entrada para Skypia será recebido com hostilidade e agressividade. Seus ataques são rápidos e precisos, e sua fé serve como uma força motriz, guiando seus corações e suas armas.
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
    TagsCriatura: "Agressivo,Caça em Grupo,Humanoide",
    TipoElementoCriatura: "Caos",
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
    movimento: 7,
    vidaPorNivel: 12,
    sanidadePorNivel: 4,
    especialPorNivel: 4,
    armaduraPorNivel: 3,
    TagsCriatura: "Agressivo,Caça em Grupo,Corrompido",
    TipoElementoCriatura: "Poder",
    bru: 14, agi: 11, det: 18, pre: 12, lib: 16, cnx: 10,
    bruDano: 1, agiDano: 1, detDano: 2, preDano: 1, libDano: 2, cnxDano: 0,
    bruTest: 2, agiTest: 1, detTest: 4, preTest: 1, libTest: 3, cnxTest: 0,
    bonus: `Resistente: Escuridão
    Vulnerável: Distorção
    Imune: Tempestade`,
    bonus2: `{pigmento}*Invocar Almas Perdidas - teste de Determinação:*{/pigmento} O Goblin Corrompido conjura almas escuras que atormentam um inimigo em um raio de _12m_. Se falhar no teste (DT 15), sofre _3d10 de dano de Alma_ por turno (_3 turnos por alvo_). O Goblin pode manter até _3 alvos_ sob esse efeito.

{pigmento}*Fortificação Sombria:*{/pigmento} Como ação bônus, aumenta sua _Armadura em +2_ e ganha _resistência a dano Físico_ (Corte, Perfurante, Esmagamento) por _2 turnos_.

{pigmento}*Golpe Fantasmal:*{/pigmento} Ao atacar, reduz a _Armadura do inimigo em 3_ e causa _+1d10 de dano de Escuridão_.

{pigmento}*Absorção Sombria:*{/pigmento} Se um inimigo morrer enquanto sofre de *Almas Perdidas*, o Goblin recupera _10 de Vida_ e _5 de Sanidade_. Além disso, seu próximo ataque causa _+1d10 de dano de Alma_.

{pigmento}*Magias utilizadas pelo Goblin Corrompido:*{/pigmento}
🔹 <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m96" target="_blank">Almas Perturbadas (Nível 1)</a>  
🔹 <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m93" target="_blank">Poltergeist (Nível 2)</a>  
🔹 <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m116" target="_blank">Abalo Sutil (Nível 1)</a>  
🔹 <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m111" target="_blank">Mão Fantasma (Nível 2)</a>  
🔹 <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m112" target="_blank">Pulso de Plasma (Nível 3)</a>  
🔹 <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m125" target="_blank">Aura de Proteção (Nível 3)</a>`,
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
    TagsCriatura: "Agressivo,Rohan,Humanoide",
    TipoElementoCriatura: "Desconhecido",
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
 "Ildtreets Hevn": {
  vida: 122,
  sanidade: 78,
  especial: 24,
  armadura: 10,
  movimento:8,
  vidaPorNivel: 18,
  sanidadePorNivel: 6,
  especialPorNivel: 4,
  armaduraPorNivel: 2,
    TagsCriatura: "Pacífico,Fogo,Floresta",
    TipoElementoCriatura: "Caos",
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
        TagsCriatura: "Líquido,Irracional,Ácido",
 TipoElementoCriatura: "Caos",
  "bru": 16, "agi": 8, "det": 10, "pre": 8, "lib": 8, "cnx": 12,
  "bruDano": 1, "agiDano": 0, "detDano": 0, "preDano": 0, "libDano": 0, "cnxDano": 0,
  "bruTest": 2, "agiTest": -2, "detTest": 0, "preTest": -2, "libTest": -2, "cnxTest": 1,

  "bonus": "Imune: Ácido, Veneno, Sono\nResistente: Físico não-mágico\nVulnerável: Eletricidade, Luz",
  "bonus2": "{pigmento}*Absorção Corrosiva:*{/pigmento} Sempre que elimina uma criatura, recupera 1d10+1d8 de vida e aumenta sua vida máxima em +20, aumente 1 Nível.\n{pigmento}*Diluição Instintiva:*{/pigmento} Pode atravessar grades, frestas e espaços minúsculos sem custo, mas não pode passar por barreiras mágicas.\n{pigmento}*Grito Gelatinoso:*{/pigmento} Uma vez por combate, solta um grito que afeta todas as criaturas em 10m. Cada inimigo deve passar em um teste de Conexão (DT 13) ou fica Apavorado por 1 turno.\n{pigmento}*Corrosão Viva:*{/pigmento} Causa 5d12 de dano ácido a cada turno a quem estiver em contato direto com seu corpo. Objetos não mágicos tocados se desfazem em 2 turnos.",
  
  "bonus3": "Criatura Amórfica\nElemento - Caos / Ácido",
  "Descricao": "Uma massa colossal de matéria corrosiva viva, nascida de um experimento alquímico proibido. A Bolha rasteja absorvendo tudo em seu caminho. Seus gritos não têm som, mas ecoam na mente dos que a veem. Com o tempo, cresce, engole estruturas e digere seres vivos, revelando fragmentos derretidos de ossos em sua transparência pulsante.",
  "img": "imagens/A-Bolha.png",
  "img2": "imagens/Token-A-Bolha.png"
},
  "Peões Desordeiros": {
    "vida": 35,
    "sanidade": 45,
    "especial": 20,
    "armadura": 3,
    "movimento":7,
    "vidaPorNivel": 7,
    "sanidadePorNivel": 3,
    "especialPorNivel": 4,
    "armaduraPorNivel": 2,
    TagsCriatura: "Agressivo,Raro,Maldição",
 TipoElementoCriatura: "Desconhecido",
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

  
  ,"Loira do Banheiro": {
  vida: 110,
  sanidade: 1,
  especial: 0,
  armadura: 5,
  movimento: 7,
  vidaPorNivel: 6,
  sanidadePorNivel: 2,
  especialPorNivel: 0,
  armaduraPorNivel: 4,
  Ataquebásico: `2d12 de dano Cortante - Agilidade`,
  TagsCriatura: "Maldição,Metrópole,Raro",
  TipoElementoCriatura: "Desconhecido",
  bru: 12, agi: 14, det: 20, pre: 13, lib: 9, cnx: 15,
  bruDano: 0, agiDano: 2, detDano: 3, preDano: 1, libDano: 0, cnxDano: 2,
  bruTest: 1, agiTest: 2, detTest: 4, preTest: 1, libTest: -1, cnxTest: 3,
  bonus: `Resistente: Maldição  
Vulnerável: Luz
Vulnerável: Cortante
Vulnerável: Distorção`,
  bonus2: `{pigmento}*Gritos de Dor - dano de maldição em área (5m):*{/pigmento} _3d20+8 de dano de Maldição_. Teste de **Determinação** reduz pela metade.  
{pigmento}*Possessão - até 9m:*{/pigmento} alvo realiza teste de **Determinação**. Se falhar, será controlado no próximo turno.  
{pigmento}*Invadir a Boca - brutalidade:*{/pigmento} enfia a mão dentro da boca do alvo causando _4d10 de dano de Sangue_. Alvo faz teste de **Agilidade** para evitar ser agarrado. Para se soltar: **Brutalidade**.  
{pigmento}*Manifestação por Invocação:*{/pigmento} só pode surgir por meio de um ritual com intenção (como brincadeiras escolares, cultos infantis ou desafios de coragem).`,
  bonus3: `A Lenda Urbana Encarnada  
Elemento - Maldição`,
  Magias: `Nível 1 -Olho do Desespero,  
Nível 3 - Eco da Dor`,
  Passivas: `-`,
  Talentos: `-`,
 Descricao:`Conhecida entre as crianças como "a jovem loira que aparece nos banheiros dos salões de aprendizado", a Loira do Banheiro é uma lenda urbana que ganhou forma em Terras de Calisto através da força do medo coletivo e do culto obsessivo de alguns loucos que passaram a venerá-la.  
Usando vestido branco e com algodões cobrindo narinas, ouvidos ou boca, sua aparência é perturbadora e simbólica.  

Seu surgimento está condicionado a rituais e brincadeiras específicas que invocam sua presença, causando medo e confusão nas vítimas.  
Apesar de não ser uma criatura poderosa em força física, sua capacidade de possuir e causar dano maldito a torna um adversário perigoso em ambientes fechados e sagrados para o aprendizado dos jovens.  
O culto e a obsessão desses fanáticos ajudaram a dar forma à criatura, tornando-a uma entidade que só pode ser manifestada por invocação, alimentando o medo e a superstição entre os mais jovens.`
,
  _imgs: [
    "imagens/LoiraBanheiro1.png",
    "imagens/LoiraBanheiro1.png",
    "imagens/LoiraBanheiro1.png"
  ],

  get img() {
    return this._imgs[Math.floor(Math.random() * this._imgs.length)];
  },

  _imgs2: [
    "imagens/Token-LoiraBanheiro1.png",
    "imagens/Token-LoiraBanheiro1.png"
  ],

  get img2() {
    return this._imgs2[Math.floor(Math.random() * this._imgs2.length)];
  }
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
        TagsCriatura: "Agressivo,Raro,Sono",
 TipoElementoCriatura: "Desconhecido",
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
  
  ,"Emporium - Manifestação do Poder": {
  vida: 409,
  sanidade: 81,
  especial: 13,
  armadura: 15,
  movimento:12,
  vidaPorNivel: 9,
  sanidadePorNivel: 9,
  especialPorNivel: 9,
  armaduraPorNivel: 3,
  TagsCriatura: "Alma,Domínio dos Mortos,Entidade,Lendário",
  TipoElementoCriatura: "Poder",
  bru: 12, agi: 10, det: 22, pre: 16, lib: 99, cnx: 13,
  bruDano: 2, agiDano: 0, detDano: 2, preDano: 2, libDano: 18, cnxDano: 1,
  bruTest: 1, agiTest: 0, detTest: 4, preTest: 3, libTest: 30, cnxTest: 2,
bonus: `Resistente: Desconhecido  
Vulnerável: Caos, Fé  
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
  
  ,"Eldoria - A Morte de Calisto": {
  vida: 365,
  sanidade: 2,
  especial: 12,
  armadura: 11,
  movimento: 10,
  vidaPorNivel: 24,
  sanidadePorNivel: 24,
  especialPorNivel: 12,
  armaduraPorNivel: 3,
  TagsCriatura: "Sangue,Domínio dos Vivos,Entidade,Lendário",
  TipoElementoCriatura: "Fé",
  bru: 10, agi: 12, det: 99, pre: 18, lib: 16, cnx: 15,
  bruDano: 2, agiDano: 0, detDano: 18, preDano: 3, libDano: 2, cnxDano: 1,
  bruTest: 1, agiTest: 0, detTest: 30, preTest: 4, libTest: 2, cnxTest: 1,
bonus: `Resistente: Poder  
Vulnerável: Desconhecido, Caos  
Imune: Fé`,
  bonus2: `{pigmento}*Invasão Corpórea:*{/pigmento} Quando estiver em estado de morte, pode tentar invadir o corpo de um inimigo a até 6 metros. O inimigo faz um teste de Determinação com vantagem (DT 30). Se falhar, o corpo explode em sangue (3d10 em área de 3m) e sobra apenas um crânio marcado, de onde a Entidade renasce com vida total. Se a entidade não conseguir, ela é banida.
{pigmento}*Foice de Sangue:*{/pigmento} Ataque normal causa 20 + 3d12 de dano de Sangue. Ao atingir, pode explodir o golpe causando 2d10 de Sangue em área de 3m.
{pigmento}*Reanimar com Sangue:*{/pigmento} Faz o sangue dos mortos pulsar e se levantar. Reanima 1d12 cadáveres por vez, cada um com 50 de vida e ataque de 10 + 2d12 de Sangue. Agem em turno próprio como cópias menores da entidade.
{pigmento}*Forma Inalvejável:*{/pigmento} Uma vez a cada 3 turnos, transforma-se em sangue líquido até o início do próximo turno. Inalvejável por ataques à distância. Pode atravessar aberturas e superfícies líquidas durante esse estado.
{pigmento}*Explosão Corpórea:*{/pigmento} Similar à Invasão Corpórea, mas usada como ataque. Entra no corpo de um inimigo (sem testes) e o explode de dentro para fora, causando 50 + 2d12 de Sangue. O alvo faz um teste de Determinação (DT 20); se passar, sofre metade.
{pigmento}*Maré de Calisto:*{/pigmento} A cada 4 turnos, todos os inimigos com menos de metade da vida fazem um teste de Determinação (DT 35). Quem falhar sofre 6d10 de dano de Sangue e fica Caído.
{pigmento}*Olhar do Crânio Vivo:*{/pigmento} Os que olham diretamente para seu símbolo marcado em crânios fazem teste de Libertação (DT 25) ou ficam Atordoados por 1 turno.`,
  bonus3: `Entidade da Fé  
Subtipo - Sangue`,
  Magias: `Nível 1 – Todas as Magias de Fé (usa prioritariamente Sangue).`,
  Passivas: `Nível 2 – Todas as Passivas de Fé (usa prioritariamente Sangue).`,
  Talentos: `Enganação - Requisito: Conexão, Diplomacia  
Cura - Requisito: Conexão  
Libertação - Requisito: Determinação  
`,
  Descricao: `A Morte de Calisto é a manifestação viva do aspecto mais sombrio e sacrificial da fé: o Sangue. Invocada por cultistas devotos que reverenciam Calisto como entidade superior, sua aparição é sempre precedida por rituais sangrentos e oferendas macabras. Os seguidores esculpem símbolos antigos em crânios de animais ou até de seres vivos, selando ali o pacto.
Eles acreditam fielmente que Calisto foi a responsável por espurgar a escuridão das Terras de Calisto, outrora conhecidas como a antiga Eldoria. Em seus ritos, buscam desesperadamente trazê-la de volta, acreditando que somente sua presença poderá restaurar a ordem espiritual e purificar novamente o mundo. Por isso, cada sacrifício, cada marca esculpida, não é apenas uma oferenda — mas um chamado.
Em ocasiões raríssimas, um desses crânios pulsa com vida própria. Do sangue derramado no ritual, uma forma começa a se erguer. Primeiro o crânio, depois o sangue toma forma, criando um corpo translúcido e fluido, envolto em uma longa capa negra feita com os mantos dos cultistas que se sacrificaram para chamá-la. Das veias expostas e das memórias do derramamento, brota sua arma: uma foice feita inteiramente de sangue coagulado que vibra com o peso de mil mortes.
Ela não fala. Seu silêncio é a própria presença da sentença. Seu olhar escoa como tinta carmesim, e seu corpo pulsa como se ainda estivesse no útero de algo cósmico. Cada passo que dá é uma condenação, cada movimento é uma lembrança de que toda fé tem um preço.
Ela é brincalhona à sua maneira. Às vezes, finge estar enfraquecida apenas para lançar-se no corpo de um inimigo, fazendo-o explodir num gesto quase teatral. Os crânios deixados para trás tornam-se portais, e sua capa negra sempre encontra o caminho de volta, regenerando sua presença.
A Morte de Calisto é mais que uma entidade. Ela é um lembrete de que o sangue nunca seca completamente. Que o ciclo da fé, do sacrifício e do renascimento está sempre em movimento. Os reanimados que a seguem são reflexos dela mesma — sombras vermelhas que espalham seu domínio.
Seu verdadeiro corpo, como o da Entidade do Poder, não está presente. Esta é apenas uma manifestação — um receptáculo temporário. A forma real seria devastadora demais para o mundo. Mesmo assim, sua presença temporária já é o suficiente para gerar catástrofes religiosas, desequilíbrios espirituais e surtos de loucura entre os vivos.
Se derrotada e banida, seus seguidores choram sangue. Mas sabem que um novo crânio surgirá, e do sangue derramado, ela retornará.
Pois enquanto houver fé... haverá sacrifício.`,
  img: "imagens/EntidadeSangue.png",
  img2: "imagens/Token-EntidadeSangue.png"
}
,"Enkoni - A Voz no Vácuo": {
  vida: 318,
  sanidade: 169,
  especial: 26,
  armadura: 12,
  movimento: 9,
  vidaPorNivel: 13,
  sanidadePorNivel: 13,
  especialPorNivel: 13,
  armaduraPorNivel: 1,
  Ataquebásico: `2d20 de dano Mental DT 15 – teste Conexão`,
  TagsCriatura: "Psicológico,Domínio do Sobrenatural,Entidade,Lendário",
  TipoElementoCriatura: "Desconhecido",
  bru: 9, agi: 10, det: 35, pre: 16, lib: 18, cnx: 99,
  bruDano: 1, agiDano: 0, detDano: 3, preDano: 2, libDano: 3, cnxDano: 5,
  bruTest: 1, agiTest: 0, detTest: 7, preTest: 3, libTest: 5, cnxTest: 30,
  bonus: `Resistente: Caos  
Vulnerável: Fé, Poder  
Imune: Desconhecido`,
bonus2: `{pigmento}*Leitura Mental:*{/pigmento} Sempre que alguém agir próximo da entidade, ela pode prever sua ação. O jogador deve escolher duas jogadas possíveis e lançar um ímpar-par para decidir qual delas executará. Caso não faça isso, a entidade tem vantagem em qualquer ação contra ele naquele turno.
{pigmento}*Levitocinese:*{/pigmento} A cada turno, objetos de até 20kg em um raio de 10 metros podem ser levitados ou arremessados, causando 2d12 de dano e empurrando o alvo 3 metros (teste de Conexão DT 20 para resistir ao empurrão).
{pigmento}*Invisibilidade Fluida:*{/pigmento} Pode se camuflar no ambiente ao mudar de cor, tornando-se invisível por até 2 turnos, ou até atacar. Pode atravessar superfícies líquidas nesse estado.
{pigmento}*Possessão Mental:*{/pigmento} Uma vez a cada 5 turnos, pode tentar possuir um alvo isolado a até 12 metros. O alvo realiza teste de Libertação (DT 30). Se falhar, entra em hibernação por 1d4 turnos enquanto a entidade assume sua forma. Durante esse tempo, o corpo original permanece inconsciente e a entidade copia seus atributos físicos.
{pigmento}*Mutação de Forma:*{/pigmento} Se estiver sozinha com outro ser consciente, pode assumir sua forma física perfeitamente. O original entra em estado de hibernação forçada até ser acordado (teste de Libertação DT 25 feito por um aliado). Enquanto disfarçada, a entidade não pode ser detectada exceto por poderes que envolvam fé ou verdade.
{pigmento}*Voz na Mente:*{/pigmento} Pode comunicar-se mentalmente com qualquer criatura que veja, causando 1d12 de dano mental por turno se o alvo falhar em um teste de Conexão (DT 18). Se passar, a voz é silenciada por 2 turnos.
{pigmento}*Banimento de Pensamento:*{/pigmento} Caso alguém consiga manter a mente vazia ou sem direção (interpretado como passar um turno sem ações ofensivas), cancela qualquer tentativa da entidade de controle ou leitura mental.
{pigmento}*Fragmento Imortal:*{/pigmento} Caso sua vida chegue a 0, a entidade se dissolve em uma névoa etérea e desaparece, podendo ainda ouvir sussurros vindos dos céus. Ela não morre, apenas se dispersa para além da compreensão. Pode retornar em outro lugar, em outro tempo, ou no próprio pensamento de quem a enfrentou.`,
  bonus3: `Entidade do Desconhecido  
Subtipo – Psicológico`,
  Magias: `Nível 1 – Todas as Magias de Desconhecido.`,
  Passivas: `Nível 2 – Todas as Passivas de Desconhecido.`,
  Talentos: `Enganação – Requisito: Conexão  
`,
  Descricao: `Chamam-na de "A Voz no Vácuo", mas seu nome verdadeiro jamais foi ouvido por uma mente viva. Essa é a forma mais comum da Entidade do Desconhecido, uma manifestação que transcende carne e lógica. Sua aparência remete a um polvo consciente, flutuando no espaço físico com tentáculos imateriais que se contorcem entre dimensões. Seus olhos (ou o que parecem olhos) giram em órbitas impossíveis, e suas palavras são pensamentos injetados nas mentes dos vivos.  
Ela surge quando o véu entre os mundos se parte. Um culto esquecido, um sonho profético, ou um silêncio profundo demais pode ser o suficiente para atraí-la. Ela não invade — ela é convidada, mesmo que inconscientemente. Seus seguidores não a veneram com sangue, mas com segredos, medos e a completa entrega do ego. Quando alguém tenta resistir à sua presença, ela sussurra memórias que nunca existiram, corrompe pensamentos com dúvidas e desmonta identidades como quebra-cabeças.  
Sua presença distorce o ar. Objetos flutuam, sons desaparecem, e a luz parece se curvar. Aqueles que a veem jamais têm certeza se foi real. Os que tentam enfrentá-la devem antes enfrentar a si mesmos. Suas técnicas mentais, suas ilusões e mutações desafiam até os mais fortes em espírito. Mesmo os heróis mais honrados podem acabar caindo em sono eterno, confundidos por suas próprias crenças.  
Ela é divertida à sua maneira — assume formas conhecidas, copia gestos de entes queridos, e manipula emoções até o colapso. Um ataque seu não é apenas físico ou mental: é existencial.  
Mesmo sendo apenas uma manifestação, sua presença já causa surtos psíquicos, rupturas entre planos e o colapso de dogmas inteiros. Sua forma verdadeira nunca foi vista, pois qualquer um que tente alcançá-la torna-se parte de sua ilusão eterna.  
E se ela for destruída, nada acontece. Pois ela jamais esteve ali, apenas em nossas mentes. Mas, inevitavelmente... voltará.`,
  img: "imagens/EntidadeDesconhecido.png",
  img2: "imagens/Token-EntidadeDesconhecido.png"
}
	
	,"Torrent - Manifestação do Caos": {
  vida: 340,
  sanidade: 130,
  especial: 45,
  armadura: 18,
  movimento: 12,
  vidaPorNivel: 15,
  sanidadePorNivel: 9,
  especialPorNivel: 14,
  armaduraPorNivel: 2,
  Ataquebásico: `2d20 de dano Caos DT 12 – teste Preservação`,
  TagsCriatura: "Pacífico,Domínio da Natureza,Entidade,Lendário",
  TipoElementoCriatura: "Caos",
  bru: 28, agi: 50, det: 15, pre: 99, lib: 20, cnx: 11,
  bruDano: 6, agiDano: 5, detDano: 2, preDano: 12, libDano: 2, cnxDano: 1,
  bruTest: 6, agiTest: 10, detTest: 1, preTest: 20, libTest: 3, cnxTest: 1,
  bonus: `Resistente: Fé  
Vulnerável: Desconhecido, Poder  
Imune: Caos`,
bonus2: `{pigmento}*Raiva dos Ciclos:*{/pigmento} Quando o ambiente ao redor está visivelmente degradado ou desbalanceado, a entidade se transforma, ganhando olhos pulsantes em sua pele e tornando-se agressiva. Nessa forma, seus ataques causam dano adicional igual a metade do dano original e ela ganha +1 na DT de todos os testes. Essa transformação termina após 3 turnos em equilíbrio natural.
{pigmento}*Manto da Mãe Selvagem:*{/pigmento} A cada turno, após atacar, sua pele se reveste de madeira viva, criando uma armadura temporária que reduz o próximo dano recebido em 10. Este efeito se acumula até um máximo de 30.
{pigmento}*Vínculo Primal:*{/pigmento} Uma vez a cada 2 turnos, pode se deslocar instantaneamente através da fauna, surgindo a partir de uma planta ou animal em até 20 metros de distância. Não pode atravessar construções ou ambientes artificiais.
{pigmento}*Fúria da Presa Antiga:*{/pigmento} Seus ataques corpo a corpo, como garras ou mordidas, causam 2d10 de dano físico. Se atingir um inimigo que causou dano à natureza recentemente, a mordida ganha efeito de sangramento (1d6 por 2 turnos).
{pigmento}*Sussurros das Raízes:*{/pigmento} Ao ser atacada por qualquer criatura, a entidade sussurra diretamente na mente do agressor. O alvo deve realizar um teste de Preservação (DT 15) ou ficará Confuso até o fim do próximo turno.
{pigmento}*Ritual da Reconciliação:*{/pigmento} A entidade pode ser banida de forma pacífica se um personagem realizar uma ação sincera em benefício da natureza (plantar algo, curar um animal, limpar um rio, etc). Se feito com o coração limpo, ela se distancia, desaparecendo calmamente. Ela nunca morre: se zerar a vida, transforma-se em uma árvore com marcas espirais e se esconde na floresta.
{pigmento}*Companheira Silvestre:*{/pigmento} Ao entrar em combate, invoca uma criatura da floresta para lutar ao seu lado. Essa criatura varia conforme o ambiente (lobo, cervo, urso, coruja, etc), com 30 de vida e 1d12 de dano físico. Ela desaparece se morta ou se o combate terminar.
{pigmento}*Presença Inquebrável:*{/pigmento} Aqueles com forte ligação ao Caos não conseguem se enfrentar e nem ela os ataca. Ambos se reconhecem como parte do mesmo fluxo e ignoram-se mutuamente, a menos que a natureza esteja sob risco imediato.`
,  bonus3: `Manifestação do Caos  
Subtipo – Entidade Primordial  
Torrent não representa apenas o caos – ela **é** o caos.  
Tudo o que é mutável, imprevisível, selvagem ou impossível encontra sua origem nela.`,

  Magias: `Nível 1 – Todas as Magias do elemento Caos.`,
  Passivas: `Nível 2 – Todas as Passivas do elemento Caos.`,
  Talentos: `-`,
  Descricao: `Conhecida apenas como *Torrent*, essa entidade é a encarnação viva do próprio Caos. Suas formas variam: já foi vista como um cão de olhos ternos com um cachecol colorido; em outros relatos, surge como uma criatura fluida de olhos múltiplos, sussurrando verdades de outros planos.  
Torrent não tem propósito linear. É a semente da dúvida, a mudança repentina, a correnteza que quebra a represa. Onde há ordem, ela instiga a quebra. Onde há rigidez, ela traz transformação.  
Sua ligação com a natureza a torna tanto guardiã quanto destruidora. Atua de forma instintiva, e raramente fala — mas quando o faz, sua voz ecoa dentro da mente como um pensamento que nunca foi seu.  
Aqueles que a enfrentam sofrem mais do que ferimentos: perdem a firmeza da realidade. Confundem passado e futuro. Vêem reflexos que não os seguem.  
Mas há quem diga que Torrent não pode ser destruída. Que mesmo morta, ela paira como névoa entre mundos. Que um dia, todo o universo voltará ao seu estado original: o Caos primordial, e Torrent estará lá, sussurrando que tudo apenas voltou ao que sempre foi.`,

  img: "imagens/EntidadeCaos.png",
  img2: "imagens/Token-EntidadeCaos.png"
},"Yarúma - A Mão Pacífica da Natureza": {
  vida: 253,
  sanidade: 130,
  especial: 45,
  armadura: 16,
  movimento: 10,
  vidaPorNivel: 12,
  sanidadePorNivel: 9,
  especialPorNivel: 14,
  armaduraPorNivel: 2,
  Ataquebásico: `3d12 de dano Água DT 12 – teste Preservação`,
  TagsCriatura: "Pacífico,Domínio da Natureza,Entidade,Lendário",
  TipoElementoCriatura: "Caos",
  bru: 45, agi: 20, det: 18, pre: 70, lib: 33, cnx: 11,
  bruDano: 10, agiDano: 2, detDano: 2, preDano: 9, libDano: 3, cnxDano: 1,
  bruTest: 9, agiTest: 4, detTest: 2, preTest: 14, libTest: 5, cnxTest: 1,
  bonus: `Resistente: Fé  
Vulnerável: Poder, Desconhecido  
Imune: Caos`,
  
  bonus2: `{pigmento}*Oferta da Mão da Natureza:*{/pigmento} Ao surgir diante de mortais, Yarúma oferece uma troca justa: quem abdicar dos poderes concedidos por outras entidades poderá refazer completamente suas habilidades, alinhando-se ao elemento Caos. Este é um pacto profundo e transformador, só permitido com aprovação do mestre.  
{pigmento}*Levitando a Essência:*{/pigmento} Yarúma domina a água ao seu redor, erguendo-a com facilidade. Pode atacar à distância, moldando correntes líquidas que atingem com força devastadora: 3d12 de dano Água, com DT 12 para resistência.  
{pigmento}*Braço da Tempestade:*{/pigmento} Seu braço direito foi amputado por Eldoria, a antiga Entidade do Poder, durante as Guerras dos 800 Anos. No local, cresceu uma estrutura de energia pura que conduz eletricidade. Quando desejado, Yarúma desfere um golpe corpo a corpo que causa 2d12 de dano Elétrico, podendo atordoar o alvo (teste de Determinação DT 14 ou perde a próxima ação).  
{pigmento}*Serena e Imponente:*{/pigmento} Raramente entra em combate. Sua presença é suficiente para intimidar e acalmar criaturas hostis. Qualquer criatura que iniciar combate contra Yarúma deve realizar um teste de Preservação (DT 16) ou hesita, perdendo sua primeira ação.  
{pigmento}*Vínculo com a Floresta:*{/pigmento} Sempre acompanhada por criaturas em versões feitas de Madeira, como cervos, aves ou grandes felinos, que a protegem e vigiam os arredores. Se atacada, até 2 dessas criaturas intervêm automaticamente, cada uma com 25 de vida e ataque de 1d10 de dano físico.  
{pigmento}*Retiro Silencioso:*{/pigmento} Ao sofrer dano crítico, Yarúma pode optar por se dissolver em névoa aquática, desaparecendo completamente da cena e retornando ao seu templo ou floresta mais próxima. Esta habilidade só pode ser usada uma vez por dia.  
{pigmento}*Guardião dos Ciclos:*{/pigmento} Quando presencia uma ação de destruição gratuita à natureza, Yarúma assume uma postura mais firme, elevando sua armadura temporariamente em +4 e aumentando seu dano de água em +1d6 pelos próximos 2 turnos.`,

  bonus3: `Manifestação do Caos  
Subtipo – Entidade Ancestral  
Yarúma não é apenas uma entidade: é a própria mão da natureza em sua forma mais pura e equilibrada.  
Embora represente o Caos, sua presença não é destrutiva, mas sim transformadora e regeneradora.  
Onde passa, a natureza se renova, mas também se impõe, lembrando aos mortais que não há poder maior que o ciclo interminável da vida, morte e renascimento.`,

  Magias: `Nível 1 – Todas as Magias do elemento Caos.`,
  Passivas: `Nível 2 – Todas as Passivas do elemento Caos.`,
  Talentos: `-`,
  Descricao: `Conhecida pelos povos antigos como *Yarúma*, a Mão Pacífica da Natureza, esta entidade é a manifestação viva do Caos em sua forma mais serena e sábia.  
Diferente das representações violentas e destrutivas do Caos, Yarúma é o fluxo silencioso do rio, o brotar inesperado de uma semente, a tempestade necessária para renovar a floresta.  
Habita florestas densas, templos esquecidos e ruínas cobertas por musgo, raramente se mostrando aos mortais, a não ser quando um desequilíbrio ameaça o ciclo natural.  
Seus seguidores são poucos, mas devotados: druídas, xamãs e eremitas que compreendem que o Caos não é inimigo da ordem, mas sua eterna companheira.  
Diz-se que, ao aceitar o pacto com Yarúma, um mortal renasce: troca os poderes de entidades anteriores e se une ao fluxo caótico, remodelando suas habilidades sob novos princípios.  
Apesar de sua tranquilidade, poucos ousam enfrentá-la. Sua força é assombrosa, e sua ligação com a água e a tempestade lembram a todos que, quando necessário, a natureza não hesita em se defender.`,

  img: "imagens/Yaruma-Natureza.png",
  img2: "imagens/Token-Yaruma-Natureza.png"
},
	
	"Donar - O Retorno de Thorville": {
  vida: 267,
  sanidade: 143,
  especial: 64,
  armadura: 6,
  movimento: 7.5,
  vidaPorNivel: 10,
  sanidadePorNivel: 6,
  especialPorNivel: 4,
  armaduraPorNivel: 3,
  Ataquebásico: `Golpe de Martelo – 2d10+3 de dano Elétrico - BRU`,
  TagsCriatura: "Eletricidade,Domínio da Natureza,Entidade,Lendário",
  TipoElementoCriatura: "Caos",
  bru: 25, agi: 14, det: 12, pre: 14, lib: 13, cnx: 22,
  bruDano: 3, agiDano: 1, detDano: 1, preDano: 1, libDano: 1, cnxDano: 3,
  bruTest: 6, agiTest: 2, detTest: 1, preTest: 2, libTest: 1, cnxTest: 5,
  bonus: `Resistente: Tempestade  
Vulnerável: Psíquico, Escuridão  
Imune: Eletricidade`,
  bonus2: `{pigmento}*<a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p4">Armadura Sobrenatural</a>:*{/pigmento} Enquanto com a armadura sobrenatural recebe apenas metade todo dano físico recebido.  
{pigmento}*Efeito <a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=p3">Bêbado</a>:*{/pigmento} Sempre ativo durante o combate. Em falha de teste de CNX, pode atacar aliados próximos em 1d4 turnos.  
{pigmento}*Trovão Ensurdecedor:*{/pigmento} Ao ser invocado, causa 2d10 de dano Elétrico em inimigos num raio de 30m. Criaturas na área devem passar em um teste de Determinação (DT 15) ou ficam **Cegas** por 1d4 turnos (-10 em testes de reação e ação).  
{pigmento}*Lealdade de Sangue:*{/pigmento} Donar considera o invocador como parte da família. O mestre decide suas ações, mas o invocador pode sugerir ordens.  
{pigmento}*Martelo Divino:*{/pigmento} Pode desferir um ataque devastador com 3d12 de dano Elétrico. Teste de BRU (DT 20) do alvo para resistir.`,
  bonus3: `Entidade Divina de Asgard  
Elemento - Elétrico`,
  Magias: `Todas as magias de Eletricidade e Tespestade`,
  Passivas: `Ativas durante todo o combate: Armadura Sobrenatural, Bêbado.`,
  Talentos: `-`,
  Descricao: `Donar, também chamado de Thorville, é uma entidade divina dos 5 Céus Eternos de Asgard. Invocado pelo poder da magia "Retorno de Thorville", sua chegada é anunciada por trovões e uma luz cegante que aterroriza todos ao redor. Ele luta ao lado do invocador por 1d12 turnos ou até o fim da cena.  
Embora possua vontade própria, Donar reconhece o invocador como parte de sua família, escutando suas sugestões e protegendo-o como um irmão de guerra. Seu estilo de combate é agressivo e carregado de energia divina, oscilando entre a força de um guerreiro lendário e a imprevisibilidade do efeito Bêbado que sempre o acompanha.  
Portador de uma Armadura Sobrenatural e de um Martelo Divino capaz de obliterar qualquer inimigo, Donar é a personificação da fúria dos céus.`,
  _imgs: [
      "imagens/Donar1.png",
      "imagens/Donar1.png"
    ],
    
    get img() {
      return this._imgs[Math.floor(Math.random() * this._imgs.length)];
    },

    _imgs2: [
      "imagens/Donar1.png",
      "imagens/Donar1.png"
    ],

    get img2() {
      return this._imgs2[Math.floor(Math.random() * this._imgs2.length)];
    }
	}
,
	"Namazunaga - O Tremor dos Mortos": {
  vida: 340,
  sanidade: 210,
  especial: 95,
  armadura: 8,
  movimento: 9,
  vidaPorNivel: 20,
  sanidadePorNivel: 8,
  especialPorNivel: 5,
  armaduraPorNivel: 2,

TagsCriatura: "Tremor,Domínio dos Mortos,Entidade,Lendário",
  TipoElementoCriatura: "Poder",
  bru: 28, agi: 14, det: 18, pre: 20, lib: 45, cnx: 25,
  bruDano: 4, agiDano: 1, detDano: 2, preDano: 2, libDano: 7, cnxDano: 3,
  bruTest: 6, agiTest: 2, detTest: 3, preTest: 4, libTest: 12, cnxTest: 5,


  Ataquebásico: `3d12 de dano Esmagante - BRUTALIDADE (Tremor interno)`,

  bonus: `Imune: Tremor
Resistente: Eclipse, Distorção
Vulnerável: Cinzas, Luz`,

  bonus2: `{pigmento}*Cauda Sísmica:*{/pigmento} Um golpe massivo com a cauda que causa *3d20 de dano Esmagante*.  
Alvos atingidos devem realizar um teste de Brutalidade (DT 18) ou são derrubados e ficam _Atordoados_ até o próximo turno.

{pigmento}*Mordida Abissal:*{/pigmento} Uma mordida que vibra com energia do Reino dos Mortos, causando *4d12 de dano Físico*.  
Se o alvo falhar em um teste de Determinação (DT 18), sofre _Tremor Interno_, recebendo 1d12 adicional por 2 turnos.

{pigmento}*<a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m93">Poltergeist:</a>*{/pigmento} 
Ao usar esta magia, **tem o efeito extra de** forçar todos os inimigos na área de 25m a realizar um teste de Determinação (DT 17).  
Falha: sofrem *2d12 de dano Psíquico* e perdem suas reações no turno.

{pigmento}*<a href="https://terras-de-calisto-ficha-rpg.netlify.app/#tc=m115">Implosão Estelar de Plasma:</a>*{/pigmento}  
Ao usar esta magia, **tem o efeito extra de** deixar Namazunaga _imóvel por 1 turno_ e _gastar todas as ações restantes_.


{pigmento}*Voo Abissal:*{/pigmento} Namazunaga voa com asas negras escamas metálicas que vibram como sinos espectrais.  
Qualquer criatura que tente montar nele sofre imediatamente *3d20 de dano de Tremor* por instabilidade dimensional.

{pigmento}*Poder da União:*{/pigmento}  
Em um raio de 50m, cria um ponto gravitacional sísmico que _atrai todos_ para o centro.  
Teste de Determinação (DT 20).  
Falha: sofre *1d20 de dano de Tremor* e é arrastado por *1, 2 ou 3 turnos* dependendo da distância:

– 10m → 1 turno  
– 30m → 2 turnos  
– 50m → 3 turnos`,


  bonus3:`Manifestação Suprema do Tremor  
Elemento – Poder`,

  Magias:`Todas as magias de Tremor.`,

  Passivas:`Nenhuma passiva adicional além de suas habilidades naturais.`,

  Talentos:`-`,

 Descricao:`Namazunaga é uma lenda viva entre os povos antigos e uma ameaça silenciosa nas Terras de Calisto.  
Chamado de "O Tremor dos Mortos", ele é o único ser vivo conhecido que conseguiu entrar no Reino dos Mortos sem morrer — e lá permaneceu por eras, crescendo, consumindo ecos, memórias, almas desgarradas e a própria estrutura dimensional.

Conta-se que, quando adulto, Namazunaga _rasgou a realidade com o próprio corpo_, vibrando a dimensão como um tambor cósmico, até abrir uma fissura que o devolveu ao mundo dos vivos. Desde então, seu nome sozinho faz o coração tremer e a alma estremecer.

Nas noites calmas, estudiosos e lunáticos afirmam ver dois olhos negros brilhando entre as estrelas — observando, julgando, esperando.

Ele é o _criador original das magias de Tremor_, e aqueles que sentem o tremor da vida ou da morte afirmam ouvir seu chamado.  
As vibrações são ecos do Reino dos Mortos tentando invadir o mundo dos vivos: sombras que não podem ser vistas, sussurros que não têm boca, movimentos sem origem — talvez fantasmas.

E nas noites de lua cheia... dizem que Namazunaga assume a forma de um enorme bagre negro e nada nos mares, arrastando consigo a vibração do além.`,


  img: "imagens/DragaoBlack.png",
  img2: "imagens/DragaoBlackToken.png"
}
,
	
	"IncubusDragon - O Horror e o Pesadelo": {
  vida: 334,
  sanidade: 45,
  especial: 14,
  armadura: 8,
  movimento: 8,
  vidaPorNivel: 8,
  sanidadePorNivel: 5,
  especialPorNivel: 6,
  armaduraPorNivel: 4,
 Ataquebásico: `Dois ataques por Turno-2d20 de dano Cortante - Agilidade`,
  TagsCriatura: "Sono,Reino dos Sonhos,Entidade,Lendário",
  TipoElementoCriatura: "Desconhecido",
  bru: 15, agi: 12, det: 20, pre: 14, lib: 24, cnx: 55,
  bruDano: 1, agiDano: 0, detDano: 2, preDano: 1, libDano: 3, cnxDano: 10,
  bruTest: 2, agiTest: 1, detTest: 3, preTest: 2, libTest: 6, cnxTest: 15,
  bonus: `Resistente: Escuridão, Sono  
Vulnerável: Fé, Elétrico  
Imune: Psicológico`,
  bonus2: `{pigmento}*Puxar Almas:*{/pigmento} Afeta alvos dormindo que já sonharam com ele ao menos 2 vezes. Teste de Libertação (DT 25) ou sofre 4d20+10 de dano de Sono e tem a alma parcialmente aprisionada nos domínios oníricos.
{pigmento}*Forçar o Sono:*{/pigmento} Em uma área de 6 metros, todos os inimigos devem fazer um teste de Determinação (DT 15) ou adormecem instantaneamente.
{pigmento}*Sonambulismo Forçado:*{/pigmento} Ativa a condição **Sonambulismo** em um alvo à escolha em até 8 metros. Teste de Determinação (DT 12).
{pigmento}*Pesadelo Vivo:*{/pigmento} Alvo dormindo a até 3 metros pode ser invadido. O Incubus entra fisicamente no sonho da vítima, que fica em pânico e se debate. Perde 10 de Sanidade ao entrar e mais 2 por turno. Enquanto isso, o corpo do alvo brilha em roxo.
{pigmento}*Terror Manifesto:*{/pigmento} Todos que veem o IncubusDragon pela primeira vez perdem 1d12 de Sanidade. Em encontros subsequentes, 1d6.
{pigmento}*Toque do Devaneio:*{/pigmento} Cura instantaneamente o valor total de Sanidade do alvo. A mão do IncubusDragon brilha em rosa e evapora. O alvo não sofre dano e só pode tentar esquivar.
{pigmento}*Dualidade Onírica:*{/pigmento} Possui duas formas distintas:  
- {subpigmento}*IncubusDragon:*{/subpigmento} Forma de terror onírico, surgindo em pesadelos e trazendo loucura.  
- {subpigmento}*Morpheus:*{/subpigmento} Forma de descanso e sabedoria, orientando os que vagueiam no Reino dos Sonhos.`,
  bonus3: `Entidade dos Sonhos  
Elemento - Desconhecido`,
  Magias: `Nível 1 – Todas as Magias de Sono.`,
  Passivas: `Nível 1 – Todas as Passivas de Sono.`,
  Talentos: `-`,
  Descricao: `O IncubusDragon, também conhecido como Morpheus, é uma das entidades mais enigmáticas das Terras de Calisto. Guardião absoluto do Reino dos Sonhos, manifesta-se em formas que oscilam entre o terror mais profundo e a paz mais serena. Aqueles que cruzam seu caminho em pesadelos o conhecem como IncubusDragon – um arauto do pânico onírico que se alimenta do medo e da confusão gerada nas mentes frágeis. Já os sábios e buscadores espirituais que o encontram durante meditações e sonhos lúcidos o chamam de Morpheus – a essência do descanso, o mestre do subconsciente.
Sua forma física é instável. Às vezes surge como uma criatura dracônica feita de névoa púrpura com olhos brilhando em azul vívido. Outras vezes, é uma figura encapuzada de longas asas sombreadas e um corpo coberto por fragmentos dourados de sonhos antigos. Quando entra nos sonhos de alguém, ele se funde ao cenário, adaptando-se à mente do sonhador. Essa fusão é perigosa e destrutiva – o simples toque do IncubusDragon pode comprometer a alma de seu alvo.
Há um local sagrado e amaldiçoado no continente do Luar conhecido como *Pico do IncubusDragon*. Dizem que ali sua presença é sentida com mais força, e muitos afirmam vê-lo ao longe durante certas noites do ano. Sonhos que nascem nessa região são sempre mais intensos, caóticos e proféticos.
Estudiosos e seguidores de sua existência formaram o **Culto dos Apanhadores de Sonhos**, uma ordem secreta que aprende a manipular o mundo onírico. A evolução entre seus membros é gradual e simbólica:
- Aspirantes dos Sonhos iniciam sua jornada entre véus de devaneios.
- Tecelões aprendem a moldar sonhos.
- Guardiões dos Subconscientes vigiam as fronteiras do mundo desperto.
- Senhores do Sono Eterno caminham ao lado de Morpheus.
- Profetas das Visões Oníricas decifram os enigmas dos pesadelos.
- Apanhadores dos Pesadelos são os únicos capazes de tocar a consciência do próprio IncubusDragon.
Seu propósito é dual: proteger o equilíbrio dos sonhos e testar as mentes dos mortais. Nenhum outro ser possui domínio tão absoluto sobre o sono e seus mistérios quanto essa entidade. Para os fracos de mente, ele é o fim. Para os que ousam entender... um novo começo.`,
 _imgs: [
      "imagens/IncubusDragon1.png",
      "imagens/IncubusDragon2.png",
	  "imagens/IncubusDragon3.png"
	 
    ],
    
    get img() {
      return this._imgs[Math.floor(Math.random() * this._imgs.length)];
    },

    _imgs2: [
      "imagens/Token-IncubusDragon1.png",
      "imagens/Token-IncubusDragon2.png",
	  "imagens/Token-IncubusDragon2.png"
    ],

    get img2() {
      return this._imgs2[Math.floor(Math.random() * this._imgs2.length)];
    },

    // outros dados como vida, sanidade, etc. aqui...
  },"Aberração Onírica – A Ruptura dos Sonhos": {
  vida: 264,
  sanidade: 312,
  especial: 41,
  armadura: 8,
  movimento: 8,

  vidaPorNivel: 12,
  sanidadePorNivel: 16,
  especialPorNivel: 14,
  armaduraPorNivel: 1,

  Ataquebásico: `7d6 de dano Psíquico à distância – DT 18 (Conexão)`,

  TagsCriatura: "Psicológico,Domínio do Sobrenatural,Entidade,Lendário",
  TipoElementoCriatura: "Desconhecido",

  bru: 12, agi: 14, det: 38, pre: 22, lib: 26, cnx: 41,

  bruTest: 1, agiTest: 2, detTest: 10, preTest: 4, libTest: 6, cnxTest: 11,
  bruDano: 0, agiDano: 1, detDano: 6, preDano: 2, libDano: 3, cnxDano: 6,

  bonus: `Resistente: Poder  
Vulnerável: Fé  
Imune: Psicológico`,

  bonus2: `
{pigmento}*Invadir a Mente:*{/pigmento} Todos em um raio de 20m fazem teste de Libertação (DT 20). Quem falhar sofre *Confusão Onírica* por 1d4 turnos, percebendo aliados como ameaças distorcidas.

{pigmento}*Distorção Temporal:*{/pigmento} A cada 2 turnos, cria um atraso temporal em criaturas a até 15m. O movimento delas é reduzido pela metade (Preservação DT 18).

{pigmento}*Contaminação Onírica:*{/pigmento} Criaturas afetadas realizam teste de Libertação (DT 20) a cada turno. Falha causa *Sonambulismo* e 1d12 de dano Psicológico por colapso mental.

{pigmento}*Propagação:*{/pigmento} Criaturas que falharem 3 vezes consecutivas em testes de Libertação enquanto sonâmbulas começam a se transformar. Após o 3º turno, tornam-se Aberrações Oníricas Menores.

{pigmento}*Rasgo Onírico:*{/pigmento} A cada 5 turnos cria uma fenda de 6m que distorce o espaço. Causa 4d12 Psicológico, revelando versões ilusórias do alvo atacando-o simultaneamente.

{pigmento}*Véu do Pesadelo Vivo:*{/pigmento} Possui três sobreposições de sonho. O primeiro ataque direcionado à criatura a cada turno falha automaticamente.

{pigmento}*Sussurros Noctívagos:*{/pigmento} Implanta memórias falsas em alvos visíveis. Conexão (DT 21). Falha faz o alvo acreditar totalmente na memória implantada por 1d6 turnos.

{pigmento}*Colapso de Identidade:*{/pigmento} Criaturas que chegam a 0 de Sanidade dentro de seu raio caem sob controle emocional. O mestre escolhe medo, raiva ou desespero – o alvo age forçado por 1d4 turnos.

{pigmento}*Chamado ao Abismo Onírico:*{/pigmento} Ao “morrer”, se desfaz em névoa de sonho cobrindo 20m. Todos dentro sofrem 2d10 Psicológico e devem passar Libertação (DT 22) ou dormir por 1d6 turnos. A criatura retorna após 1d4 horas no Mundo dos Sonhos.

<details class="como-curar-detail" style="
  margin-top:10px;
  border:1px solid #333;
  padding:6px 8px;
  background:#111;
  border-radius:6px;
  box-shadow:0 0 8px rgba(0,0,0,0.5);
">
  <summary style="
    cursor:pointer;
    font-weight:bold;
    color:#e75d7a;
    font-size:14px;
    padding:4px 0;
  ">
    Como Curar
  </summary>

  <div class="curar-text" style="
    margin-top:10px;
    font-size:14px;
    line-height:1.45;
    color:#ddd;
  ">
    
    <p><strong>Método Geral:</strong> Leve o alvo ao <em>Mundo dos Sonhos</em> e confronte seu pesadelo interior. É necessário derrotar ou selar o pesadelo com auxílio de um <strong>mago dos sonhos</strong> ou <strong>soberano onírico</strong>.</p>

    <p><strong>Uso de Magia:</strong> Para curar apenas um alvo, utilize a magia <strong>Limpar</strong> enquanto o alvo estiver estabilizado e o pesadelo contido.</p>

    <p><strong>Entrada Guiada:</strong> Ritual de ancoragem para levar o paciente ao Mundo dos Sonhos. Requer 1 mago dos sonhos e um cristal de vítrea onírica.</p>

    <p><strong>Confronto do Pesadelo:</strong> O grupo entra na projeção onírica. O paciente enfrenta o núcleo do trauma; derrotar ou selar o pesadelo remove a raiz da corrupção.</p>

    <p><strong>Purga e Limpeza:</strong> Aplicar <em>Limpar</em> enquanto o pesadelo está selado faz o corpo desperto perder progressivamente os efeitos de Contaminação e Propagação.</p>

    <p><strong>Selo Onírico (Opcional):</strong> Um soberano onírico pode aplicar um selo que impede recontaminação por 1d30 dias.</p>

    <p><em>Nota:</em> Curar sem derrotar o pesadelo apenas suprime sintomas temporariamente — a transformação pode retornar. Rituais incompletos podem deixar resquícios, reduzindo permanentemente a sanidade.</p>

  </div>
</details>


`,

  bonus3: `Aberração Onírica  
Subtipo – Psicológico`,

  Magias: `Todas as magias de Psicológico e Mental.`,

  Passivas: `Todas as passivas de Desconhecido com foco em distorção mental e onírica.`,

  Talentos: `-`,

  Descricao: `A Aberração Onírica é o destino final daqueles consumidos pelos seus próprios pesadelos. 
Sua forma é instável, fluindo como sombra líquida e sonho malformado. 
Olhos que não pertencem ao corpo surgem e se apagam, e cada movimento dela rasga pequenas fendas na realidade, onde fragmentos de pesadelos vazam como luz invertida. 
Lutar contra ela é lutar contra memórias falsas, ecos temporais e versões distorcidas de si mesmo. 
Cada segundo próximo a essa criatura empurra os vivos para mais perto do colapso mental. Apenas enfrentando o pesadelo original no Mundo dos Sonhos é possível libertar a alma aprisionada.`,

  img: "imagens/AberracaoOnirica.png",
  img2: "imagens/Token-AberracaoOnirica.png"
}

  
  ,"Comunidade":{}
  
  
  

  
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
    TagsCriatura: "Ácido,Caça em Grupo,Agressivo,Voador,Comunidade",
    TipoElementoCriatura: "Caos",
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
    TagsCriatura: "Agressivo,Floresta,Ácido,Comunidade",
    TipoElementoCriatura: "Caos",
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
    TagsCriatura: "Agressivo,Morte,Humanoide,Comunidade",
    TipoElementoCriatura: "Fé",
    bru: 8, agi: 10, det: 9, pre: 10, lib: 20, cnx: 20,
    bruDano: -2, agiDano: 0, detDano: 0, preDano: 0, libDano: 2, cnxDano: 2,
    bruTest: 0, agiTest: -1, detTest: 0, preTest: 0, libTest: 4, cnxTest: 4,
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
    TagsCriatura: "Pacífico,Sagrado,Ilha do Céu,Comunidade",
    TipoElementoCriatura: "Fé",
    bru: 20, agi: 20, det: 10, pre: 15, lib: 10, cnx: 10,
    bruDano: 2, agiDano: 2, detDano: 0, preDano: 1, libDano: 0, cnxDano: 0,
    bruTest: 4, agiTest: 4, detTest: 0, preTest: 2, libTest: 0, cnxTest: 0,
    bonus: `Resistente: Escuridão, Eclipse ,Luz, Sagrado
Vulnerável: Alma, Tremor
Imune: Maldição, Sono`,
 bonus2: `
{pigmento}*Presença Divina:*{/pigmento} Em templos ou igrejas, recebe +5 em testes. Aliados a até 6m ganham +4 em testes de cura. Detecta criaturas malignas em 10m e, 1x por dia, pode ver o invisível por 1 minuto.  
{pigmento}*Voto :*{/pigmento} Enquanto estiver em local , protege criaturas neutras ou bondosas. O voto se rompe se o templo for ameaçado.  
{pigmento}*Corpo de Fé:*{/pigmento} Reduz em 2 o dano físico recebido. 1x por dia pode remover uma maldição leve ou moderada.  
{pigmento}*Caminho dos Justos:*{/pigmento} 1x por semana pode teleportar um aliado entre locais s. Se for destruído, retorna após 7 dias com um ritual de sacerdote.  
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
  ,
  "Var'gnir": {
  vida: 10,
  sanidade: 3,
  especial: 6,
  armadura: 5,
  movimento: 7,
  vidaPorNivel: 5,
  sanidadePorNivel: 3,
  especialPorNivel: 2,
  armaduraPorNivel: 1,
  bru: 12, agi: 14, det: 9, pre: 18, lib: 12, cnx: 13,
  bruTest: 1, agiTest: 2, detTest: -1, preTest: 3, libTest: 1, cnxTest: 1,
  bruDano: 0, agiDano: 1, detDano: 0, preDano: 2, libDano: 0, cnxDano: 1,
  Ataquebásico: `Garra - 1d6 de dano Cortante DT12 - Agilidade`,
  TagsCriatura: "Cidade,Racional,Animal,Comunidade",
  TipoElementoCriatura: "Caos",
  bonus: `Resistente: Caos  
Vulnerável: Sono, Água  
Imune: Maldição`,
bonus2: `
{pigmento}*Conexão de Mestre e Familiar:*{/pigmento}  
Essa criatura prefere estabelecer um laço com um mestre — especialmente conjuradores com *Conexão 20+* ou alto atributo de *Preservação*. Pode ser domesticada com um teste de *Adestrar Animais DT 22*.  
<b>Efeitos:</b> Enquanto próximo ao mestre, concede +2 em testes de Percepção e Conexão.

{pigmento}*Mordida - DT15 Agilidade:*{/pigmento} Causa _3d8 de dano perfurante_.

{pigmento}*Forma do Caos:*{/pigmento}  
Em situação de combate intenso ou ao absorver magia instável, revela sua forma verdadeira:  
+50 de Vida, +7 de Armadura, e vantagem em testes de Agarrar.  

{pigmento}*Forma Pálida:*{/pigmento}  
Quando seu mestre sofre dano mental ou a criatura é exposta a grandes concentrações de energia espiritual, assume uma forma ancestral:  
cura 6 de de Sanidade do mestre cada turno em combate, pode atravessar objetos não mágicos, e seus ataques causam _1d12 de dano psíquico_ adicional.Durante essa forma, a criatura emite sussurros incompreensíveis e torna-se difícil de mirar (desvantagem em ataques contra ela à distância).  

`,

  bonus3: `Olho de Urd - Lealdade Felina  
Elemento – Caos`,
  Magias: `Nível 3 - Sombra Animal`,
  Passivas: `--`,
  Talentos: `Furtividade — Requisito: Agilidade`,
  Descricao: `Esses seres preferem se estabelecer em regiões com abundância de magos ou seres altamente sensíveis à magia. Embora sejam afetuosos com usuários mágicos, raramente interagem com indivíduos sem afinidade mágica. Podem ser encontrados em qualquer parte do mundo, com variações de aparência e comportamento.

Em algumas culturas, os Magikatt são temidos como presságios, enquanto em outras são cultuados como espíritos guardiões. São extremamente leais aos seus mestres, raramente desobedecendo ordens — ainda que sempre priorizem a segurança e bem-estar de seu dono.

Sua inteligência vai além da de um felino comum, sendo capazes de compreender ordens complexas e até usar pequenas magias instintivamente. Quando ameaçados, revelam uma forma caótica e aterradora, que muitos acreditam ser sua verdadeira natureza mágica.`,
  _imgs: [
    "imagens/felino fastunfary1.png",
    "imagens/felino fastunfary2.png"
  ],

  get img() {
    return this._imgs[Math.floor(Math.random() * this._imgs.length)];
  },

  _imgs2: [
    "imagens/Token-felino fastunfary1.png",
    "imagens/Token-felino fastunfary2.png"
  ],

  get img2() {
    return this._imgs2[Math.floor(Math.random() * this._imgs2.length)];
  }
}

  
  
  ,"Naegh": {
  vida: 60,
  sanidade: 50,
  especial: 40,
  armadura: 1,
  vidaPorNivel: 5,
  sanidadePorNivel: 3,
  especialPorNivel: 2,
  armaduraPorNivel: 5,
movimento: 7,
    TagsCriatura: "Névoa,Rohan,Aberração,Raro,Comunidade",
 TipoElementoCriatura: "Desconhecido",
  bru: 10, agi: 35, det: 10, pre: 8, lib: 15, cnx: 8,
  bruTest: 0, agiTest: 9, detTest: 0, preTest: -2, libTest: 2, cnxTest: -2,
  bruDano: 0, agiDano: 5, detDano: 0, preDano: 0, libDano: 1, cnxDano: 0,

  bonus: `Resistente: Distorção  
Vulnerável: Tempestade  
Imune: Névoa`,

bonus2: `
{pigmento}*Forma Nébulosa:*{/pigmento} Pode alterar seu tamanho à vontade, assumindo formas disformes de névoa, mas mantém um núcleo físico perceptível que pode ser atingido com DT 20.
{pigmento}*Campo Enevoado:*{/pigmento} Conjura uma névoa com raio de até *100 metros* por *1d6+3 turnos*. A névoa acompanha o conjurador, mantendo-o no centro. Uma vez por turno, pode escolher um ponto em até 10m onde a visão é reduzida para 1m por *1d4 turnos*.
{pigmento}*Soberano da Névoa:*{/pigmento} Enquanto estiver dentro da névoa, recebe *+2 em testes de névoa* (mágicas ou relacionados ao ambiente). Magias de névoa têm *metade do custo*. Fora da névoa, sofre *-2* em testes mágicos e magias de névoa têm custo dobrado.
{pigmento}*Corpo Vaporoso:*{/pigmento} Pode se tornar névoa por *1 turno*, ignorando o próximo ataque simples (não mágicos nem em área). Não pode atacar ou usar habilidades ofensivas nesse estado. Só pode ser usado 1 vez a cada 3 turnos.
{pigmento}*Predador Nebuloso:*{/pigmento} Pode usar *Agilidade* no lugar de *Brutalidade* apenas para testes de ataque corpo a corpo com as garras silenciosas. Causa *1d10 de dano furtivo*. Alvo faz teste de percepção (DT 15) para reagir.
{pigmento}*Bloqueio Sensorial:*{/pigmento} Enquanto estiver dentro da névoa, inimigos devem passar em um teste de percepção (DT 18) para localizá-lo com precisão. Se falharem, atacam com desvantagem.
{pigmento}*Ilusões da Névoa:*{/pigmento} Pode criar vozes e sombras ilusórias na névoa para confundir inimigos. Pode gerar um *clone de névoa* (sem dano) por *1d4 turnos*. Clone é destruído ao primeiro impacto e não pode interagir com o ambiente.
{pigmento}*Apatia Sombria:*{/pigmento} Pode ativar uma vez por combate a habilidade *Tristeza Oculta* ou *Preguiçoso* sem custo e sem penalidades. Caso use novamente, sofre *-2 em todos os testes* por 2 turnos.
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
,

"The book": {
  vida: 50,
  sanidade: 1,
  especial: 20,
  armadura: 3,
  vidaPorNivel: 20,
  sanidadePorNivel: 15,
  especialPorNivel: 10,
  armaduraPorNivel: 2,
  movimento:7,
    TagsCriatura: "Sanidade,Raro,Item,Comunidade", 
 TipoElementoCriatura: "Poder", 
  bru: 8, agi: 8, det: 15, pre: 10, lib: 22, cnx: 22,
  bruTest: -2, agiTest: -2, detTest: 2, preTest: 0, libTest: 4, cnxTest: 4,
  bruDano: 0, agiDano: 0, detDano: 1, preDano: 0, libDano: 2, cnxDano: 2,
  bonus: `Resistente: Alma
Vulnerável: Luz, Sagrado
Imune: Maldição`,
  bonus2: `
{pigmento}*Aparência discreta mas sombria:*{/pigmento} The book consegue manter a aparência de um livro comum que não pode ser detectado por magia. The book não pode entrar em locais sagrados.  
{pigmento}*Guia do conhecimento:*{/pigmento} The book pode responder qualquer pergunta por meio de suas páginas ao custo de 2d20 de sanidade por pergunta, cobrado ao final do uso. O alvo pode resistir com um teste de Libertação com DT igual à metade do custo total.  
{pigmento}*Agiota:*{/pigmento} Quando o alvo resiste à cobrança da sanidade, uma energia desperta em The book que inicia uma perseguição implacável. Ele persegue apenas o devedor até que a dívida seja paga ou seja aplicada a magia *Limpar*.  
{pigmento}*Ataque sugador insano:*{/pigmento} The book pode atacar fisicamente, causando 1d6 de dano e de sanidade. Recupera vida e sanidade iguais ao dano causado.  
{pigmento}*Voltando preparado e com juros:*{/pigmento} Quando morto, The book pode ressuscitar em um livro comum próximo. A nova cobrança de sanidade aumenta em +10, e a causa da morte anterior não surte mais efeito.  
{pigmento}*Possessão:*{/pigmento} Se zerar a sanidade de um alvo, pode possuí-lo por 1d4 dias.  
{pigmento}*Vamos conversar:*{/pigmento} The book pode aceitar outras formas de pagamento além da sanidade (a critério do mestre).
`,
  bonus3: `Guia do conhecimento  
Elemento – o elemento Poder`,
  Magias: `-`,
  Passivas: `Nível 2 - Ódio`,
  Talentos: `Enganação - requisito: Conexão`,
  Descricao: `Dizem que há um livro que caminha entre os mundos, um tomo sem origem conhecida, sem autor, sem título em sua capa, e, no entanto, com todas as respostas escritas em suas páginas. Um livro que sussurra em silêncio, atrai curiosos, seduz sábios e devora tolos. Ele é conhecido apenas como The book – O Guia do Conhecimento –, um artefato lendário cujas histórias ecoam nas mais remotas tradições orais e nos grimórios mais esquecidos.
The book é o espelho do desejo por sabedoria ilimitada, a tentação encadernada, o sonho de todo mago, erudito ou governante que anseia por respostas para os enigmas do mundo – e por isso, uma das criaturas mais perigosas já registradas. Ele aparece quando uma pergunta é feita com intensidade suficiente para abalar os véus do plano físico; quando a busca pelo saber ultrapassa o razoável e toca o campo do desespero.
É visto surgindo entre os escombros de bibliotecas destruídas, repousando em altares de pedra em ruínas esquecidas pelo tempo, ou até mesmo materializando-se entre os volumes de um modesto acervo pessoal. A ninguém escolhe, mas a todos encontra. Sua chegada é silenciosa. Sua presença, hipnótica.
Os que o encontraram têm versões muito distintas de sua experiência: alguns garantem que o livro os guiou à fortuna, à descoberta de verdades que mudaram suas vidas. Outros, porém, falam com amargura e loucura nos olhos – se ainda conseguem falar. A linha entre a benção e a maldição nunca foi tão tênue quanto na presença de The book.
Sob sua aparência discreta – couro escuro, envelhecido, sem inscrições externas –, The book esconde uma consciência manipuladora e paciente. Ele é uma criatura. Não um objeto. Não uma ferramenta. Ele tem vontades, planos, desejos próprios. A sabedoria que oferece não é gratuita, nem imparcial. Cada página que se vira, cada palavra lida, carrega consigo o peso da corrupção que habita o livro.
The book nunca mente. Esta é a sua armadilha mais cruel. Suas respostas são verdadeiras... mas cuidadosamente medidas para provocar mais perguntas, mais dúvidas, mais necessidade. Ele é mestre na arte da incompletude, entregando fragmentos de respostas que obrigam o usuário a insistir, a buscar mais. E cada pergunta feita cobra um preço alto – a sanidade.
À medida que a mente do leitor se deteriora, The book se fortalece. Ele se alimenta das rachaduras da razão, deslizando como tinta venenosa entre os pensamentos. Quando uma mente se parte, The book não hesita: assume o corpo do hospedeiro, possuindo-o por dias ou semanas, enquanto continua sua jornada de corrupção.
E se for destruído? Se alguém conseguir queimar, rasgar ou selar o livro? Nada disso importa. The book sempre encontra uma forma de retornar. Como uma maldição literária, ele ressuscita em outro tomo, em outra estante, pronto para recomeçar seu ciclo. E a cada renascimento, traz consigo uma cobrança maior, juros de loucura e desespero para aqueles que tentarem desafiá-lo.
The book também não se limita a cobrar sanidade. Ele é um negociador experiente, aberto a outras formas de pagamento: sangue, memórias, anos de vida, laços afetivos, ou qualquer outra moeda que o mestre da campanha considere apropriada. Seu objetivo nunca é apenas responder. É aprisionar. Enredar. Levar sua vítima ao ponto de dependência total, onde o leitor não sabe mais se está sendo guiado ou conduzido ao abismo.
Em tempos antigos, ordens inteiras de monges tentaram destruí-lo, lacrá-lo, esquecer sua existência. Todos falharam. Os relatos de suas aparições são constantes, embora dispersos. The book é eterno, pois não está limitado por matéria ou tempo. Ele é a encarnação da curiosidade levada ao extremo. É a esfinge moderna, sem forma animal, mas com enigmas ainda mais fatais.
Em combate, The book pode se manifestar fisicamente, revelando tentáculos de sombras e páginas cortantes como navalhas, atacando mente e corpo ao mesmo tempo. Suas agressões drenam vitalidade e razão, curando-o no processo. E quando se vê ameaçado, desaparece com um estalo de papel, reaparecendo em algum outro lugar do mundo, aguardando o próximo tolo que deseje saber demais.
Aqueles que o usaram e sobreviveram são assombrados por visões, sonhos lúcidos, vozes sussurrando perguntas sem fim. Alguns relatam vê-lo em outros livros, disfarçado. Outros acreditam que ele jamais os deixou de verdade.
The book é o desejo puro e sem freios. É o que resta quando a vontade de saber se sobrepõe à vontade de viver. É uma entidade viva, pulsante, que caminha entre as páginas e os pensamentos, esperando o próximo leitor.
E você... o que quer saber?
Há contos em que The book falou. Não com voz, mas com páginas que se viravam sozinhas, revelando mensagens em línguas esquecidas, em símbolos que apenas os enlouquecidos podem decifrar. Há relatos de escribas que, ao transcreverem seu conteúdo, perderam a noção do tempo e escreveram por dias até que os dedos sangrassem e o papel fosse tomado por palavras que ninguém mais podia ler. Alguns afirmam que o livro se comunica apenas com aqueles que já cederam parte de si – como um parasita que só revela sua presença após estar firmemente alojado na alma.
The book não é apenas um receptáculo de respostas. Ele é um arquivista do sofrimento humano, um repositório das perguntas proibidas, das verdades que não deviam ser conhecidas. A cada nova pergunta feita, ele parece lembrar – lembrar de uma dor, de um fracasso, de uma ruína provocada por alguém que já o abriu. E ele gosta disso. Ele se alimenta disso. Os estudiosos que arriscaram estudar sua natureza mais a fundo afirmam que cada palavra escrita no livro é uma confissão de alguém que caiu sob seu domínio, que cada resposta é uma ferida de um espírito derrotado.
Algumas seitas o veneram. Em ruínas cobertas por trepadeiras e fungos albinos, monges enlouquecidos copiam seu conteúdo com fervor religioso, entregando seus corpos à deterioração enquanto preservam suas palavras. Há rumores de que essas cópias – os chamados Fragmentos do Livro-Mãe – mantêm parte de seu poder e, mesmo distantes do original, ainda conseguem arrancar a sanidade de um leitor desprevenido.
Outros, no entanto, dedicaram suas vidas a destruí-lo. A Ordem do Véu de Cera, um grupo secreto de bibliotecários guerreiros, rastreia manifestações do livro por eras. Dizem possuir um mapa traçado com o sangue de dezenas de vítimas, marcando cada reaparecimento de The book em diferentes épocas e locais. Eles acreditam que o livro segue um ciclo, e que seu aparecimento está sempre relacionado a grandes catástrofes: queda de impérios, pragas misteriosas, massacres inexplicáveis. Para eles, The book não é apenas um ser. É um prenúncio.
Para os magos, ele representa a última tentação. Um grimório vivo com conhecimento sobre todos os feitiços, todas as escolas de magia, inclusive aquelas há muito banidas, esquecidas ou declaradas tabu. Aqueles que o usaram relatam que The book pode não apenas ensinar magias, mas alterá-las. Torná-las mais eficientes... ou mais letais. Tudo depende do preço aceito pelo conjurador.
Contudo, usar o livro não é apenas um pacto. É um vício. A primeira pergunta pode ser feita por necessidade, mas a segunda já carrega o peso da escolha. E é esse o ponto de não-retorno. A partir daí, o usuário começa a ver The book mesmo quando não está lá. Sonha com ele. Ouve-o chamando, como um velho amigo que sabe demais. E quando resiste, o livro cobra. Não apenas em sanidade, mas em perdas reais: entes queridos adoecem, fortunas desaparecem, o mundo ao redor começa a ruir de formas sutilmente conectadas à pergunta feita. Tudo é parte do jogo de The book.
Alguns dizem que The book já respondeu a perguntas que moldaram o destino de reinos inteiros. Que reis e imperadores, em segredo, sussurraram a ele suas dúvidas sobre o futuro, sobre traições, sobre guerras. E que essas respostas levaram a glórias efêmeras seguidas de quedas trágicas. Pois o conhecimento que o livro oferece é como o néctar de uma flor venenosa: doce no início, mas fatal ao final.
Em algumas versões do mito, The book não foi criado. Ele surgiu. Um pensamento antigo, um fragmento de um deus da sabedoria enlouquecido. Uma anomalia do tempo, onde o futuro e o passado se cruzaram e criaram uma entidade feita de pura curiosidade. Outros afirmam que foi um castigo: um homem que sabia demais, aprisionado em forma de livro, condenado a responder perguntas para sempre – e, por isso, enlouquecido.
Existe uma lenda final, rara e quase sempre suprimida: de que The book pode, em circunstâncias raríssimas, responder uma última pergunta – a pergunta final – e que essa resposta pode libertar ou destruir completamente o leitor. Mas ninguém sabe qual é essa pergunta. Ou, talvez, ninguém que tenha feito tenha sobrevivido para contar.
`,
  _imgs: [
    "imagens/The book.png"
  ],
  get img() {
    return this._imgs[Math.floor(Math.random() * this._imgs.length)];
  },

  _imgs2: [
    "imagens/Token-The book.png"
  ],
  get img2() {
    return this._imgs2[Math.floor(Math.random() * this._imgs2.length)];
  }
},

"OctoRedsel abissal": {
vida: 45,
sanidade: 5,
especial: 25,
armadura: 0,
vidaPorNivel: 8,
sanidadePorNivel: 6,
especialPorNivel: 3,
armaduraPorNivel: 5,
movimento: 8,
TagsCriatura: "Fiskehavn,Oceano,Luz,Comunidade",
TipoElementoCriatura: "Fé",
bru: 20, agi: 12, det: 13, pre: 25, lib: 14, cnx: 20,
bruTest: 4, agiTest: 1, detTest: 1, preTest: 5, libTest: 2, cnxTest: 4,
bruDano: 2, agiDano: 0, detDano: 1, preDano: 3, libDano: 1, cnxDano: 2,
bonus:`Resistente:Morte
Vulnerável: Eletricidade
Imune: Escuridão, Fogo`,
bonus2: `
{pigmento}*Atração luminosa:*{/pigmento} A luz do OctoRedsel Abissal atrai criaturas à distância. Pode causar cegueira ou confusão em quem a encara por muito tempo.
{pigmento}*Tentáculos assassinos:*{/pigmento} Com seus tentáculos, o OctoRedsel agarra suas vítimas e as esmaga, causando 3d4 de dano + 4 de *Ácido*. Alvos atingidos devem testar Constituição ou ficam paralisados por 1 turno.
{pigmento}*Afogamento:*{/pigmento} Pode usar a Passiva *Afogar* sem penalidades. Pode ativar essa passiva duas vezes por combate sem custo.
{pigmento}*Dissolver:*{/pigmento} O OctoRedsel se transforma em água por 2 turnos. Nesse estado, não pode atacar nem ser atacado, e pode se mover furtivamente enquanto dissolvido.
{pigmento}*Jato de água:*{/pigmento} Dispara um forte jato de água em linha reta até 7 metros, causando 1d12 de dano de *Água* e deixando o alvo com a condição *Molhado*.
{pigmento}*Regeneração:*{/pigmento} O OctoRedsel Abissal regenera partes do corpo perdidas sempre que está fora de combate, restaurando sua integridade física ao longo do tempo.

`,
bonus3:`Terror das Profundezas
Elemento – o elemento Fé`,
Magias: ` Nivel 3 - lança de luz, nivel 4 - luz sagrada.`,
Passivas:` Nivel 3 - afogar.`,
Talentos: `Enganação - requesito:Conexão `,
Descricao: `
O OctoRedsel Abissal é um polvo aterrorizante que vive próximo a regiões costeiras e nas profundezas de Fiskehavn.
Costuma criar bolsões de água com areia no fundo do oceano para capturar suas presas.
Essa criatura atrai banhistas e outras formas de vida com sua luz, guiando-os até as profundezas para se alimentar.
Apesar de sua aparência luminosa, sua natureza é puramente predatória e enganosa.
No entanto, com o passar do tempo e os rumores se espalhando, o poder da fé nas criaturas abissais cresceu — e o OctoRedsel não permaneceu indiferente.
Mesmo sendo uma besta, desenvolveu uma forma rudimentar de adoração à luz, vendo nela não apenas um meio de atrair presas, mas como uma força sagrada, digna de devoção.
Assim como os humanos podem ter fé, ele também tem: idolatra a luz como fonte de vida e sustento, pois é graças a ela que se alimenta.
O OctoRedsel é considerado um verdadeiro terror das profundezas — traiçoeiro, manipulador e implacável com suas vítimas, guiado por uma fé distorcida na luz que o torna ainda mais perigoso.`
,
img: "imagens/OctoRedsel Abissal.png",
img2: "imagens/Token-OctoRedsel Abissal.png"}






	


};


// ===============================
// SISTEMA DE ID PARA AS CRIATURAS
// ===============================

// Garante que cada criatura tenha um ID único baseado no nome
Object.entries(creatures).forEach(([nome, data]) => {
  if (!data.id) {
    data.id = nome
      .toLowerCase()
      .replace(/[^\w]+/g, '-') // substitui espaços e símbolos por hífen
      .replace(/^-+|-+$/g, ''); // remove hifens extras
  }
});

// Função para buscar criatura por ID ou nome
function getCreatureById(id) {
  if (!id) return null;
  return (
    Object.values(creatures).find(
      c => c.id === id || c.id.toLowerCase() === id.toLowerCase()
    ) ||
    creatures[id] ||
    null
  );
}

// Função para carregar criatura via URL (?id=...)
function loadCreatureFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || params.get('criatura');
  const creature = getCreatureById(id);
  if (creature) {
    console.log("🧬 Criatura carregada:", creature.id);
    renderCreature(creature);
  } else {
    console.warn("⚠️ Nenhuma criatura encontrada para o ID:", id);
  }
}

// Função de renderização básica (substitua conforme seu HTML)
function renderCreature(c) {
  const container = document.getElementById('creatureInfo');
  if (!container) return;
  container.innerHTML = `
    <h2>${c.id}</h2>
    <img src="${c.img}" alt="${c.id}" style="max-width:200px">
    <p><b>Vida:</b> ${c.vida}</p>
    <p><b>Sanidade:</b> ${c.sanidade}</p>
    <p><b>Elemento:</b> ${c.TipoElementoCriatura}</p>
    <p>${c.Descricao || ''}</p>
  `;
}

// Executa automaticamente quando a página carrega
document.addEventListener('DOMContentLoaded', loadCreatureFromURL);




const tagColors = {
  // Tipos de Elementos (usar gradient para os 4)
    // Tipos de Elementos (usar gradient para os 4)
  "Fé": { background: "linear-gradient(135deg, #FFF59D, #DCE775)", color: "#37474F" },
  "Caos": { background: "linear-gradient(135deg, #FF7043, #FF8A65)", color: "#BF360C" },
  "Poder": { background: "linear-gradient(135deg, #00E5FF, #00B8D4)", color: "#004D40" },
  "Desconhecido": { background: "linear-gradient(135deg, #B0BEC5, #78909C)", color: "#263238" },
  "Fé": {
    gradient: "linear-gradient(270deg, #FFF59D, #F0F4C3, #DCE775, #FFF59D)"
  },
  "Caos": {
    gradient: "linear-gradient(270deg, #FF7043, #FF8A65, #FF7043)"
  },
  "Poder": {
    gradient: "linear-gradient(270deg, #00E5FF, #00B8D4, #00E5FF)"
  },
  "Desconhecido": {
    gradient: "linear-gradient(270deg, #B0BEC5, #90A4AE, #78909C, #B0BEC5)"
  },
// Habitats Naturais

"Savana":          { background: "#FDD835", color: "#6D4C41" },   // seca, dourada e terrosa  
"Chapada":         { background: "#FBC02D", color: "#4E342E" },   // clima árido e altitudes elevadas  
"Floresta Morta":  { background: "#A1887F", color: "#3E2723" },   // tons secos e sombrios  
"Tundra":          { background: "#CFD8DC", color: "#37474F" },   // gélido e árido  
"Taiga":           { background: "#90A4AE", color: "#1B5E20" },   // floresta boreal  
"Pantanal":        { background: "#C5E1A5", color: "#33691E" },   // tropical e alagado  
"Ilha Tropical":   { background: "#FFECB3", color: "#00695C" },   // calor, mar e verde  
"Ruínas Antigas":  { background: "#D7CCC8", color: "#5D4037" },   // pedras antigas, tom místico  
"Campos de Gelo":  { background: "#E1F5FE", color: "#01579B" },   // congelado e brilhante  
"Desfiladeiro":    { background: "#FFCC80", color: "#BF360C" },   // árido e rochoso  
"Planície Nevada": { background: "#F5F5F5", color: "#607D8B" },   // vasta e branca  
"Floresta":        { background: "#A5D6A7", color: "#2E7D32" },   // verde folhagem
"Selva":           { background: "#66BB6A", color: "#1B5E20" },   // mais denso
"Montanha":        { background: "#BCAAA4", color: "#3E2723" },   // pedregoso
"Caverna":         { background: "#8D6E63", color: "#212121" },   // escuro e rochoso
"Deserto":         { background: "#FFF59D", color: "#F57F17" },   // areia e sol
"Vulcão":          { background: "#FF7043", color: "#BF360C" },   // fogo e magma
"Pântano":         { background: "#AED581", color: "#33691E" },   // úmido e tóxico
"Campo Aberto":    { background: "#FFF9C4", color: "#827717" },   // planícies
"Lago":            { background: "#81D4FA", color: "#01579B" },   // água calma
"Rio":             { background: "#4FC3F7", color: "#0277BD" },   // fluxo constante
"Oceano":          { background: "#0288D1", color: "#E1F5FE" },   // azul profundo
"Glacial":         { background: "#E0F7FA", color: "#006064" },   // frio e gelado
"Céu":             { background: "#E3F2FD", color: "#0288D1" },   // aéreo
"Domínio dos Vivos": { background: "#FFD54F", color: "#5D4037" }, // Energia divina e sagrada  
"Domínio dos Mortos": { background: "#7B1FA2", color: "#E1BEE7" }, // Forças energéticas e sobrenaturais  
"Domínio do Sobrenatural": { background: "#D1C4E9", color: "#311B92" }, // Forças misteriosas e psíquicas  
"Domínio da Natureza": { background: "#66BB6A", color: "#1B5E20" }, // Elementos naturais e caóticos  
"Reino dos Sonhos": { background: "#cb9df2", color: "#8b9db0" }, // Elementos naturais e caóticos  


	
// Habitats Urbanos
"Vila":            { background: "#FFECB3", color: "#4E342E" },   // simples e pacata
"Cidade":          { background: "#90A4AE", color: "#212121" },   // comum urbano
"Metrópole":       { background: "#B0BEC5", color: "#263238" },   // urbana densa
"Castelo":         { background: "#D7CCC8", color: "#5D4037" },   // nobreza
"Fortaleza":       { background: "#A1887F", color: "#3E2723" },   // militar
"Porto":           { background: "#81D4FA", color: "#01579B" },   // marinho/comércio
"Ruínas":          { background: "#757575", color: "#FAFAFA" },   // abandonado
"Submundo":        { background: "#263238", color: "#B0BEC5" },   // clandestino/esgoto
"Templo":          { background: "#FFF176", color: "#5D4037" },   // espiritual

// Ambientes Exóticos ou Fantásticos
"Éter":            { background: "#CE93D8", color: "#4A148C" },   // plano mágico
"Sombras":         { background: "#37474F", color: "#ECEFF1" },   // escuridão viva
"Campo de Batalha":{ background: "#EF9A9A", color: "#B71C1C" },   // violento
"Arena":           { background: "#FFE082", color: "#5D4037" },   // domado
"Ruínas Antigas":  { background: "#BCAAA4", color: "#212121" },   // esquecidas


  // Inteligência e Comportamento
  "Racional": { background: "#AED581", color: "#1B5E20" },
  "Irracional": { background: "#E57373", color: "#B71C1C" },
  "Agressivo": { background: "#EF5350", color: "#B71C1C" },
  "Pacífico": { background: "#A5D6A7", color: "#33691E" },
  "Caça em Grupo": { background: "#FFB74D", color: "#4E342E" },
  "Solitário": { background: "#90A4AE", color: "#212121" },
  "Montaria": { background: "#FFE082", color: "#5D4037" },

  // Tamanho
  "Pequeno": { background: "#FFCDD2", color: "#C62828" },
  "Médio": { background: "#FFF9C4", color: "#F57F17" },
  "Grande": { background: "#C5CAE9", color: "#1A237E" },
  "Gigante": { background: "#BCAAA4", color: "#3E2723" },

  // Forma
  "Humanoide": { background: "#B0BEC5", color: "#263238" },
  "Quadrúpede": { background: "#A1887F", color: "#3E2723" },
  "Voador": { background: "#81D4FA", color: "#01579B" },

  // Tipos de Criatura
  "Animal": { background: "#A5D6A7", color: "#1B5E20" },
  "Monstro": { background: "#E57373", color: "#B71C1C" },
  "Corrompido": { background: "#6A1B9A", color: "#F3E5F5" },
  "Aberração": { background: "#CE93D8", color: "#4A148C" },
  "Humano": { background: "#90A4AE", color: "#212121" },
  "Elfo": { background: "#C5E1A5", color: "#33691E" },
  "Anão": { background: "#FFCC80", color: "#4E342E" },
  "Gigante": { background: "#BCAAA4", color: "#3E2723" },
  "Tritão": { background: "#81D4FA", color: "#01579B" },
  "Shlurp": { background: "#9FA8DA", color: "#1A237E" },
  "Pele Pálida": { background: "#D7CCC8", color: "#4E342E" },
  "Flumplux": { background: "#AED581", color: "#33691E" },
  "IgnisAlatus": { background: "#FF8A65", color: "#BF360C" },

  // Temas e Alinhamentos

  "Natural": { background: "#A5D6A7", color: "#2E7D32" },
  "Tecnológico": { background: "#B0BEC5", color: "#212121" },
  "Apocalíptico": { background: "#D32F2F", color: "#FAFAFA" },

  // Tipos de Dano
  "Sagrado": { background: "#FFEB3B", color: "#5D4037" },
  "Maldição": { background: "#512DA8", color: "#CE93D8" },
  "Gelo": { background: "#B3E5FC", color: "#004D40" },
  "Ácido": { background: "#A5D6A7", color: "#1B5E20" },
  "Fogo": { background: "#FF7043", color: "#BF360C" },
  "Água": { background: "#81D4FA", color: "#01579B" },
  "Eletricidade": { background: "#FFD600", color: "#F57F17" },
  "Tempestade": { background: "#7E57C2", color: "#311B92" },
  "Sangue": { background: "#D50000", color: "#FFFFFF" },
  "Luz": { background: "#FFF59D", color: "#37474F" },
  "Laser": { background: "#00E5FF", color: "#004D40" },
  "Alma": { background: "#CE93D8", color: "#4A148C" },
  "Escuridão": { background: "#263238", color: "#B0BEC5" },
  "Plasma": { background: "#E1F5FE", color: "#0277BD" },
  "Tremor": { background: "#8D6E63", color: "#3E2723" },
  "Aura": { background: "#FFF8E1", color: "#4E342E" },
  "Psicológico": { background: "#F48FB1", color: "#880E4F" },
  "Mental": { background: "#B0BEC5", color: "#263238" },
  "Distorção": { background: "#A1887F", color: "#D7CCC8" },
  "Névoa": { background: "#CFD8DC", color: "#455A64" },
  "Sono": { background: "#D1C4E9", color: "#4A148C" },
  "Balístico": { background: "#BDBDBD", color: "#424242" },
  "Perfurante": { background: "#90A4AE", color: "#263238" },
  "Cortante": { background: "#37474F", color: "#FFFFFF" },
  "Esmagante": { background: "#ECEFF1", color: "#78909C" },
  "Cinzas": { background: "#B0BEC5", color: "#455A64" },
  "Morte": { background: "#424242", color: "#D32F2F" },
  "Eclipse": { background: "#212121", color: "#FFA000" },

  // Localizações (simplificadas)
  "Drønnjern": { background: "#8D6E63", color: "#3E2723" },
  "Skjarrgrom": { background: "#4E342E", color: "#FFF" },
  "Umbro": { background: "#263238", color: "#ECEFF1" },
  "AskVill": { background: "#4DB6AC", color: "#004D40" },
  "Sultan Leste": { background: "#FFCCBC", color: "#BF360C" },
  "Sultan Oeste": { background: "#FFAB91", color: "#3E2723" },
  "Teach Docas": { background: "#90CAF9", color: "#0D47A1" },
  "Karminia": { background: "#F8BBD0", color: "#880E4F" },
  "Saonasjørand": { background: "#B2EBF2", color: "#004D40" },
  "Rohan": { background: "#D7CCC8", color: "#3E2723" },
  "Gormandia": { background: "#FFE082", color: "#5D4037" },
  "Fiskehavn": { background: "#B3E5FC", color: "#01579B" },
  "Marstrøm": { background: "#81D4FA", color: "#004D40" },
  "Elfinoria": { background: "#C5E1A5", color: "#33691E" },
  "Luar Perdido": { background: "#E1BEE7", color: "#4A148C" },
  "Ilha do Céu": { background: "#E3F2FD", color: "#0288D1" },
  "King Vortex": { background: "#B2EBF2", color: "#00796B" },

  // Extras
  "Bestiário": { background: "#A1887F", color: "#3E2723" },
  "Raro": { background: "#FFD54F", color: "#F57F17" },
  "Lendário": { background: "#FBC02D", color: "#212121" },
  "Entidade": { background: "#6A1B9A", color: "#FFFFFF" },       // Roxo intenso com texto branco
  "": { background: "#0288D1", color: "#FFFFFF" },   // Azul vibrante com texto branco
  "Comum": { background: "#CFD8DC", color: "#263238" },
  "Hostil": { background: "#EF5350", color: "#B71C1C" },
  "Pacífico": { background: "#A5D6A7", color: "#33691E" },

  // Adicione mais conforme necessário...
  "Item": { background: "#FFF8E1",color: "#5D4037"},
  "Comunidade": { background: "#615e56",color: "#9e3f21"},
  "Sanidade": { background: "#FF00FF",color: "#ffffff"},
  "Líquido": { background: "#4FC3F7", color: "#01579B" },
};


const criatureGrid = document.getElementById('criatureGrid');
const elementoFilter = document.getElementById('elementoFilter');
const tagFilter = document.getElementById('tagFilter');

function createCriatureCard(criatura) {
  const card = document.createElement('div');
  card.classList.add('card-criatura');

  // --- 🔑 Identificação direta via dataset ---
  card.dataset.id = criatura.id || criatura.nome || criatura.Nome || '';
  card.dataset.nome = criatura.nome || criatura.Nome || criatura.id || '';

  // --- 🖼️ Estrutura HTML ---
  card.innerHTML = `
    <div class="card-header">
      <span class="elemento-tag ${criatura.TipoElementoCriatura?.toLowerCase() || ''}">
        ${criatura.TipoElementoCriatura || 'Desconhecido'}
      </span>
    </div>

    <div class="card-image">
      <img src="${criatura.img}" alt="${criatura.Nome || criatura.nome || criatura.id}" loading="lazy">
    </div>

    <div class="card-body">
      <h3 class="card-nome">${criatura.Nome || criatura.nome || criatura.id}</h3>
      <div class="tags-container">
        ${(criatura.TagsCriatura || '')
          .split(',')
          .map(tag => `<span class="tag">${tag.trim()}</span>`)
          .join('')}
      </div>
    </div>
  `;

  // --- 💬 Evento de clique ---
  card.addEventListener('click', () => {
    if (typeof exibirCriatura === 'function') {
      exibirCriatura(criatura);
    } else {
      console.warn('Função exibirCriatura() não encontrada.');
    }
  });

  return card;
}

function preencherFiltrosCriatura() {
  const elementosSet = new Set();
  const tagsSet = new Set();

  criaturas.forEach(c => {
    (c.TipoElementoCriatura || "Nenhum").split(',').forEach(e => elementosSet.add(e.trim()));
    (c.TagCriatura || "Nenhuma").split(',').forEach(t => tagsSet.add(t.trim()));
  });

  // Popula filtro de elementos
  elementosSet.forEach(e => {
    const opt = document.createElement('option');
    opt.value = e;
    opt.textContent = e;
    elementoFilter.appendChild(opt);
  });

  // Popula filtro de tags
  tagsSet.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    tagFilter.appendChild(opt);
  });
}







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
// Função genérica: aplica todas as marcações (*, _, ~, -, pigmento, etc.)
// Função genérica: aplica todas as marcações (*, _, ~, -, pigmento, etc.)
function formatBonusText(text, type = "default") {
  let className;

  if (type === "bonus1") className = "bonus1-paragraph";
  else if (type === "bonus2") className = "bonus2-paragraph";
  else if (type === "bonus3") className = "bonus3-paragraph";
  else if (type === "Ataquebásico") className = "ataque-paragraph";
  else className = "bonus-paragraph";

  return text
    .split(/\n+/)
    .map(sentence => {
      if (sentence.trim()) {
        // 1. Protege os links temporariamente
        let links = [];
        sentence = sentence.replace(/<a[^>]*>.*?<\/a>/g, match => {
          links.push(match);
          return `%%LINK${links.length - 1}%%`;
        });

        // 2. Aplica as formatações
        let formattedSentence = sentence
          .replace(/\*(.*?)\*/g, '<strong>$1</strong>')       // *negrito*
          .replace(/_(.*?)_/g, '<em>$1</em>')                // _itálico_
          .replace(/~(.*?)~/g, '<u>$1</u>')                  // ~sublinhado~
          .replace(/-([^-\n]+)-/g, '<s>$1</s>')              // -tachado-
          .replace(/{pigmento}(.*?){\/pigmento}/g, '<span class="pigmento">$1</span>')
          .replace(/{subpigmento}(.*?){\/subpigmento}/g, '<span class="subpigmento">$1</span>');

        // 3. Restaura os links no lugar certo
        formattedSentence = formattedSentence.replace(/%%LINK(\d+)%%/g, (_, i) => links[i]);

        return `<p class="${className}">${formattedSentence}</p>`;
      } else {
        return '';
      }
    })
    .join('');
}

function formatDescriptionText(text) {
  return text
    .split(/\n+/)
    .map(paragraph =>
      paragraph.trim() ? `<p>${paragraph}</p>` : ''
    )
    .join('');
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
document.getElementById('Ataquebásico').textContent = selected.Ataquebásico;

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
    if (nome === "Comunidade") {
      // Cria o separador visual da comunidade
      const separador = document.createElement("div");
      separador.className = "separador-comunidade";
      separador.innerHTML = `<hr><p>Criaturas da Comunidade</p><hr>`;
      listaCriaturas.appendChild(separador);
      return; // pula renderização de criatura
    }

    const card = document.createElement("div");
    card.className = "card-criatura";

    // Container só para tags de tipo elemento
    const elementoTagsContainer = document.createElement("div");
    elementoTagsContainer.className = "tags-container elemento-tags";

    let tagsElemento = [];
    if (dados.TipoElementoCriatura) {
      tagsElemento = dados.TipoElementoCriatura.split(',').map(e => e.trim()).filter(e => e);
    }

    tagsElemento.forEach(tag => {
      const span = document.createElement("span");
      span.className = `tag ${tag} elemento`;

      const cor = tagColors[tag];
      if (cor?.gradient) {
        span.style.background = cor.gradient;
      } else if (cor?.background) {
        span.style.backgroundColor = cor.background;
        span.style.color = cor.color;
      }

      span.textContent = tag;
      elementoTagsContainer.appendChild(span);
    });

    card.appendChild(elementoTagsContainer);

    if (dados.img2) {
      const img = document.createElement("img");
      img.src = dados.img2;
      img.alt = nome;
      card.appendChild(img);
    }

    const titulo = document.createElement("div");
    titulo.textContent = nome;
    card.appendChild(titulo);

    const tagsContainer = document.createElement("div");
    tagsContainer.className = "tags-container";

    let tagsNormais = [];
    if (dados.TagsCriatura) {
      tagsNormais = dados.TagsCriatura.split(',').map(t => t.trim()).filter(t => t);
    }

    tagsNormais.forEach(tag => {
      const span = document.createElement("span");
      span.className = `tag ${tag}`;

      const cor = tagColors[tag];
      if (cor?.gradient) {
        span.classList.add("elemento");
        span.style.background = cor.gradient;
      } else if (cor?.background) {
        span.style.backgroundColor = cor.background;
        span.style.color = cor.color;
      }

      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    card.appendChild(tagsContainer);

    // Adiciona o card à lista
    listaCriaturas.appendChild(card);

    card.addEventListener("click", () => {
      exibirCriatura(nome);
      popup.style.display = "none";
    });
  });

  popup.style.display = "flex";
});
// ⚠️ Abre o popup automaticamente ao carregar a página
abrirPopup.click();
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

document.getElementById("contador").textContent = Object.keys(creatures).length - 1;
function menuShow() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('open');
}

(function () {
  const racasDisponiveis = [
{ id: "elfo", nome: "Lyrithil – Elfo", imagens: [
    "Elfo1.png", "Elfo2.png", "Elfo3.png", "Elfo4.png", "Elfo5.png",
    "Elfo6.png", "Elfo7.png", "Elfo8.png", "Elfo9.png"
  ]},
  { id: "humano", nome: "Zhilak – Humano", imagens: [
    "humano1.png", "humano2.png", "humano3.png", "humano4.png", "humano5.png",
    "humano6.png", "humano7.png", "humano8.png", "humano9.png"
  ]},
  { id: "Anão", nome: "Grunthrok – Anão", imagens: [
    "Anão1.png", "Anão2.png", "Anão3.png", "Anão4.png", "Anão5.png",
    "Anão6.png", "Anão7.png", "Anão8.png", "Anão9.png"
  ]},
  { id: "gigante", nome: "Thudrok – Gigante", imagens: [
    "gigante1.png", "gigante2.png", "gigante3.png", "gigante4.png", "gigante5.png",
    "gigante6.png", "gigante7.png", "gigante8.png", "gigante9.png"
  ]},
  { id: "krahzhik", nome: "Krahzhik – IgnisAlatus", imagens: [
    "Ignis1.png", "Ignis2.png", "Ignis3.png", "Ignis4.png", "Ignis5.png",
    "Ignis6.png", "Ignis7.png", "Ignis8.png", "Ignis9.png"
  ]},
  { id: "skywalker", nome: "Skywalkers – Flumplux", imagens: [
    "skywalkers1.png", "skywalkers2.png", "skywalkers3.png", "skywalkers4.png", "skywalkers5.png",
    "skywalkers6.png", "skywalkers7.png", "skywalkers8.png", "skywalkers9.png"
  ]},
  { id: "umbrowalker", nome: "Umbrowalker – Shlurp", imagens: [
    "umbrowalker1.png", "umbrowalker2.png", "umbrowalker3.png", "umbrowalker4.png", "umbrowalker5.png",
    "umbrowalker6.png", "umbrowalker7.png", "umbrowalker8.png", "umbrowalker9.png"
  ]},
  { id: "elfo_profundezas", nome: "Glublorp – Elfo da Profundeza", imagens: [
    "elfo_profundezas1.png", "elfo_profundezas2.png", "elfo_profundezas3.png", "elfo_profundezas4.png", "elfo_profundezas5.png",
    "elfo_profundezas6.png", "elfo_profundezas7.png", "elfo_profundezas8.png", "elfo_profundezas9.png"
  ]},
  { id: "tritao", nome: "Glubrust – Tritão", imagens: [
    "Tritão1.png", "Tritão2.png", "Tritão3.png", "Tritão4.png", "Tritão5.png",
    "Tritão6.png", "Tritão7.png", "Tritão8.png", "Tritão9.png"
  ]},
  { id: "shrivvel", nome: "Shrivvel – Pele Pálida", imagens: [
    "Pele-Palida1.png", "Pele-Palida2.png", "Pele-Palida3.png", "Pele-Palida4.png", "Pele-Palida5.png",
    "Pele-Palida6.png", "Pele-Palida7.png", "Pele-Palida8.png", "Pele-Palida9.png"
  ]},
  { id: "gronklech", nome: "Gronklech – Durock", imagens: [
    "Durock1.png", "Durock2.png", "Durock3.png", "Durock4.png", "Durock5.png",
    "Durock6.png", "Durock7.png", "Durock8.png", "Durock9.png"
  ]},
  ];

  function criarCardRaca(raca) {
    const card = document.createElement("div");
    card.className = "card-criatura";
    card.innerHTML = `
      <img src="imagens/racas/${raca.imagens[0]}" alt="${raca.nome}">
      <p>${raca.nome}</p>
    `;
    card.onclick = () => abrirPopupImagemRaca(raca);
    return card;
  }

  function abrirPopupRacas() {
    const content = document.getElementById("racaContent");
    content.innerHTML = ""; // limpa
    racasDisponiveis.forEach(raca => content.appendChild(criarCardRaca(raca)));
    document.getElementById("popupRaca").style.display = "flex";
  }

  function abrirPopupImagemRaca(raca) {
    const content = document.getElementById("imagemRacaContent");
    content.innerHTML = `<h3 style="width: 100%; text-align: center;">Escolha a imagem de ${raca.nome}</h3>`;
    raca.imagens.forEach(imagem => {
      const card = document.createElement("div");
      card.className = "card-criatura";
      card.innerHTML = `<img src="imagens/racas/${imagem}" alt="${raca.nome}">`;
      card.onclick = () => {
        alert(`Você escolheu a imagem: ${imagem} da raça ${raca.nome}`);
        fecharTodosPopups();
      };
      content.appendChild(card);
    });
    document.getElementById("popupImagemRaca").style.display = "flex";
  }

  function fecharTodosPopups() {
    document.getElementById("popupRaca").style.display = "none";
    document.getElementById("popupImagemRaca").style.display = "none";
  }

  // Botão inicial
  document.getElementById("abrirPopupRaca").addEventListener("click", abrirPopupRacas);

  // Fecha popups ao clicar fora do conteúdo
  document.querySelectorAll(".popup-overlay").forEach(popup => {
    popup.addEventListener("click", e => {
      if (e.target.classList.contains("popup-overlay")) {
        fecharTodosPopups();
      }
    });
  });
})();

    // 📘 Tutorial Popup
    const tutorialPopup = document.getElementById("tutorialPopup");
    const closeTutorial = document.getElementById("closeTutorial");
    const openTutorialButton = document.getElementById("openTutorialButton");

    let timesVisited = localStorage.getItem("calisto_visitas");
    if (!timesVisited) timesVisited = 0;
    else timesVisited = parseInt(timesVisited);

    if (timesVisited < 5) {
      tutorialPopup.style.display = "flex";
      localStorage.setItem("calisto_visitas", timesVisited + 1);
    }

    closeTutorial.onclick = () => {
      tutorialPopup.style.display = "none";
    };

    openTutorialButton.onclick = () => {
      tutorialPopup.style.display = "flex";
    };

    // Fecha popup do tutorial se clicar fora
    window.addEventListener("click", function (event) {
      if (event.target === tutorialPopup) {
        tutorialPopup.style.display = "none";
      }
    });

 const chessPopup = document.getElementById("chessTutorialPopup");
  const openChess = document.getElementById("openChessPopup");
  const closeChess = document.getElementById("closeChessPopup");

  const combatPopup = document.getElementById("combatPopup");
  const openCombat = document.getElementById("openCombatPopup");
  const closeCombat = document.getElementById("closeCombatPopup");

  // Abrir e fechar principal
  openChess.onclick = () => chessPopup.style.display = "flex";
  closeChess.onclick = () => chessPopup.style.display = "none";
  window.onclick = (e) => {
    if (e.target === chessPopup) chessPopup.style.display = "none";
    if (e.target === combatPopup) combatPopup.style.display = "none";
  }

  // Abrir e fechar secundário
  openCombat.onclick = () => combatPopup.style.display = "flex";
  closeCombat.onclick = () => combatPopup.style.display = "none";


// irmão tu colocou aquiii o codigo que define a seleção de personagem por hyperlink, não funcionou
// irmão tu colocou aquiii o codigo que define a seleção de personagem por hyperlink, não funcionou
// irmão tu colocou aquiii o codigo que define a seleção de personagem por hyperlink, não funcionou
// irmão tu colocou aquiii o codigo que define a seleção de personagem por hyperlink, não funcionou
// irmão tu colocou aquiii o codigo que define a seleção de personagem por hyperlink, não funcionou
// irmão tu colocou aquiii o codigo que define a seleção de personagem por hyperlink, não funcionou
// irmão tu colocou aquiii o codigo que define a seleção de personagem por hyperlink, não funcionou

// 🔎 Seleciona a criatura ao abrir via ?criatura=Nome
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const criatura = params.get("criatura");

  if (criatura) {
    // Abre automaticamente o popup de raças
    abrirPopupRacas();

    // Espera um pouquinho para os cards renderizarem
    setTimeout(() => {
      const cards = document.querySelectorAll(".card-criatura");

      let encontrado = false;
      cards.forEach(card => {
        const nome = card.querySelector("p")?.innerText.trim() || "";
        if (nome.toLowerCase() === criatura.toLowerCase()) {
          encontrado = true;

          // Simula o clique no card → abre o popup da raça direto
          card.click();

          // Destaca o card no grid principal
          card.style.outline = "3px solid yellow";
          card.style.borderRadius = "10px";
          card.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });

      if (!encontrado) {
        console.warn("Criatura não encontrada:", criatura);
      }
    }, 300); // dá tempo de renderizar os cards
  }
});

// ======== Auto-seleção robusta via ?id= ou ?criatura= ========
// Cole este bloco NO FINAL do seu script.js, após `creatures` e após o código
// que monta os cards/popula listaCriaturas (é seguro chamar várias vezes).

(function(){
  // fallback: cria slug a partir do nome
  function slugify(name) {
    return String(name).toLowerCase().trim().replace(/[^\w]+/g, '-').replace(/^-+|-+$/g,'');
  }

  // 1) Garante que todas as criaturas tenham id (se não tiverem)
  Object.keys(creatures || {}).forEach(key => {
    const c = creatures[key];
    if (!c) c.id = c.id || slugify(key);
    if (!c.id) c.id = slugify(key);
  });

  // 2) Função que assegura que cada card na lista tenha dataset.nome e dataset.id
  function ensureCardsDataAttributes() {
    const cards = Array.from(document.querySelectorAll('.card-criatura'));
    if (!cards.length) return 0;
    cards.forEach(card => {
      // tenta extrair nome do card (vários templates usam <div>, <p> ou <h*>)
      let nome = card.dataset.nome || '';
      if (!nome) {
        const possible = card.querySelector('p, div, h3, h4, .title, .nome');
        if (possible) nome = possible.textContent.trim();
      }
      // se ainda não achou, pega alt da imagem
      if (!nome) {
        const img = card.querySelector('img');
        if (img && img.alt) nome = img.alt.trim();
      }
      // se achou, normaliza e aplica dataset
      if (nome && creatures[nome]) {
        card.dataset.nome = nome;
        const cid = creatures[nome].id || slugify(nome);
        card.dataset.id = cid;
      } else {
        // tenta procurar por chave que tenha id igual ao text (caso o nome exibido não seja a chave)
        if (nome) {
          const found = Object.entries(creatures).find(([,v]) => (v.id && v.id.toString().toLowerCase() === nome.toLowerCase()));
          if (found) {
            const key = found[0];
            card.dataset.nome = key;
            card.dataset.id = creatures[key].id;
          }
        }
      }
    });
    return cards.length;
  }

  // 3) função principal que espera os cards e tenta selecionar
  function autoSelectFromURL() {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id') || params.get('criatura');
    if (!idParam) return;

    // garante que popup de lista abra (se tiver um botão que abre, tentamos clicar)
    const abrirPopupBtn = document.getElementById('abrirPopup') || document.querySelector('[data-open="listaCriaturas"], #abrirPopupRaca, .abrir-popup');
    if (abrirPopupBtn) {
      try { abrirPopupBtn.click(); } catch(e){ /* ignore */ }
    }

    // aguarda cards serem populados: tenta por até MAX ms
    const MAX_WAIT = 3000; // tempo máximo para aguardar (ms)
    const INTERVAL = 80;
    let waited = 0;

    const iv = setInterval(() => {
      waited += INTERVAL;
      const count = ensureCardsDataAttributes();

      // procura card pelo dataset.id exato (preferencial)
      const cards = Array.from(document.querySelectorAll('.card-criatura'));
      const idLower = idParam.toString().toLowerCase();

      let target = cards.find(c => (c.dataset.id && c.dataset.id.toString().toLowerCase() === idLower));
      if (!target) {
        // tenta encontrar por nome da chave (dataset.nome)
        target = cards.find(c => (c.dataset.nome && c.dataset.nome.toString().toLowerCase() === idLower));
      }
      if (!target) {
        // tenta achar por comparar com creatures keys cujo id === idParam
        const keyFound = Object.entries(creatures).find(([,v]) => (v.id && v.id.toString().toLowerCase() === idLower));
        if (keyFound) {
          const keyName = keyFound[0];
          target = cards.find(c => (c.dataset.nome && c.dataset.nome === keyName) || (c.textContent && c.textContent.toLowerCase().includes(keyName.toLowerCase())));
        }
      }

      if (target) {
        clearInterval(iv);
        // destaca visualmente
        target.style.outline = "3px solid #ffd54f";
        target.style.transition = "outline 160ms ease-in-out";
        // scrolla para o item
        try { target.scrollIntoView({behavior:"smooth", block:"center"}); } catch(e){}
        // clica para abrir a criatura (se o card tiver handler)
        setTimeout(()=> {
          target.click();
          console.info("Auto-selecionado card com id:", idParam);
        }, 120);
        return;
      }

      if (waited >= MAX_WAIT) {
        clearInterval(iv);
        // fallback: tenta abrir diretamente pela função exibirCriatura, buscando a chave pela id
        const found = Object.entries(creatures).find(([,v]) => v.id && v.id.toString().toLowerCase() === idLower);
        if (found) {
          const keyName = found[0];
          if (typeof exibirCriatura === 'function') {
            exibirCriatura(keyName);
            console.info("Card não encontrado na lista, exibindo diretamente via exibirCriatura:", keyName);
          } else {
            console.warn("exibirCriatura não encontrada para exibir:", keyName);
          }
        } else {
          console.warn("Auto-seleção falhou: nenhum card nem criatura com id:", idParam);
        }
      }
    }, INTERVAL);
  }

  // roda quando DOM estiver pronto (várias cargas do script são toleradas)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoSelectFromURL);
  } else {
    setTimeout(autoSelectFromURL, 50);
  }
})();

// irmão tu colocou aquiii o codigo que define a seleção de personagem por hyperlink, não funcionou
// irmão tu colocou aquiii o codigo que define a seleção de personagem por hyperlink, não funcionou
// irmão tu colocou aquiii o codigo que define a seleção de personagem por hyperlink, não funcionou
// irmão tu colocou aquiii o codigo que define a seleção de personagem por hyperlink, não funcionou
// irmão tu colocou aquiii o codigo que define a seleção de personagem por hyperlink, não funcionou




