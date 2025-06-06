# Observer — Resumo

O **Observer** é um padrão de projeto comportamental que permite que um objeto (o "sujeito" ou "publisher") notifique automaticamente outros objetos (os "observadores" ou "subscribers") sobre mudanças em seu estado, promovendo um baixo acoplamento entre eles.

## Por que usar?

Esse padrão é útil quando você precisa que diferentes partes do sistema reajam a eventos ou alterações de estado de forma desacoplada, sem que o objeto principal precise conhecer detalhes dos observadores. É muito comum em sistemas de interface gráfica, notificações, eventos e fluxos reativos.

## Estrutura

- **Sujeito (Subject/Publisher)**: Mantém uma lista de observadores e fornece métodos para adicionar, remover e notificar observadores.
- **Observador (Observer/Subscriber)**: Define uma interface para receber atualizações do sujeito.
- **Observadores Concretos**: Implementam a interface de observador e reagem às notificações do sujeito.

## Exemplo prático (do arquivo `newsletter.ts`)

No seu código, temos a interface `Newsletter` (sujeito) e a interface `Subscriber` (observador). A classe `MorningNewsletter` gerencia a lista de assinantes e notifica todos quando há uma nova notícia:

```typescript
const morningNewsletter = new MorningNewsletter();

const subscriber1 = new Subscriber1();
morningNewsletter.subscribe(subscriber1);

const subscriber2 = new Subscriber2();
morningNewsletter.subscribe(subscriber2);

morningNewsletter.setNews("Today's top story: Observer pattern in TypeScript!");
morningNewsletter.notify(); // Ambos os assinantes recebem a notícia

morningNewsletter.unsubscribe(subscriber1);
morningNewsletter.setNews("Breaking news: Observer pattern is awesome!");
morningNewsletter.notify(); // Apenas subscriber2 recebe a atualização
```

## Identificação

O padrão Observer pode ser reconhecido por métodos de assinatura (subscribe/unsubscribe), uma lista interna de observadores e chamadas para métodos de atualização (update/notify) emitidas para todos os inscritos.

## Referência

Para uma explicação completa, consulte:
[Refactoring.Guru — Factory Method](https://refactoring.guru/pt-br/design-patterns/factory-method)
