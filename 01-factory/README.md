# Factory Method — Resumo

O **Factory Method** é um padrão de projeto criacional que define uma interface para criar objetos, mas permite que as subclasses decidam qual classe instanciar. Assim, o código cliente trabalha apenas com interfaces ou classes abstratas, sem depender de implementações concretas, facilitando a extensão e manutenção do sistema.

## Por que usar?

Esse padrão é útil quando você não sabe de antemão quais classes concretas precisará instanciar, ou quando deseja permitir que usuários da sua biblioteca ou framework possam estender e customizar a criação de objetos. Ele também ajuda a evitar acoplamento forte entre o código cliente e as classes concretas.

## Estrutura

- **Produto**: Interface comum para todos os objetos criados.
- **Produtos Concretos**: Implementações específicas da interface.
- **Criador (Factory)**: Define o método fábrica, que retorna objetos do tipo Produto.
- **Criadores Concretos**: Implementam o método fábrica para retornar instâncias específicas.

## Exemplo prático (do arquivo `animals.ts`)

No seu código, temos a interface `Animal` e implementações concretas como `Dog`, `Eagle` e `Dolphin`. Cada animal tem sua própria fábrica (`DogFactory`, `EagleFactory`, `DolphinFactory`), que implementa o método `createAnimal()` para instanciar o animal correspondente:

```typescript
// Exemplo simplificado
abstract class AnimalFactory {
  public abstract createAnimal(): Animal;
}

class DogFactory extends AnimalFactory {
  public createAnimal(): Dog {
    return new Dog();
  }
}

const dogFactory = new DogFactory();
const dog = dogFactory.createAnimal();
console.log(dog.makeSound()); // Woof!
```

Assim, o código cliente pode criar diferentes tipos de animais sem depender das classes concretas, apenas mudando a fábrica utilizada.

## Referência

Para uma explicação completa, consulte:
[Refactoring.Guru — Factory Method](https://refactoring.guru/pt-br/design-patterns/factory-method)
