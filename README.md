# 📊 Métodos de Seleção de Carteiras no Brasil: Seleção, Filtros Auxiliares e Alocação

👉 **[🔗 Acesse o Dashboard Interativo (GitHub Pages)](https://mhirokitomida.github.io/comparacao_metodos_selecao_carteiras/)**

---

## 📌 Sobre o projeto

Este projeto investiga como diferentes arquiteturas de construção de carteiras em ações brasileiras se comportam quando comparadas sob uma mesma base metodológica, preservando consistência entre **seleção de ativos**, **filtros auxiliares**, **métodos de alocação**, **funil de comparabilidade**, **backtest** e **validação estatística**. 

A estrutura do estudo foi desenhada para separar claramente:

- 📌 **Métodos de seleção** como camada principal de escolha dos ativos  
- 🧩 **Filtros auxiliares** como camada complementar de refinamento  
- ⚖️ **Métodos de alocação** como bloco de construção final das carteiras  
- 🧪 **Testes estatísticos** como camada de robustez dos resultados  

Foram utilizados **cinco métodos fundamentais de seleção**:

- 💰 **Dividendos**  
- 🧱 **Graham**  
- 📈 **Quality / Profitability**  
- ✨ **Magic Formula**  
- 📉 **Gordon**  

Além disso, o projeto avaliou **três blocos-base de filtros auxiliares**:

- 💧 **Liquidez**  
- 🛡️ **Risco Financeiro**  
- 📈 **Momentum Leve**  

Na camada de alocação, foram comparadas **três famílias principais**:

- 🟦 **Equal Weight**  
- 📈 **Markowitz puro**  
- 📉 **Markowitz restrito**  

As combinações entre os métodos de seleção foram organizadas em identificadores **COMB_SEL**, permitindo comparar tanto métodos isolados quanto blocos combinados de seleção. O funil final gerou **1.462 combinações cenário-ano**, das quais **1.315 sobreviveram**, com taxa de retenção de **89,9%**. 

---

## 🎯 Objetivo

Avaliar, de forma quantitativa e estatística, como diferentes combinações de seleção, filtros auxiliares e alocação se comportam no mercado brasileiro, buscando responder questões como:

- 📌 A seleção simples já é suficiente para gerar carteiras competitivas?  
- 📌 Filtros auxiliares realmente melhoram a qualidade das carteiras?  
- 📌 Métodos de otimização agregam valor de forma consistente?  
- 📌 Equal Weight continua competitivo mesmo diante de abordagens mais sofisticadas?  
- 📌 Robustez média e eficiência pontual apontam para os mesmos vencedores?  

Além disso, o projeto busca entender:

- A diferença entre **carteira** e **trajetória**  
- O papel da **comparabilidade metodológica** no funil final  
- Se a superioridade observada aparece em **retorno**, **risco**, **drawdown** ou de forma mais ampla  
- Se os resultados são **robustos dentro do desenho adotado** ou sensíveis ao critério analisado 

---

## 🧠 Metodologia

A análise foi construída em etapas estruturadas, priorizando consistência entre métodos, filtros, alocação, métricas e evidência estatística. 

---

### 1. Construção do universo elegível

- Coleta e consolidação da base de ações brasileiras  
- Aplicação de filtros de qualidade cadastral e integridade histórica  
- Padronização temporal das séries  
- Definição do benchmark em **Ibovespa**  
- Uso da **Selic mensal** como taxa livre de risco  
- Separação entre período de desenvolvimento e teste fora da amostra  

O recorte bruto cobre **2010–2025**, com desenvolvimento até **2022** e teste fora da amostra entre **2023–2025**. 

---

### 2. Métodos de seleção de ativos

Foram utilizados cinco métodos fundamentais:

- 💰 Dividendos  
- 🧱 Graham  
- 📈 Quality / Profitability  
- ✨ Magic Formula  
- 📉 Gordon  

Esses métodos foram avaliados tanto de forma isolada quanto por meio de **combinações de seleção**, identificadas no projeto como **COMB_SEL**. Isso permitiu comparar arquiteturas simples e compostas dentro de um mesmo framework metodológico. 

---

### 3. Filtros auxiliares

Os filtros auxiliares partiram de três blocos-base:

- 💧 Liquidez  
- 🛡️ Risco Financeiro  
- 📈 Momentum Leve  

A partir desses blocos, o pipeline construiu combinações adicionais, incluindo o caso sem filtros auxiliares. O objetivo foi testar se camadas complementares de refinamento realmente melhoram a qualidade final das soluções ou apenas tornam o processo excessivamente restritivo. 

---

### 4. Métodos de alocação

Foram comparadas três famílias principais de alocação:

#### 🟦 Equal Weight
- Pesos iguais entre os ativos selecionados  
- Serve como benchmark metodológico simples e transparente  
- Importante para avaliar se a sofisticação dos outros métodos realmente agrega valor  

#### 📈 Markowitz puro
- Otimização clássica de portfólio  
- Maior liberdade alocativa  
- Capaz de gerar carteiras pontuais muito eficientes, mas com mais sensibilidade à concentração  

#### 📉 Markowitz restrito
- Mesma lógica de otimização, porém com limites de peso  
- Reduz concentração excessiva  
- Gera carteiras mais disciplinadas e implementáveis  

No fechamento agregado, o melhor bloco médio de alocação foi o **Equal Weight**, enquanto a melhor carteira pontual apareceu em uma configuração de **Markowitz puro**.

---

### 5. Trajetória x carteira

Um ponto central do projeto é a distinção entre duas unidades analíticas:

- **Carteira**: portfólio efetivamente formado em um rebalanceamento específico  
- **Trajetória**: sequência longitudinal dessa mesma receita metodológica ao longo do backtest  

Isso é importante porque a melhor solução em **consistência acumulada** não precisa ser a mesma melhor solução em **eficiência pontual**. No período-base do HTML, o projeto consolidou **1.512 carteiras principais** e **152 trajetórias principais**. 

---

### 6. Funil de comparabilidade

O funil metodológico foi desenhado para manter apenas cenários comparáveis entre as famílias de alocação.

- 🔢 **1.462** combinações cenário-ano geradas  
- ✅ **1.315** combinações sobreviventes  
- 📊 **89,9%** de taxa de retenção  
- 🚫 Principal motivo de exclusão: `ausencia_markowitz_puro_e_markowitz_restrito`  

Isso mostra que o universo final foi enxugado principalmente por comparabilidade metodológica, e não por falha operacional do pipeline. 

---

### 7. Backtest e séries das carteiras

Para cada combinação relevante:

- 📈 Cálculo das séries de retorno  
- 📊 Curvas patrimoniais base 100  
- 📉 Drawdown ao longo do tempo  
- 🔁 Comparação entre trajetórias e carteiras  
- 🏁 Consolidação do período completo e leituras intermediárias  

O gráfico consolidado mostrou patrimônio final base 100 de aproximadamente **246,36** para o benchmark, **726,08** para a melhor trajetória e **150,28** para a melhor carteira destaque daquele bloco gráfico.

---

### 8. Métricas de avaliação

Foram calculadas métricas de retorno, risco, eficiência, dividendos, consistência e ranking:

- 📈 Retorno acumulado  
- 📈 Retorno anualizado  
- 📊 Volatilidade anualizada  
- ⚖️ Sharpe anualizado  
- 📉 Drawdown máximo  
- 📊 Sortino anualizado  
- 📊 Calmar  
- 💵 Dividend Yield médio da carteira  
- 🎯 Robustez das janelas móveis  
- ✅ Hit ratio  
- 🏆 Score agregado de ranking  

---

### 9. Testes estatísticos e robustez

Para qualificar os resultados observados, o projeto consolidou:

- **7.140 testes estatísticos**
- **3.057 testes significativos a 5%**
- **42,8%** de significância global  

O bloco estatístico mais forte foi **Risco | carteiras | unigrupo**, enquanto o melhor bloco bootstrap ficou com **Equal Weight**. Além disso, o hit ratio médio global ficou em **49,0%** para trajetórias e **48,8%** para carteiras, sugerindo que a superioridade observada veio mais da qualidade das vitórias e da contenção das perdas do que da simples frequência de meses positivos.

---

## 📈 Principais Resultados

- O **Equal Weight** se mostrou um benchmark forte e competitivo, provando que a construção simples continua extremamente robusta  
- O **Markowitz puro** apareceu como a abordagem mais capaz de gerar carteiras pontuais de alta eficiência  
- O **Markowitz restrito** mostrou valor em disciplina de alocação e implementabilidade  
- Os **filtros auxiliares mais parcimoniosos** continuaram muito bem posicionados no fechamento médio  
- A melhor trajetória foi **`equal_weight__COMB_SEL_029__apenas_risco_financeiro`**  
- A melhor carteira foi **`COMB_SEL_029__risco_financeiro_e_momentum_leve__2023-05__markowitz_puro__min_vol`**  
- O melhor filtro médio foi **`apenas_risco_financeiro`**  
- O melhor bloco médio de alocação foi **`equal_weight`**  
- O melhor bloco bootstrap também ficou com **`equal_weight`**  
- A evidência estatística foi mais forte em **risco** e **drawdown** do que apenas em retorno isolado 

👉 Isso sugere que:

> A seleção correta importa —  
> filtros mais enxutos podem melhorar bastante a qualidade —  
> a alocação simples continua muito forte —  
> e, nesta amostra, **robustez média** e **eficiência pontual** não foram exatamente a mesma disputa.

---

## 📊 Visualizações

O projeto inclui um relatório HTML interativo com:

- 📈 Curvas patrimoniais das principais trajetórias e carteiras  
- 📉 Gráficos de drawdown  
- 🎯 Gráficos de dispersão entre risco, retorno, dividendos, turnover e concentração  
- 🧊 Heatmaps de métricas e famílias  
- 🧪 Tabelas de testes estatísticos  
- 🧱 Funil de sobrevivência das combinações  
- 🔎 Dicionário de **COMB_SEL**  
- 📋 Tabelas interativas com busca, ordenação e paginação  
- 🎛️ Dropdowns e viewers por seção  
- 📊 Painéis finais com rankings, famílias, funil, gráficos e conclusão analítica 

---

## 🌐 Visualização do projeto

👉 https://mhirokitomida.github.io/comparacao_metodos_selecao_carteiras/

---

## ⚠️ Observações importantes

- A análise não constitui recomendação de investimento  
- Os resultados dependem do período analisado e do universo de ativos selecionado  
- Modelos de otimização são sensíveis às estimativas e restrições impostas  
- O projeto compara **arquiteturas metodológicas**, e não apenas carteiras isoladas  
- A distinção entre **trajetória** e **carteira** é essencial para a leitura correta dos resultados  
- O funil final busca preservar **comparabilidade metodológica**, e não maximizar quantidade de casos  
- O estudo busca identificar **evidência empírica comparativa**, não causalidade  
- A significância estatística reforça a leitura econômica, mas deve ser entendida dentro do desenho adotado  
- A superioridade observada apareceu mais em **risco e drawdown** do que apenas em médias isoladas de retorno 

---

## 🧠 Principais Aprendizados

- A distinção entre **trajetória** e **carteira** muda a interpretação dos vencedores  
- O projeto ficou mais rico ao comparar métodos isolados e combinações **COMB_SEL**  
- A estrutura com **5 métodos de seleção**, **3 blocos-base de filtros** e **3 famílias de alocação** foi suficiente para gerar um universo robusto de comparação  
- O **Equal Weight** permaneceu muito forte como bloco médio e referência de robustez  
- O **Markowitz puro** mostrou capacidade real de produzir carteiras pontuais de altíssima eficiência  
- O **Markowitz restrito** confirmou a utilidade prática das restrições  
- O funil foi saudável: **1.462 geradas**, **1.315 sobreviventes**, **89,9% de retenção**  
- O projeto consolidou **7.140 testes**, dos quais **3.057 significativos**  
- O hit ratio perto de 50% mostra que a superioridade veio mais de **ganhar melhor** do que de **ganhar mais vezes**  
- A evidência estatística reforçou que a vantagem observada apareceu sobretudo em **risco** e **drawdown**  
- Não basta perguntar “qual venceu”; é preciso perguntar **onde** e **como** cada arquitetura venceu 

---

## 🏁 Conclusão

O estudo reforça uma ideia central:

> A análise de carteiras não deve ser feita por uma única métrica isolada, mas por um conjunto coerente de critérios.

Ao longo do projeto, ficou evidente que diferentes métodos resolvem problemas diferentes. O **Equal Weight** oferece simplicidade e força como benchmark. O **Markowitz puro** empurra a eficiência pontual, mas pode concentrar mais. O **Markowitz restrito** melhora a disciplina e a implementabilidade da alocação. Já os **filtros auxiliares parcimoniosos** mostraram valor importante no fechamento agregado.

Ao mesmo tempo, o fechamento deste estudo mostrou algo relevante: **não houve uma divisão completa entre vencedores por critério**. Pelo contrário, houve convergência importante entre os principais blocos de leitura, com o **Equal Weight** muito forte em robustez média, enquanto configurações específicas de **Markowitz puro** conseguiram gerar as carteiras pontuais mais eficientes. Isso torna a conclusão mais madura, porque mostra que o projeto não entrega apenas um “campeão absoluto”, e sim uma hierarquia mais útil para decisão prática.

Outro aprendizado importante é que a leitura correta depende de enxergar o projeto em camadas: **seleção, filtro, alocação, funil, métricas e evidência estatística**. A principal contribuição do estudo foi mostrar que a análise de portfólios precisa ir além da pergunta “qual rendeu mais?” e incorporar também **como esse resultado foi obtido**, com quanta volatilidade, com que profundidade de drawdown, com qual grau de concentração e com que consistência ao longo do tempo.

Em termos práticos:

> A seleção correta importa —  
> filtros auxiliares mais objetivos mostraram valor —  
> a alocação simples continua muito poderosa —  
> e, nesta amostra, **robustez média** e **eficiência pontual** foram dimensões complementares, e não equivalentes.
