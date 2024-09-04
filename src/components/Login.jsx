// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './styles.css';

// function LogIn() {
//   const navigate = useNavigate();

//   // Função handleLogIn: 
//   // Esta função é chamada quando o formulário de login é enviado.
//   // Ela previne o comportamento padrão de recarregar a página,
//   // e em seguida, executa a lógica de login e redireciona o usuário para a página de dados (mapa ou página inicial).
//   const handleLogIn = (e) => {
//     e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página).
//     // Aqui, você pode adicionar a lógica para autenticar o usuário (ex: verificar credenciais).
//     navigate('/data'); // Redireciona o usuário após o login para a página de dados (mapa ou página inicial).
//   };

//   return (
//     <div className="auth-container">
//       {/* Título da página de login */}
//       <h2 className="auth-title">Log In</h2>
      
//       {/* Formulário de login: contém campos para email e senha */}
//       <form className="auth-form" onSubmit={handleLogIn}>
//         {/* Campo de entrada para o email do usuário */}
//         <input type="email" placeholder="Email" className="auth-input" required />
        
//         {/* Campo de entrada para a senha do usuário */}
//         <input type="password" placeholder="Password" className="auth-input" required />
        
//         {/* Botão de submissão do formulário de login */}
//         <button type="submit" className="auth-button">Log In</button>
//       </form>
//     </div>
//   );
// }

// export default LogIn;
