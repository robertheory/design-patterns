# Abstract Factory — Resumo

O **Abstract Factory** é um padrão de projeto criacional que permite criar famílias inteiras de objetos relacionados (produtos), sem especificar suas classes concretas. Ele define uma interface para criar cada tipo de produto da família, e cada fábrica concreta implementa essa interface para uma variante específica.

## Diferenças em relação ao Factory Method

- **Factory Method**: Cria um único produto por vez, permitindo que subclasses decidam qual classe concreta instanciar.
- **Abstract Factory**: Cria famílias de produtos relacionados de uma só vez, garantindo que todos os produtos criados por uma fábrica concreta sejam compatíveis entre si.
- Use Abstract Factory quando você precisa garantir a consistência entre objetos de uma mesma família (ex: todos os eletrônicos de uma marca compartilham características ou integração).

## Estrutura

- **Fábrica Abstrata**: Interface com métodos para criar cada tipo de produto.
- **Fábricas Concretas**: Implementam a fábrica abstrata para uma variante específica (ex: Apple, Samsung, Xiaomi).
- **Produtos Abstratos**: Interfaces para cada tipo de produto (ex: Phone, Laptop, Tablet, Smartwatch).
- **Produtos Concretos**: Implementações específicas dos produtos para cada variante.

## Exemplo prático (do arquivo `eletronics.ts`)

No seu código, temos a interface `AbstractElectronicFactory` com métodos para criar diferentes eletrônicos. Cada fábrica concreta (AppleFactory, SamsungFactory, XiaomiFactory) implementa esses métodos para retornar produtos compatíveis entre si:

```typescript
// Exemplo simplificado
const appleFactory = new AppleFactory();
const applePhone = appleFactory.createPhone();
const appleLaptop = appleFactory.createLaptop();
console.log(applePhone.makeCall()); // Making a call on iPhone
console.log(appleLaptop.runProgram()); // Running a program on MacBook

const samsungFactory = new SamsungFactory();
const samsungTablet = samsungFactory.createTablet();
console.log(samsungTablet.watchVideo()); // Watching video on Galaxy Tab
```
