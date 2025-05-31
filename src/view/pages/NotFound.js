export function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center text-green-50">Oops, página não encontrada.</h1>
        <p>Parece que você tentou acessar uma página que não existe ou foi movida para outro lugar.</p>
        <p> O que você pode fazer agora?</p>
        <ul className="list-disc list-inside">
          <li>Verifique se o endereço digitado está correto.</li>
          <li>Retorne à <a href="/">página inicial</a>.</li>
        </ul>
        <p>Se você acredita que isso é um erro, entre em contato com o suporte. Estamos aqui para ajudar!</p>
      </div>
    </div>
  );
}