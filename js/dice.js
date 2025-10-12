// Hook que executa quando o Dice So Nice está pronto para uso
Hooks.on('diceSoNiceReady', (dice3d) => {
  
  // Registra um novo sistema de dados personalizado
  // id: identificador único do sistema
  // name: nome exibido na interface do usuário
  dice3d.addSystem({ id: "Kimetsu no Yaiba", name: "Kimetsu no Yaiba" }, "default");
   
  // ========================================
  // TEMA WHITE - Caçador de Demônios
  // ========================================
  
  // Adiciona uma nova textura personalizada ao sistema
  dice3d.addTexture("kny_white", {
    name: "🎴 Demon Slayer White",              // Nome da textura exibido no menu
    composite: "multiply",                      // MUDADO: multiply funciona melhor para texturas com detalhes
    source: "modules/kimetsu-no-yaiba-dice-so-nice-foundry/img/WHITE.webp",  // Caminho da imagem de textura principal
    bump: "modules/kimetsu-no-yaiba-dice-so-nice-foundry/img/WHITE.webp"     // MUDADO: bump map deve ser da mesma imagem
  })
    .then(() => {
      // Após carregar a textura, adiciona um colorset (tema de cores) completo
      dice3d.addColorset({
        name: 'Kimetsu no Yaiba - White Theme',     // Nome do tema exibido no menu
        description: "⚔️ Caçador de Demônios White",      // Descrição do tema
        category: "Kimetsu no Yaiba",               // Categoria para organizar temas no menu
        
        // === CORES ===
        background: "#f5f5f5",        // AJUSTADO: Cor mais clara para ver a textura
        foreground: '#ff010b',        // Cor dos números/símbolos (vermelho)
        outline: '#8b0000',           // AJUSTADO: Contorno vermelho escuro para destaque
        edge: '#c0b8b0',              // Cor das bordas/arestas do dado (cinza suave)
        
        // === CONFIGURAÇÕES DE APARÊNCIA ===
        texture: 'kny_white',         // Nome da textura a ser aplicada (deve corresponder ao addTexture)
        material: 'metal',            // MUDADO: metal geralmente exibe texturas melhor
        
        // === ESCALA DA FONTE POR TIPO DE DADO ===
        // Ajusta o tamanho dos números em cada tipo de dado para melhor legibilidade
        fontScale: {
          "d100": 1.0,    // AJUSTADO: valores mais conservadores
          "d20": 1.0,     // Dado de 20 lados
          "d12": 1.1,     // Dado de 12 lados
          "d10": 1.0,     // Dado de 10 lados
          "d8": 1.1,      // Dado de 8 lados
          "d6": 1.2,      // Dado de 6 lados
          "d4": 1.2,      // Dado de 4 lados
          "d2": 1.2       // Moeda (d2)
        },
        
        font: "Blood Crow"            // MUDADO: use apenas o nome da fonte, sem sufixos
      }, "default");
    });
  
  // ========================================
  // TEMA RED - Demon Slayer (Vermelho)
  // ========================================
  
  // Adiciona textura para o tema vermelho
  dice3d.addTexture("kny_red", {
    name: "⚔️ Demon Slayer Red",                // Nome da textura exibido no menu
    composite: "multiply",                      // Modo de mesclagem da textura
    source: "modules/kimetsu-no-yaiba-dice-so-nice-foundry/img/RED.webp",    // Caminho da textura principal (vermelho)
    bump: "modules/kimetsu-no-yaiba-dice-so-nice-foundry/img/RED.webp"       // Bump map da mesma imagem
  })
    .then(() => {
      // Adiciona o colorset do tema vermelho
      dice3d.addColorset({
        name: 'Kimetsu no Yaiba - Demon Slayer',   // Nome do tema
        description: "⚔️ Caçadores de Demônios Red",   // Descrição
        category: "Kimetsu no Yaiba",              // Categoria
        
        // === CORES ===
        background: "#ff010b",        // Cor de fundo do dado (vermelho intenso)
        foreground: '#ffffff',        // Cor dos números (branco)
        outline: '#000000',           // Cor do contorno dos números (preto)
        edge: '#cc0108',              // Cor das bordas/arestas (vermelho mais suave)
        
        // === CONFIGURAÇÕES DE APARÊNCIA ===
        texture: 'kny_red',           // Nome da textura red
        material: 'metal',            // Material metálico
        
        // === ESCALA DA FONTE ===
        fontScale: {
          "d100": 1.0,
          "d20": 1.0,
          "d12": 1.1,
          "d10": 1.0,
          "d8": 1.1,
          "d6": 1.2,
          "d4": 1.2,
          "d2": 1.2
        },
        
        font: "Blood Crow"            // Fonte personalizada
      }, "default");
    });

  // ========================================
  // TEMA DARK - Noite dos Demônios
  // ========================================
  
  // Adiciona textura para o tema escuro
  dice3d.addTexture("kny_dark", {
    name: "🩸 Demon Slayer Dark",               // Nome da textura exibido no menu
    composite: "multiply",                      // MUDADO: multiply para texturas escuras
    source: "modules/kimetsu-no-yaiba-dice-so-nice-foundry/img/DARK.webp",   // Caminho da textura principal (fundo preto)
    bump: "modules/kimetsu-no-yaiba-dice-so-nice-foundry/img/DARK.webp"      // MUDADO: bump map da mesma imagem
  })
    .then(() => {
      // Adiciona o colorset do tema dark
      dice3d.addColorset({
        name: 'Kimetsu no Yaiba - Dark Theme',      // Nome do tema
        description: "🌙 Noite dos Demônios",       // Descrição
        category: "Kimetsu no Yaiba",               // Categoria
        
        // === CORES ===
        background: "#1a1a1a",        // AJUSTADO: preto mais suave para ver textura
        foreground: '#ffffff',        // MUDADO: branco puro para melhor contraste
        outline: '#ff010b',           // Cor do contorno dos números (vermelho intenso)
        edge: '#330000',              // AJUSTADO: borda vermelha escura
        
        // === CONFIGURAÇÕES DE APARÊNCIA ===
        texture: 'kny_dark',          // Nome da textura dark
        material: 'metal',            // MUDADO: metal para melhor visualização
        
        // === ESCALA DA FONTE ===
        fontScale: {
          "d100": 1.0,
          "d20": 1.0,
          "d12": 1.1,
          "d10": 1.0,
          "d8": 1.1,
          "d6": 1.2,
          "d4": 1.2,
          "d2": 1.2
        },
        
        font: "Blood Crow"            // MUDADO: nome simples da fonte
      }, "default");
    });
});