                    AULA SOBRE GRID

#### CONTAINER

- display: grid;
- grid-templante-columns;
- grid-templante-rows;
- grid-gap;
    - grid-row-gap;
    - grid-column-gap;
- grid-templante-areas;

... e mais 4 propriedades e **alinhamento**

---
## ITEM(s)

- grid-column
    - grid-column-start
    - grid-column-end
- grid-row
    - grid-row-start
    - grid-row-end
- grid-area

... e mais 2 propriedades de ***alinhamneto**

# GRID: Alinhamneto
---

Existem **6** propriedades para alinhamnetos
1. `justify-content`
2. `align-content`
3. `justify-items`
4. `align-intems`
5. `justify-self`
6. `align-self`

Separando em **2** grupos
1. `justify` e `align`
2. `content`, `items` e `self`

## Justifyt e Align

Sabemos que o grid é bidimensional, nós temos o eixo **X** e o **Y**.
O **eixo X** é o posicionamento horizontal, esquerda para direita.
O **eixo Y** é o posicionamento vertical, cima para baixo.

## Content, Item e Self

Juntando o `justfy`, ou `align`, com esses elementos: `content`, `items` e `self`: nós observamos
nossas propriedades

### Content

`justify-content` e `align-content` nos permite alinhar o próprio grid, relativo ao espaço fora do  grid.

O uso dessas propriedades são raras, pois só é aplicado caso o grid seja menor que a area definida.
(por exemplo, quando usamos em px o tamanho do grid, poderemos terminar com um grid pequeno, para o tamanho da area do grid)

Podemos usar **7 valores**:
1. start
2. end
3. center
4. stretch
5. space-between
6. space-around
7. space-evenly


### Items

`justify-items` e `align-items` vai permitir alinhar os items do nosso grid, em qualquer espaço
disponivel, na célula que ele habitar.

**(NELES SÓ PODEMOS UTILIZAR 4 VALORES)**:
1. start
2. end
3. center
4. stretch

### Self

`justify-self` e `align-self` vai nos permitir alinhar os items em si.
**BOS.: >> (self) segnifica ele mesmo, é a única propriedade que é aplicado nos filhos da grid e não na gride em si.**