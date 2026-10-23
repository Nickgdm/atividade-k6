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
- k6 instalado.
- API do Hub de Leitura acessível.
- Ambiente autorizado para executar testes de carga.

## Cenários implementados

### Teste de carga
Arquivo: `tests/load-test.js`. O cenário aumenta gradualmente até 10 usuários virtuais, mantém a carga por um período e depois reduz a concorrência.

### Teste de estresse
Arquivo: `tests/stress-test.js`. O cenário aumenta a carga em etapas até 100 usuários virtuais e depois realiza ramp-down, para observar o comportamento sob pressão maior.

## Como executar

Os comandos abaixo seguem a configuração PowerShell descrita na atividade. Ajuste os caminhos para a estrutura local:

```powershell
$env:K6_WEB_DASHBOARD="true"
$env:K6_WEB_DASHBOARD_EXPORT="../reports/load-test.html"
$env:K6_WEB_DASHBOARD_PERIOD="5s"
k6 run tests/load-test.js
```

Para o cenário de estresse, altere o arquivo de entrada e o nome do relatório para `tests/stress-test.js` e `stress-test.html`. Confirme os caminhos existentes antes de executar.

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
O repositório inclui capturas de tela e relatórios associados aos cenários de carga e estresse. Consulte a pasta `reports/` para as evidências versionadas.

## Desafios práticos
Configurar estágios de usuários virtuais, executar os cenários contra a API e interpretar os resultados sem confundir uma configuração de carga com uma medição de desempenho.

## Boas práticas adotadas
- Separação entre cenário de carga e cenário de estresse.
- Registro de evidências de execução.
- Uso de relatórios para apoiar a análise.

## 📚 Aprendizados
A atividade permitiu praticar testes de performance com k6, configurar ramp-up e ramp-down e comparar o comportamento da API em cenários de carga e estresse. Também reforçou a importância de observar métricas e registrar evidências para sustentar conclusões.

## Considerações finais
Execute testes somente em ambientes sob sua responsabilidade ou com autorização explícita. Os resultados variam conforme o ambiente, os dados e as condições de execução.

---

## 🎓 Formação
Atividade desenvolvida durante a formação profissionalizante em **Quality Assurance (QA) pela EBAC — Escola Britânica de Artes Criativas e Tecnologia**.