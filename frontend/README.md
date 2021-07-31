Desafio front-end Agência e-Plus:

Desenvolvedor: Sogolon Vieira Jauará

Modo de execução:

Para executar este código, é necessário fazer um clone deste repositório, instalar as dependências necessárias(bootstrap, sass, materialUI(ícones), react-router-dom, etc).

Descrição:

Para desenvolver esse layout, primeiramente, instalei o React utilizando o comando npx create-react-app, em seguida, instalei bootstrap e o pré-processador de CSS (Sass). Iniciei o desenvolvimento do site criando os componentes e separando os em pastas como boa prática de desenvolvimento. A segunda etapa foi a estilização dos componentes considerando os espaçamentos e fontes presentes no wireframe enviado. Na etapa final, fiz o site ser responsivo para telas de diferentes tamanhos.

A barra de navegação foi criada com auxílio da biblioteca bootstrap, em seguida, criei o menu dropdown utilizando somente HTML e CSS pré-processado. Para obter um site responsivo, criei um segundo menu dropdown para telas menores que exibe os links que, normalmente, são exibidos em telas maiores, evitando assim muita informação em telas pequenas e uma maior usabilidade e, consequentemente, melhor experiência do usuário.

O JSON com os produtos foi consumido e exibido com uma lista em cartões criados previamente. Algumas condições foram escritas para controlar como os cartões seriam exibidos (Ex: se o produto está esgotado, o preço não é exibido e não é contabilizado no valor final).

Obs: utilizei o react-router-dom pois assim seria possível criar páginas dinâmicas futuramente. 