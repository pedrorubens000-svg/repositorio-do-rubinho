
import React, { useState } from 'react'

type LoginProps = {
  onLogin: () => void
}

function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function entrar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (email.trim() && senha.trim()) {
      onLogin()
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <div className="login-logo">L</div>
          <h1>LicitaRadar</h1>
          <p>MONITORAMENTO INTELIGENTE</p>
        </div>

        <div className="login-heading">
          <h2>Bem-vindo de volta!</h2>
          <p>Entre na sua conta para continuar.</p>
        </div>

        <form onSubmit={entrar}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            required
          />

          <button type="submit">Entrar no sistema</button>
        </form>

        <div className="login-footer">
          LicitaRadar © 2026
        </div>
      </div>
    </div>
  )
}

export default Login
