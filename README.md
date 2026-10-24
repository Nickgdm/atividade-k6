# Testes de Performance com k6 — Hub de Leitura

Projeto prático de testes de performance da API REST do Hub de Leitura, com cenários de carga e estresse executados pelo k6.

## Objetivos
- Observar o comportamento da API sob diferentes níveis de concorrência.
- Praticar configuração de estágios de carga.
- Gerar relatórios e analisar métricas de execução.

## Tecnologias
- k6
- API REST do Hub de Leitura
- Relatórios HTML e evidências de execução

## Pré-requisitos
- k6 instalado e disponível no terminal.
- API do Hub de Leitura acessível e configurada no script.
- Ambiente de teste sob sua responsabilidade ou com autorização explícita para executar testes de carga.
- PowerShell para os comandos abaixo; em outros terminais, configure as variáveis de ambiente com a sintaxe equivalente.

## Cenários implementados

### Teste de carga
Arquivo: `tests/load-test.js`. O cenário aumenta gradualmente a concorrência até 10 usuários virtuais, mantém a carga por um período e depois reduz a concorrência.

### Teste de estresse
Arquivo: `tests/stress-test.js`. O cenário aumenta a carga em etapas até 100 usuários virtuais e depois realiza ramp-down.

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

Os testes de carga podem gerar tráfego significativo. Ajuste os estágios dos scripts à capacidade do ambiente e evite executá-los contra serviços de terceiros sem autorização.

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
Consulte a pasta `reports/` para relatórios e evidências versionadas disponíveis. Relatórios antigos não garantem que uma nova execução terá os mesmos resultados; desempenho varia conforme o ambiente, os dados e as condições de execução.

## Desafios práticos
Configurar estágios de usuários virtuais, executar os cenários contra a API e interpretar os resultados sem confundir uma configuração de carga com uma medição de desempenho.

## Boas práticas adotadas
- Separação entre cenário de carga e cenário de estresse.
- Registro de evidências de execução.
- Uso de relatórios para apoiar a análise.

## 📚 Aprendizados
A atividade permite praticar testes de performance com k6, configurar ramp-up e ramp-down e comparar o comportamento da API em cenários de carga e estresse. Também reforça a importância de observar métricas e registrar evidências para sustentar conclusões.

## Considerações finais
Execute testes somente em ambientes sob sua responsabilidade ou com autorização explícita. Os resultados variam conforme o ambiente, os dados e as condições de execução.

---

## 🎓 Formação
Atividade desenvolvida durante a formação profissionalizante em **Quality Assurance (QA) pela EBAC — Escola Britânica de Artes Criativas e Tecnologia**.
