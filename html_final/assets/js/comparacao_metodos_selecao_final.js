
const META = window.HTML_FINAL_META || {};
const GRAFICOS = META.grafico_catalogo || [];
const TABELAS = META.tabela_catalogo || [];
const RANKINGS = META.rankings || {};
const FAMILIAS = META.familias || {};

function initIframeViewer(viewerId, items, kind) {
  const select = document.getElementById(`${kind}_select_${viewerId}`);
  const frame = document.getElementById(`${kind}_frame_${viewerId}`);
  const cap = document.getElementById(`${kind}_caption_${viewerId}`);
  const openLink = document.getElementById(`${kind}_open_${viewerId}`);
  if (!select || !frame || !cap || !openLink) return;

  select.innerHTML = "";
  if (!items.length) {
    const opt = document.createElement("option");
    opt.textContent = kind === "grafico" ? "Nenhum gráfico encontrado" : "Nenhuma tabela encontrada";
    select.appendChild(opt);
    cap.textContent = "Nenhum item encontrado para esta seção.";
    openLink.style.display = "none";
    return;
  }

  items.forEach((item, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = item.titulo;
    select.appendChild(opt);
  });

  const atualizar = () => {
    const item = items[Number(select.value || 0)];
    if (!item) return;
    frame.src = item.caminho_html_rel || item.caminho_relativo || "about:blank";
    cap.innerHTML = `<b>${item.titulo}</b>${item.subtitulo ? " — " + item.subtitulo : ""}`;
    openLink.href = item.caminho_html_rel || item.caminho_relativo || "#";
    openLink.style.display = "inline-flex";
  };

  select.onchange = atualizar;
  atualizar();
}

function initActiveSectionNav() {
  const links = Array.from(document.querySelectorAll('#navLinks a[href^="#"]'));
  const secoes = links
    .map(link => {
      const id = (link.getAttribute("href") || "").replace("#", "");
      const el = document.getElementById(id);
      return el ? { link, el, id } : null;
    })
    .filter(Boolean);

  if (!secoes.length) return;

  const ativar = (idAtual) => {
    secoes.forEach(item => {
      item.link.classList.toggle("active", item.id === idAtual);
    });
  };

  const atualizarPorScroll = () => {
    const y = window.scrollY;
    const offset = 300; // cabeçalho + folga visual

    let atual = secoes[0].id;

    for (const item of secoes) {
      const topo = item.el.offsetTop;
      if (y + offset >= topo) {
        atual = item.id;
      }
    }

    ativar(atual);
  };

  links.forEach(link => {
    link.addEventListener("click", function() {
      const id = (link.getAttribute("href") || "").replace("#", "");
      ativar(id);
    });
  });

  window.addEventListener("scroll", atualizarPorScroll, { passive: true });
  window.addEventListener("resize", atualizarPorScroll);

  atualizarPorScroll();
}

function initRankingsViewer() {
  const selUniverso = document.getElementById("ranking_universo_select");
  const selMetrica = document.getElementById("ranking_metrica_select");
  const frame = document.getElementById("tabela_frame_rankings");
  const cap = document.getElementById("tabela_caption_rankings");
  const openLink = document.getElementById("tabela_open_rankings");
  const idEl = document.getElementById("ranking_best_id");
  const retornoEl = document.getElementById("ranking_best_retorno");
  const sharpeEl = document.getElementById("ranking_best_sharpe");
  const drawdownEl = document.getElementById("ranking_best_drawdown");

  if (!selUniverso || !selMetrica || !frame || !cap || !openLink) return;

  const metricas = [
    ["geral", "Geral"],
    ["retorno", "Retorno"],
    ["sharpe", "Sharpe"],
    ["sortino", "Sortino"],
    ["calmar", "Calmar"],
    ["dividend_yield", "Dividend Yield"],
  ];

  selUniverso.innerHTML = "";
  [["trajetorias", "Trajetórias"], ["carteiras", "Carteiras"]].forEach(([v, t]) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = t;
    selUniverso.appendChild(opt);
  });

  selMetrica.innerHTML = "";
  metricas.forEach(([v, t]) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = t;
    selMetrica.appendChild(opt);
  });

  const fmtPct = (x, casas=1) => {
    if (x == null || Number.isNaN(Number(x))) return "N/A";
    return `${(Number(x) * 100).toFixed(casas).replace('.', ',')}%`;
  };
  const fmtNum = (x, casas=3) => {
    if (x == null || Number.isNaN(Number(x))) return "N/A";
    return Number(x).toFixed(casas).replace('.', ',');
  };

  const atualizar = () => {
    const chave = `${selUniverso.value}__${selMetrica.value}`;
    const meta = RANKINGS[chave];
    if (!meta) return;
    frame.src = meta.caminho_html_rel || "about:blank";
    cap.innerHTML = `<b>${meta.titulo}</b> — melhor item: ${meta.melhor_id || 'N/A'}`;
    openLink.href = meta.caminho_html_rel || "#";
    if (idEl) idEl.textContent = meta.melhor_id || "N/A";
    if (retornoEl) retornoEl.textContent = fmtPct(meta.retorno, 1);
    if (sharpeEl) sharpeEl.textContent = fmtNum(meta.sharpe, 3);
    if (drawdownEl) drawdownEl.textContent = fmtPct(meta.drawdown, 1);
  };

  selUniverso.onchange = atualizar;
  selMetrica.onchange = atualizar;
  atualizar();
}

function initFamiliasViewer() {
  const select = document.getElementById("familia_tipo_select");
  const frame = document.getElementById("tabela_frame_familias");
  const cap = document.getElementById("tabela_caption_familias");
  const openLink = document.getElementById("tabela_open_familias");
  const idEl = document.getElementById("familia_best_id");
  const retornoEl = document.getElementById("familia_best_retorno");
  const sharpeEl = document.getElementById("familia_best_sharpe");
  const drawdownEl = document.getElementById("familia_best_drawdown");

  if (!select || !frame || !cap || !openLink) return;

  const opcoes = [
    ["metodo_selecao", "Método de seleção"],
    ["filtro_auxiliar", "Filtro auxiliar"],
    ["metodo_alocacao", "Método de alocação"],
  ];

  select.innerHTML = "";
  opcoes.forEach(([v, t]) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = t;
    select.appendChild(opt);
  });

  const fmtPct = (x, casas=1) => {
    if (x == null || Number.isNaN(Number(x))) return "N/A";
    return `${(Number(x) * 100).toFixed(casas).replace('.', ',')}%`;
  };
  const fmtNum = (x, casas=3) => {
    if (x == null || Number.isNaN(Number(x))) return "N/A";
    return Number(x).toFixed(casas).replace('.', ',');
  };

  const atualizar = () => {
    const meta = FAMILIAS[select.value];
    if (!meta) return;
    frame.src = meta.caminho_html_rel || "about:blank";
    cap.innerHTML = `<b>${meta.titulo}</b> — família líder: ${meta.melhor_id || 'N/A'}`;
    openLink.href = meta.caminho_html_rel || "#";
    if (idEl) idEl.textContent = meta.melhor_id || "N/A";
    if (retornoEl) retornoEl.textContent = fmtPct(meta.retorno, 1);
    if (sharpeEl) sharpeEl.textContent = fmtNum(meta.sharpe, 3);
    if (drawdownEl) drawdownEl.textContent = fmtPct(meta.drawdown, 1);
  };

  select.onchange = atualizar;
  atualizar();
}

window.addEventListener("DOMContentLoaded", function() {
  initRankingsViewer();
  initFamiliasViewer();
  initIframeViewer("desempenho", GRAFICOS.filter(x => x.viewer === "desempenho"), "grafico");
  initIframeViewer("drawdown", GRAFICOS.filter(x => x.viewer === "drawdown"), "grafico");
  initIframeViewer("dispersoes", GRAFICOS.filter(x => x.viewer === "dispersoes"), "grafico");
  initIframeViewer("heatmaps", GRAFICOS.filter(x => x.viewer === "heatmaps"), "grafico");
  initIframeViewer("funil", GRAFICOS.filter(x => x.viewer === "funil"), "grafico");
  initIframeViewer("comb_sel", TABELAS.filter(x => x.viewer === "comb_sel"), "tabela");
  initIframeViewer("composicao", GRAFICOS.filter(x => x.viewer === "composicao"), "grafico");
  initIframeViewer("estatisticos", GRAFICOS.filter(x => x.viewer === "estatisticos"), "grafico");
  initIframeViewer("funil", TABELAS.filter(x => x.viewer === "funil"), "tabela");
  initIframeViewer("graficos_finais", GRAFICOS.filter(x => x.viewer === "graficos_finais"), "grafico");
  initIframeViewer("testes", TABELAS.filter(x => x.viewer === "testes"), "tabela");
  initIframeViewer("apendice", TABELAS.filter(x => x.viewer === "apendice"), "tabela");
  initActiveSectionNav();
});
