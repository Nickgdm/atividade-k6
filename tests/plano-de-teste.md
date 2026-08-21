# Plano de teste de performance

## Executar Load Test (Teste de performance)
- Validar se um fluxo aguenta um certo número de usuários
- Validar fluxo de login

### Configuração do teste
- VUs: 50
- Tempo de 2 minutos

## Executar Stress Test (Teste de estresse)
- Validar o limite do sistema, para descobrir até onde aguenta antes de falhar.
- Validar fluxo de login

### Configuração do teste
- VUs: aumento gradativo
- Estágios
    - ramp-up de 1 até 200 users
    - mantém 200 users durante 5 minutos
    - ramp-down de 200 a 0 users

# Execução via terminal

$env:K6_WEB_DASHBOARD="true"
$env:K6_WEB_DASHBOARD_EXPORT="../reports/load-test.html"
$env:K6_WEB_DASHBOARD_PERIOD="5s"
k6 run load-test.js