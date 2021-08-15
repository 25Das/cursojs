/**
 * Object.values (retorna os valores)
 * Object.entries (retorna chaves e valores em arrays)
 * Object.getOwnPropertyDescriptor(o, 'prop') (retorna os descritores da propriedade)
 * Object.assign(destino, any) (copia um objeto)
 * ... (spread) (modo mais simples de copiar um objeto)
 *
 * Já vimos
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
 */

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };

for (const valor of Object.entries(produto)) {
	console.log(valor[0], valor[1]);
}
