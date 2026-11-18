
import React, { useEffect, useState } from 'react'
import './index.css'

const licitacoes = [
  {
    id: 1,
    titulo: 'Aquisição de equipamentos de informática',
    orgao: 'Prefeitura Municipal',
    modalidade: 'Pregão Eletrônico',
    data: '25/11/2026',
    status: 'Aberta',
    valor: 'R$ 85.000,00',
  },
  {
    id: 2,
    titulo: 'Contratação de serviços de manutenção',
    orgao: 'Secretaria de Educação',
    modalidade: 'Concorrência',
    data: '28/11/2026',
    status: 'Aberta',
    valor: 'R$ 42.500,00',
  },
  {
    id: 3,
    titulo: 'Fornecimento de materiais de escritório',
    orgao: 'Governo Estadual',
    modalidade: 'Pregão Eletrônico',
    data: '20/11/2026',
    status: 'Encerrando',
    valor: 'R$ 18.900,00',
  },
]

function App() {
  const [busca, setBusca] = useState('')
  const [pagina, setPagina] = useState('Dashboard')

  const [favoritos, setFavoritos] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('licitaradar-favoritos') || '[]')
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('licitaradar-favoritos', JSON.stringify(favoritos))
  }, [favoritos])

  function alternarFavorito(id: number) {
    setFavoritos((atuais) =>
      atuais.includes(id)
        ? atuais.filter((item) => item !== id)
        : [...atuais, id]
    )
  }

  const resultados = licitacoes.filter((licitacao) => {
    const correspondeBusca =
      `${licitacao.titulo} ${licitacao.orgao} ${licitacao.modalidade}`
        .toLowerCase()
        .includes(busca.toLowerCase())

    const correspondePagina =
      pagina !== 'Favoritos' || favoritos.includes(licitacao.id)

    return correspondeBusca && correspondePagina
  })

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">L</div>
          <div>
            <h2>LicitaRadar</h2>
            <span>MONITORAMENTO INTELIGENTE</span>
          </div>
        </div>

        <div className="menu-label">MENU PRINCIPAL</div>

        <nav className="menu">
          {[
            ['▦', 'Dashboard'],
            ['⌕', 'Licitações'],
            ['☆', 'Favoritos'],
          ].map(([icone, nome]) => (
            <button
              key={nome}
              className={pagina === nome ? 'menu-item active' : 'menu-item'}
              onClick={() => {
                setPagina(nome)
                setBusca('')
              }}
            >
              <span>{icone}</span>
              {nome}
              {nome === 'Favoritos' && favoritos.length > 0 && (
                <span className="favorite-count">{favoritos.length}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="user-avatar">U</div>
          <div>
            <strong>Usuário</strong>
            <span>Conta pessoal</span>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <span className="breadcrumb">Página inicial /</span>
            <strong>{pagina}</strong>
          </div>
          <div className="topbar-right">
            <span className="online-dot"></span>
            Sistema de demonstração
          </div>
        </header>

        <section className="content">
          <div className="welcome">
            <div>
              <span className="eyebrow">CENTRAL DE OPORTUNIDADES</span>
              <h1>
                {pagina === 'Dashboard'
                  ? 'Painel de controle'
                  : pagina === 'Favoritos'
                    ? 'Minhas licitações favoritas'
                    : 'Todas as licitações'}
              </h1>
              <p>
                Acompanhe oportunidades públicas e encontre novas possibilidades
                para o seu negócio.
              </p>
            </div>
            <div className="welcome-icon">⌕</div>
          </div>

          {pagina === 'Dashboard' && (
            <div className="stats">
              <div className="stat-card">
                <div className="stat-icon blue">▦</div>
                <span>Total de licitações</span>
                <strong>{licitacoes.length}</strong>
                <small>Oportunidades de demonstração</small>
              </div>

              <div className="stat-card">
                <div className="stat-icon green">✓</div>
                <span>Licitações abertas</span>
                <strong>
                  {licitacoes.filter((item) => item.status === 'Aberta').length}
                </strong>
                <small>Com prazo para participação</small>
              </div>

              <div className="stat-card">
                <div className="stat-icon orange">◷</div>
                <span>Encerrando em breve</span>
                <strong>
                  {licitacoes.filter((item) => item.status === 'Encerrando').length}
                </strong>
                <small>Exigem atenção</small>
              </div>

              <div className="stat-card">
                <div className="stat-icon purple">☆</div>
                <span>Favoritos</span>
                <strong>{favoritos.length}</strong>
                <small>Oportunidades salvas</small>
              </div>
            </div>
          )}

          <section className="opportunities">
            <div className="section-heading">
              <div>
                <h2>
                  {pagina === 'Favoritos'
                    ? 'Licitações salvas'
                    : 'Oportunidades disponíveis'}
                </h2>
                <p>Pesquise e acompanhe as oportunidades.</p>
              </div>
              <span className="result-count">
                {resultados.length} resultados
              </span>
            </div>

            <div className="search-box">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Pesquisar por objeto, órgão ou modalidade..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>OBJETO DA LICITAÇÃO</th>
                    <th>MODALIDADE</th>
                    <th>VALOR ESTIMADO</th>
                    <th>DATA</th>
                    <th>STATUS</th>
                    <th>FAVORITO</th>
                  </tr>
                </thead>

                <tbody>
                  {resultados.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <strong>{item.titulo}</strong>
                        <small>{item.orgao}</small>
                      </td>
                      <td>{item.modalidade}</td>
                      <td>{item.valor}</td>
                      <td>{item.data}</td>
                      <td>
                        <span
                          className={
                            item.status === 'Aberta'
                              ? 'status open'
                              : 'status ending'
                          }
                        >
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <button
                          className={
                            favoritos.includes(item.id)
                              ? 'favorite-button selected'
                              : 'favorite-button'
                          }
                          onClick={() => alternarFavorito(item.id)}
                          title={
                            favoritos.includes(item.id)
                              ? 'Remover dos favoritos'
                              : 'Adicionar aos favoritos'
                          }
                        >
                          {favoritos.includes(item.id) ? '★' : '☆'}
                        </button>
                      </td>
                    </tr>
                  ))}

                  {resultados.length === 0 && (
                    <tr>
                      <td colSpan={6} className="empty">
                        {pagina === 'Favoritos' && busca === ''
                          ? 'Você ainda não salvou nenhuma licitação.'
                          : 'Nenhuma licitação encontrada.'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="demo-notice">
              <span>ⓘ</span>
              Dados ilustrativos para demonstração. Ainda não há conexão com o PNCP.
            </div>
          </section>

          <footer>
            LicitaRadar © 2026 · Monitoramento de licitações públicas
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
