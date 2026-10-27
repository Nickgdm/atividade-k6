<pre>
╔═════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                               TESTES DE PERFORMANCE COM K6 - HUB DE LEITURA                             ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════════╝
</pre>
Projeto de estudo de testes de performance da API REST do Hub de Leitura, com cenários de carga e estresse executados pelo k6.

## Sobre o projeto

O repositório contém scripts para observar o comportamento da API sob diferentes níveis de concorrência e apoiar a análise das métricas de execução.

## Objetivos

- Observar o comportamento da API sob diferentes níveis de concorrência.
- Praticar a configuração de estágios de carga.
- Gerar relatórios e analisar métricas de execução.

## Tecnologias e ferramentas

- k6
- API REST do Hub de Leitura
- Relatórios HTML e evidências de execução, quando disponíveis

## Pré-requisitos

- k6 instalado e disponível no terminal.
- API do Hub de Leitura acessível e configurada no script.
- Ambiente de teste sob sua responsabilidade ou com autorização explícita para executar testes de carga.
- PowerShell para os comandos abaixo; em outros terminais, use a sintaxe equivalente para variáveis de ambiente.

## Cenários implementados

### Teste de carga

Arquivo: `tests/load-test.js`. O cenário aumenta gradualmente a concorrência até 10 usuários virtuais, mantém a carga por um período e depois reduz a concorrência.

### Teste de estresse

Arquivo: `tests/stress-test.js`. O cenário aumenta a carga em etapas até 100 usuários virtuais e depois realiza a redução gradual da concorrência.

## Como executar

Execute os comandos a partir da raiz do repositório. As variáveis ativam o dashboard web do k6 e exportam o relatório HTML. Confirme que a pasta `reports/` existe antes da execução.

### Teste de carga

```powershell
$env:K6_WEB_DASHBOARD="true"
$env:K6_WEB_DASHBOARD_EXPORT="reports/load-test.html"
$env:K6_WEB_DASHBOARD_PERIOD="5s"
k6 run tests/load-test.js
```

### Teste de estresse

```powershell
$env:K6_WEB_DASHBOARD="true"
$env:K6_WEB_DASHBOARD_EXPORT="reports/stress-test.html"
$env:K6_WEB_DASHBOARD_PERIOD="5s"
k6 run tests/stress-test.js
```

Os testes de carga podem gerar tráfego significativo. Ajuste os estágios à capacidade do ambiente e não execute testes contra serviços de terceiros sem autorização.

## Estrutura do projeto

```text
atividade-k6/
├── tests/
│   ├── load-test.js
│   └── stress-test.js
├── reports/
└── README.md
```

## Resultados e evidências

Consulte a pasta `reports/` para verificar relatórios e evidências versionadas disponíveis. Relatórios antigos não garantem que uma nova execução terá os mesmos resultados: o desempenho varia conforme o ambiente, os dados e as condições de execução.

## Desafios práticos

Configurar estágios de usuários virtuais, executar cenários contra a API e interpretar os resultados sem confundir uma configuração de carga com uma medição de desempenho.

## Boas práticas

- Separar o cenário de carga do cenário de estresse.
- Registrar evidências de execução.
- Utilizar relatórios como apoio à análise.
- Executar testes apenas em ambientes autorizados.

## Aprendizados

A atividade permite praticar testes de performance com k6, configurar ramp-up e ramp-down e comparar o comportamento da API em cenários de carga e estresse. Também reforça a importância de observar métricas e registrar evidências para sustentar conclusões.
<pre>
╔═════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║       Atividade desenvolvida durante a formação profissionalizante em Quality Assurance (QA) pela       ║
║                     EBAC — Escola Britânica de Artes Criativas e Tecnologia                             ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════════╝
</pre>

## Formação e natureza da atividade

Este projeto foi desenvolvido como uma **atividade facultativa** no contexto dos estudos de Quality Assurance (QA), durante a formação da EBAC — Escola Britânica de Artes Criativas e Tecnologia. Seu objetivo é praticar e consolidar conhecimentos de testes de performance com k6.

════════════════════════════════════════════════════════
